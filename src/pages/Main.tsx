import styled from 'styled-components';
import QuestionItem from '../component/QuestionItem';
import NewQuestionModal from '../component/NewQuestionModal';
import { useEffect, useState } from 'react';
import { Question } from '../model/Question';
import { getQuestions } from '../repository/Question';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionList = styled.div`
  width: 100%;
  padding: 20px 0;
  height: fit-content;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NewQuestionButton = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #24a0ed;
  color: white;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
  margin-left: auto;
`;

const Placeholder = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    getQuestions().then((data) => {
      if (data) setQuestions(data);
    });
  };

  return (
    <PageContainer>
      <QuestionList>
        <NewQuestionButton onClick={() => setModalOpen(true)}>+ New Question</NewQuestionButton>
        {questions.map((q) => (
          <QuestionItem key={q.id} question={q} />
        ))}
        {questions.length === 0 && <Placeholder>No questions now</Placeholder>}
      </QuestionList>
      {isModalOpen && <NewQuestionModal refresh={refresh} onClose={() => setModalOpen(false)} />}
    </PageContainer>
  );
};

export default MainPage;
