import styled from 'styled-components';
import { LuSend } from 'react-icons/lu';
import { sendMessage } from '../openai/OpenAI';
import { useState } from 'react';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 560px;
  height: calc(100vh - 160px);
  background-color: white;
  border-radius: 8px;
  gap: 16px;
  overflow-y: auto;
  min-height: 0;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  flex-shrink: 0;
`;

const ChatArea = styled.div`
  width: 100%;
  min-height: 0;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  overflow-anchor: auto !important;

  .list {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  height: 64px;
  flex-shrink: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 8px;

  input {
    all: unset;
    font-size: 12px;
    flex-grow: 1;
    min-width: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);

    &:focus {
      border-bottom: 1px solid rgba(0, 0, 0, 1);
    }
  }

  .btn {
    flex-shrink: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

interface Msg {
  name: string;
  content: string;
}

interface Props {
  prompt: string;
  temperature: number;
  topP: number;
  onClose: () => void;
}

const GPTTestModal = ({ prompt, temperature, topP, onClose }: Props) => {
  const [isNetworking, setNetworking] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [chats, setChats] = useState<Msg[]>([]);
  const handleSend = () => {
    if (isNetworking) return;
    setNetworking(true);
    setChats([...chats, { name: 'user', content: inputValue }]);
    setInputValue('');
    sendMessage(
      prompt,
      inputValue,
      temperature,
      topP,
      chats.map((chat) => {
        if (chat.name === 'user') return { role: 'user', content: chat.content };
        else return { role: 'assistant', content: chat.content };
      })
    )
      .then((a) => {
        setNetworking(false);
        setChats((prev) => [...prev, { name: 'gpt', content: a.message.content ?? 'error' }]);
      })
      .catch(() => {
        setNetworking(false);
        window.alert('Error: problem during networking through OpenAI API');
        setChats((prev) => prev.slice(0, prev.length - 1));
      });
  };
  return (
    <Container onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Layout>
          <Title>GPT Test</Title>
          <ChatArea>
            <div className="list">
              {chats.map((chat) => (
                <ChatItem name={chat.name} message={chat.content} />
              ))}
            </div>
          </ChatArea>
          <InputContainer>
            {isNetworking ? (
              <div>AI is generating answer...</div>
            ) : (
              <>
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                  placeholder="Type user message"
                />
                <div className="btn" onClick={() => handleSend()}>
                  <LuSend />
                </div>
              </>
            )}
          </InputContainer>
        </Layout>
      </ModalContainer>
    </Container>
  );
};

export default GPTTestModal;

const ChatItemContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  gap: 8px;

  .name {
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }

  .msg {
    font-size: 14px;
    color: black;
    white-space: pre-line;
  }
`;

const ChatItem = ({ name, message }: { name: string; message: string }) => {
  return (
    <ChatItemContainer>
      <div className="name">{name}</div>
      <div className="msg">{message}</div>
    </ChatItemContainer>
  );
};
