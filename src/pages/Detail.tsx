import { useParams } from 'react-router-dom';
import PromptEditor from '../component/PromptEditor';
import PromptViewer from '../component/PromptViewer';
import * as S from './Detail.style';
import { useEffect, useState } from 'react';
import { getQuestionById } from '../repository/Question';
import { Question } from '../model/Question';

const DetailPage = () => {
  const [question, setQuestion] = useState<Question>();
  const { questionId } = useParams();
  const [isEditing, setEditing] = useState<boolean>(false);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [forkingAnswerId, setForkingAnswerId] = useState<string | null>(null);

  useEffect(() => {
    if (!questionId) return;
    getQuestionById(questionId).then((data) => {
      if (data) setQuestion(data);
    });
  }, [questionId]);

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
          <S.AnswerListItem className={isEditing ? 'selected' : ''} onClick={() => setEditing(true)}>
            <p className="placeholder">New Answer...</p>
          </S.AnswerListItem>
          <S.AnswerListItem>
            <p className="title">I think it is better to think about this more difficult</p>
          </S.AnswerListItem>
        </S.AnswerList>
      </S.AnswerListArea>
      <S.PromptArea>
        <S.TextAndEditorArea>
          {isEditing ? (
            <PromptEditor />
          ) : selectedAnswerId ? (
            <PromptViewer />
          ) : (
            <S.ViewerPlaceholder>Select other user's answer or Write your new answer!</S.ViewerPlaceholder>
          )}
        </S.TextAndEditorArea>
        <S.PromptTestBar />
      </S.PromptArea>
    </S.Container>
  );
};

export default DetailPage;
