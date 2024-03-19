import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userAtom } from '../store/AuthAtoms';
import { FaArrowLeft } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';

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

const BackButton = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;
`;

const UserName = styled.div`
  font-size: 16px;
  color: rgba(256, 256, 256, 0.6);
  margin-left: auto;
`;

const Header = () => {
  const userInfo = useRecoilValue(userAtom);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      {location.pathname.includes('/detail') && (
        <BackButton onClick={() => navigate('/main')}>
          <FaArrowLeft color="white" />
        </BackButton>
      )}
      <UserName>{userInfo ? `Hello, ${userInfo.name}` : ''}</UserName>
    </Container>
  );
};

export default Header;
