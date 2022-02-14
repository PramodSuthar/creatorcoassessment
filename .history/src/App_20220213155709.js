import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header';
import './App.css';
import ApiCall from './components/ApiCall/ApiCall';



const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <main>
        <ApiCall />
      </main>
    </div>
  );
}

export default App;
