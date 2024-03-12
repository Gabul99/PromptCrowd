import styled from 'styled-components';

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
  return (
    <Page>
      <LoginContainer>
        <LoginButton>Login</LoginButton>
      </LoginContainer>
    </Page>
  );
};

export default LoginPage;
