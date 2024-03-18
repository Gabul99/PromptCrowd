import Routes from './routing/routes';
import './App.css';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
}

export default App;
