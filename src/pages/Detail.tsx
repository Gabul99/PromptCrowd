import { useParams } from 'react-router-dom';
import PromptEditor from '../component/PromptEditor';
import PromptViewer from '../component/PromptViewer';
import * as S from './Detail.style';
import { useEffect, useState } from 'react';
import { getQuestionById } from '../repository/Question';
import { Question } from '../model/Question';
import { addForkCount, getAnswersByQuestionId, postAnswer } from '../repository/Answer';
import { Answer } from '../model/Answer';
import { v4 } from 'uuid';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../store/AuthAtoms';
import { GoRepoForked } from 'react-icons/go';
import { RiOpenaiFill } from 'react-icons/ri';
import GPTTestModal from '../component/GPTTestModal';

const DetailPage = () => {
  const [question, setQuestion] = useState<Question>();
  const [answers, setAnswers] = useState<Answer[]>();
  const { questionId } = useParams();
  const [isEditing, setEditing] = useState<boolean>(false);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [forkingAnswerId, setForkingAnswerId] = useState<string | null>(null);

  const userInfo = useRecoilValue(userAtom);

  const [answerTitle, setAnswerTitle] = useState<string>('');
  const [answerPrompt, setAnswerPrompt] = useState<string>('');
  const [answerTemperature, setAnswerTemperature] = useState<number | null>(null);
  const [answerTopP, setAnswerTopP] = useState<number | null>(null);
  const [isTestModalOpen, setTestModalOpen] = useState<boolean>(false);

  useEffect(() => {
    refresh();
  }, [questionId]);

  const refresh = () => {
    if (!questionId) return;
    getQuestionById(questionId).then((data) => {
      if (data) setQuestion(data);
    });
    getAnswersByQuestionId(questionId).then((data) => {
      if (data) setAnswers(data);
    });
  };

  const handlePostAnswer = () => {
    if (!userInfo || !questionId) return;
    if (answerTitle === '' || answerPrompt === '' || answerTemperature === null || answerTopP === null) return;
    const newAnswer = {
      id: v4(),
      userId: userInfo.id,
      createdTime: new Date().toISOString(),
      questionId,
      title: answerTitle,
      content: answerPrompt,
      temperature: answerTemperature,
      topP: answerTopP,
      forkId: forkingAnswerId,
      forkCount: 0,
    };
    postAnswer(newAnswer).then(async () => {
      window.alert('Successfully answer is posted!');
      setSelectedAnswerId(newAnswer.id);
      setAnswerPrompt('');
      setAnswerTitle('');
      setEditing(false);
      if (forkingAnswerId !== null) await addForkCount(forkingAnswerId);
      setForkingAnswerId(null);
      setAnswerTemperature(null);
      setAnswerTopP(null);
      refresh();
    });
  };

  const handleFork = (answerId: string, content: string, temperature: number, topP: number) => {
    setForkingAnswerId(answerId);
    setAnswerTitle('');
    setAnswerPrompt(content);
    setSelectedAnswerId(null);
    setAnswerTemperature(temperature);
    setAnswerTopP(topP);
    setEditing(true);
  };

  const linkToFork = (answerId: string) => {
    setSelectedAnswerId(answerId);
  };

  return (
    <S.Container>
      {question && (
        <S.LeftArea>
          <S.ExplanationArea>
            <div className="title">{question.title}</div>
            <div className="description">{question.description}</div>
            <div className="sub-title">Example Question</div>
            <div className="case-block">{question.exampleUserMsg}</div>
            <div className="sub-title">Expected Answer Format</div>
            <div className="case-block">{question.exampleResponse}</div>
          </S.ExplanationArea>
        </S.LeftArea>
      )}
      <S.AnswerListArea>
        <S.AnswerList>
          <S.AnswerListItem
            className={isEditing ? 'selected' : ''}
            onClick={() => {
              setEditing(true);
              setSelectedAnswerId(null);
            }}
          >
            <p className="placeholder">New Answer...</p>
          </S.AnswerListItem>
          {answers &&
            answers.map((a) => {
              return (
                <S.AnswerListItem
                  className={selectedAnswerId === a.id ? 'selected' : ''}
                  onClick={() => {
                    setSelectedAnswerId(a.id);
                    setAnswerTitle('');
                    setAnswerPrompt('');
                    setForkingAnswerId(null);
                    setAnswerTemperature(null);
                    setAnswerTopP(null);
                    setEditing(false);
                  }}
                >
                  <p className="title">{a.title}</p>
                  <div className="forkCountContainer">
                    <GoRepoForked /> {a.forkCount}
                  </div>
                </S.AnswerListItem>
              );
            })}
        </S.AnswerList>
      </S.AnswerListArea>
      <S.PromptArea>
        <S.TextAndEditorArea>
          {isEditing ? (
            <PromptEditor
              title={answerTitle}
              setTitle={setAnswerTitle}
              prompt={answerPrompt}
              setPrompt={setAnswerPrompt}
              temperature={answerTemperature}
              setTemperature={setAnswerTemperature}
              topP={answerTopP}
              setTopP={setAnswerTopP}
              forkingId={forkingAnswerId}
            />
          ) : selectedAnswerId ? (
            <PromptViewer answer={answers?.filter((a) => a.id === selectedAnswerId)[0]} onFork={handleFork} linkToFork={linkToFork} />
          ) : (
            <S.ViewerPlaceholder>Select other user's answer or Write your new answer!</S.ViewerPlaceholder>
          )}
        </S.TextAndEditorArea>
        <S.PromptTestBar>
          <S.GPTButton
            className={isEditing || selectedAnswerId !== null ? '' : 'inactive'}
            onClick={() => {
              if (isEditing || selectedAnswerId !== null) setTestModalOpen(true);
            }}
          >
            <div className="icon">
              <RiOpenaiFill />
            </div>
            GPT Test
          </S.GPTButton>
          {isEditing && <S.PostButton onClick={handlePostAnswer}>Post</S.PostButton>}
        </S.PromptTestBar>
      </S.PromptArea>
      {isTestModalOpen && (
        <GPTTestModal
          prompt={answerPrompt}
          temperature={answerTemperature ?? answers!.filter((a) => a.id === selectedAnswerId)[0].temperature}
          topP={answerTopP ?? answers!.filter((a) => a.id === selectedAnswerId)[0].topP}
          onClose={() => setTestModalOpen(false)}
        />
      )}
    </S.Container>
  );
};

export default DetailPage;
