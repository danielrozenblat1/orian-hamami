import React from 'react';
import styles from './Cube.module.css';
import { useEffect,useRef } from 'react';
import { Player } from '@lordicon/react';
import ScrollReveal from 'scrollreveal';
const Cube = (props) => {

    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.cube}`, {
          duration: 1000,
          distance: "30px",
          origin: "top",
          easing: "ease-out",
          reset: false,
          viewFactor: 0.2,
          interval: 300,
          delay: 200,
          scale: 1,
        });
      },[])
    const handleClick = () => {


        if(props.href){
    
    window.open(props.href);
    return ;
    
        }
        const phoneNumber = "+972502575574";
        // Set the message content
        const message =props.message || "היי אוריאן, אשמח לשמוע עוד על..";
    
        // Encode the message for the URL
        const encodedMessage = encodeURIComponent(message);
        // Construct the WhatsApp message URL with phone number and message
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
        // Open the URL in a new tab
        window.open(whatsappURL, "_blank");
    
      };
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const playerRef1 = useRef(null);
    
      useEffect(() => {
        playerRef1?.current?.playFromBeginning();
      }, []);
  return (
    <div className={styles.cube} onClick={handleClick}>
      <div className={styles.content}>
      <div className={styles.icon}>
        <Player icon={props.icon} ref={playerRef1} size="100%" loop={true} onComplete={handleComplete}></Player>
      </div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  );
};

export default Cube;