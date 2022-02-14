import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'

import './App.css';
import Header from './components/Header/Header';


const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <main>

      </main>

    </div>
  );
}

export default App;
