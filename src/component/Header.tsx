import styled from 'styled-components';

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

const Header = () => {
  return <Container></Container>;
};

export default Header;
