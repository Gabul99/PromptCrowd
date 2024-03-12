import styled from 'styled-components';
import QuestionItem from '../component/QuestionItem';
import NewQuestionModal from '../component/NewQuestionModal';
import { useState } from 'react';

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

const MainPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <PageContainer>
      <QuestionList>
        <NewQuestionButton onClick={() => setModalOpen(true)}>+ New Question</NewQuestionButton>
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
      </QuestionList>
      {isModalOpen && <NewQuestionModal onClose={() => setModalOpen(false)} />}
    </PageContainer>
  );
};

export default MainPage;
