import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header';
import ApiCall from './components/ApiCall/ApiCall';

import './App.css';


const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <main>
        <userCard />
      </main>
    </div>
  );
}

export default App;
