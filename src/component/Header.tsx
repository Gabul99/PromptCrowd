import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userAtom } from '../store/AuthAtoms';

const Container = styled.div`
  width: 100%;
  height: 48px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  flex-shrink: 0;
`;

const UserName = styled.div`
  font-size: 16px;
  color: rgba(256, 256, 256, 0.6);
  margin-left: auto;
`;

const Header = () => {
  const userInfo = useRecoilValue(userAtom);

  return (
    <Container>
      <UserName>{userInfo ? `Hello, ${userInfo.name}` : ''}</UserName>
    </Container>
  );
};

export default Header;
