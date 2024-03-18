import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { userAtom } from '../store/AuthAtoms';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 320px;
  height: fit-content;
  background-color: rgba(0, 0, 0, 0.08);
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
`;

const NameInput = styled.input`
  all: unset;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  margin-bottom: 16px;
  box-sizing: border-box;
  padding: 4px;

  &:focus {
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  }
`;

const LoginButton = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  background-color: black;
`;

const LoginPage = () => {
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userAtom);

  const login = () => {
    if (name === '') return;
    setUserInfo({
      id: '123',
      name,
    });
    navigate('/main');
  };

  return (
    <Page>
      <LoginContainer>
        <NameInput placeholder="Type your nickname" value={name} onChange={(e) => setName(e.target.value)} maxLength={10} />
        <LoginButton onClick={login}>Login</LoginButton>
      </LoginContainer>
    </Page>
  );
};

export default LoginPage;
