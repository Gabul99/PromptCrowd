import { Route, Routes as ReactRouterRoutes, useNavigate } from 'react-router-dom';
import Layout from '../pages/Layout';
import LoginPage from '../pages/Login';
import MainPage from '../pages/Main';
import DetailPage from '../pages/Detail';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../store/AuthAtoms';
import { useEffect } from 'react';

const Routes = () => {
  const userInfo = useRecoilValue(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo === null) navigate('/');
  }, [userInfo]);

  return (
    <ReactRouterRoutes>
      <Route element={<Layout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Route>
    </ReactRouterRoutes>
  );
};

export default Routes;
