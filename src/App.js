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
import AboutMe from './components/me/Me';
import ForthScreen from './screens/ForthScreen';
import PrivacyPolicy from './components/privacy/Privacy';

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
  <AboutMe/>

  <Face/>
  <Recommends/>
  <ProcessSteps/>
  <Messages/>
  <ForthScreen/>
  <PrivacyPolicy 
  ownerName="אוריאן חממי" 
  email="orian0808@walla.com" 
  phone="+972 50-257-5574" 
  domain="https://orianhamami.co.il/" 
/>
  <ByMe/>
  </>
}

export default App;
