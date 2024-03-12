import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const PromptEditor = () => {
  const [promptValue, setPromptValue] = useState('');

  useEffect(() => {
    const textarea = document.getElementById('textarea-prompt');
    if (textarea) textarea.style.height = `${textarea?.scrollHeight ?? 0}px`;
    console.log(textarea?.scrollHeight);
  });

  return (
    <Container>
      <TitleBar>
        <TitleInput placeholder="Type title..." />
      </TitleBar>
      <PromptContainer>
        <PromptInput id="textarea-prompt" placeholder="Type Prompt..." value={promptValue} onChange={(e) => setPromptValue(e.target.value)} />
      </PromptContainer>
    </Container>
  );
};

export default PromptEditor;
