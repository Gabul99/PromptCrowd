import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoRepoForked } from 'react-icons/go';

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
`;

const PromptContainer = styled.div`
  padding: 16px;
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  background-color: white;
`;

const PromptText = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const PromptViewer = () => {
  return (
    <Container>
      <TitleBar>
        <TitleText>Title</TitleText>
        <ForkButton>
          <GoRepoForked />
        </ForkButton>
      </TitleBar>
      <PromptContainer>
        <PromptText>Detail</PromptText>
      </PromptContainer>
    </Container>
  );
};

export default PromptViewer;
