import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';

const Main = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  max-height: 100vh;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 100%;
  flex-grow: 1;
  min-height: 0;

  overflow-y: scroll;
`;

const Layout = () => {
  return (
    <Main>
      <LayoutContainer>
        <Header />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </LayoutContainer>
    </Main>
  );
};

export default Layout;
