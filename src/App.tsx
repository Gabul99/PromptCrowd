import Routes from './routing/routes';
import './App.css';
import { RecoilRoot } from 'recoil';
import './firebase/firebase';

function App() {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
}

export default App;
