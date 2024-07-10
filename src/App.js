import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/NewNav/NavBarNew';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import { useEffect, useState } from 'react';
import Recommends from './components/recommends/Recommends';
import ThirdScreen from './screens/ThirdScreen';
import ProcessSteps from './components/step/Step';
import BasicAccordion from './components/Akordion/Akordion';

function App() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  <FirstScreen scrolled={scrolled}/>
  <SecondScreen/>
  <ThirdScreen/>
  <Recommends/>
  <ProcessSteps/>
  <BasicAccordion/>
  </>
}

export default App;
