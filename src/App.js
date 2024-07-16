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
import Messages from './components/recommends/Messages';
import Face from './components/recommends/Face';
import Lips from './components/recommends/Lips';
import ByMe from './components/ByMe/ByMe';

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
  <Face/>
  <Lips/>
  <ProcessSteps/>
  <Messages/>
  <BasicAccordion/>
  <ByMe/>
  </>
}

export default App;
