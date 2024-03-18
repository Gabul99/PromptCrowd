import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { userAtom } from '../store/AuthAtoms';
import { addUser, login } from '../repository/User';
import { v4 } from 'uuid';

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

  const handleLogin = () => {
    if (name === '') return;
    login(name).then((data) => {
      if (!!data) {
        setUserInfo(data);
        navigate('/main');
      } else {
        handleSignup(name);
      }
    });
  };

  const handleSignup = (name: string) => {
    addUser({
      id: v4(),
      name,
    }).then(() => handleLogin());
  };

  return (
    <Page>
      <LoginContainer>
        <NameInput placeholder="Type your nickname" value={name} onChange={(e) => setName(e.target.value)} maxLength={10} />
        <LoginButton onClick={handleLogin}>Login</LoginButton>
      </LoginContainer>
    </Page>
  );
};

export default LoginPage;
