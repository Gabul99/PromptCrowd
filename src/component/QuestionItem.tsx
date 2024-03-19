import styled from 'styled-components';
import { FaRegComment } from 'react-icons/fa';
import { Question } from '../model/Question';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  cursor: pointer;
  gap: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Title = styled.h1`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 500;
`;

const InfoBar = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 8px;

  .block {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    font-size: 12px;
  }
`;

interface Props {
  question: Question;
}

const QuestionItem = ({ question }: Props) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/detail/${question.id}`)}>
      <Title>{question.title}</Title>
      <InfoBar>
        <div className={'block'}>
          <FaRegComment size={16} />0
        </div>
      </InfoBar>
    </Container>
  );
};

export default QuestionItem;
