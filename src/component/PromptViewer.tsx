import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoRepoForked } from 'react-icons/go';
import { Answer } from '../model/Answer';

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
`;

const TitleBar = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  gap: 8px;
`;

const TitleText = styled.div`
  font-size: 14px;
  font-weight: 600;
  flex-grow: 1;
  min-width: 0;
`;

const ForkButton = styled.div`
  padding: 2px;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }

  .count {
    font-size: 12px;
    margin-left: 4px;
  }
`;

const PromptContainer = styled.div`
  padding: 16px;
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  background-color: white;
`;

const PromptText = styled.div`
  font-size: 13px;
  font-weight: 400;
  white-space: pre-wrap;
`;

const ForkingContainer = styled.div`
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;

  .fork_id {
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
  }
`;

const ParamsContainer = styled.div`
  width: 100%;
  padding: 16px;
  height: fit-content;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .param-name {
      font-size: 12px;
    }

    .param-value {
      font-size: 12px;
      font-weight: 500;
    }
  }
`;

interface Props {
  answer: Answer | undefined;
  onFork: (answerId: string, content: string, temperature: number, topP: number) => void;
  linkToFork: (answerId: string) => void;
}

const PromptViewer = ({ answer, onFork, linkToFork }: Props) => {
  if (!answer) return <div></div>;
  return (
    <Container>
      {answer.forkId && (
        <ForkingContainer>
          <GoRepoForked />
          This answer is forking{' '}
          <div className="fork_id" onClick={() => linkToFork(answer.forkId!)}>
            {answer.forkId}
          </div>
        </ForkingContainer>
      )}
      <TitleBar>
        <TitleText>{answer.title}</TitleText>
        <ForkButton onClick={() => onFork(answer.id, answer.content, answer.temperature, answer.topP)}>
          <GoRepoForked />
          <div className="count">{answer.forkCount}</div>
        </ForkButton>
      </TitleBar>
      <ParamsContainer>
        <div className="row">
          <div className="param-name">Temperature</div>
          <div className="param-value">{answer.temperature}</div>
        </div>
        <div className="row">
          <div className="param-name">Top P</div>
          <div className="param-value">{answer.topP}</div>
        </div>
      </ParamsContainer>
      <PromptContainer>
        <PromptText>{answer.content}</PromptText>
      </PromptContainer>
    </Container>
  );
};

export default PromptViewer;
