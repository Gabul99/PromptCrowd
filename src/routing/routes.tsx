import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Layout from '../pages/Layout';
import LoginPage from '../pages/Login';
import MainPage from '../pages/Main';
import DetailPage from '../pages/Detail';

const Routes = () => {
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
