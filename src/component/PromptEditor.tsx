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
  border-radius: 8px;
  background-color: white;
  gap: 8px;
`;

const TitleInput = styled.input`
  all: unset;
  flex-grow: 1;
  min-width: 0;
  font-size: 14px;
`;

const PromptContainer = styled.div`
  padding: 16px;
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  background-color: white;
`;

const PromptInput = styled.textarea`
  all: unset;
  width: 100%;
  font-size: 12px;
`;

const ForkingContainer = styled.div`
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

interface Props {
  title: string;
  setTitle: (value: string) => void;
  prompt: string;
  setPrompt: (value: string) => void;
  forkingId: string | null;
}

const PromptEditor = ({ title, setTitle, prompt, setPrompt, forkingId }: Props) => {
  useEffect(() => {
    const textarea = document.getElementById('textarea-prompt');
    if (textarea) textarea.style.height = `${textarea?.scrollHeight ?? 0}px`;
    console.log(textarea?.scrollHeight);
  });

  return (
    <Container>
      {forkingId && (
        <ForkingContainer>
          <GoRepoForked /> You are forking {forkingId}...
        </ForkingContainer>
      )}
      <TitleBar>
        <TitleInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Type title..." />
      </TitleBar>
      <PromptContainer>
        <PromptInput id="textarea-prompt" placeholder="Type Prompt..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      </PromptContainer>
    </Container>
  );
};

export default PromptEditor;
