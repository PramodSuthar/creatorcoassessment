import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'

import './App.css';


function App() {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>


    </div>
  );
}

export default App;
