import Cube from "../components/cube/Cube"
import styles from "./SecondScreen.module.css"
import needle from "../Icons/wired-outline-775-needle.json"
import cream from "../Icons/wired-outline-1558-shaving-foam-hover-pinch.json"

import face from "../Icons/wired-outline-1572-soap.json"

import laser from "../Icons/wired-outline-1001-shop-scanner.json"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const SecondScreen=()=>{

useEffect(()=>{
    ScrollReveal().reveal(`.${styles.title}`, {
        duration: 1000,
        distance: "30px",
        origin: "top", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });
      ScrollReveal().reveal(`.${styles.description}`, {
        duration: 1000,
        distance: "30px",
        origin: "top", // Start from the right side
        easing: "ease-out",
        reset:false,
        viewFactor: 0.2,
        interval: 300, // Delay between each element
        delay: 200, // Delay before the animation starts
        scale: 1, // Set scale to 1 or null
      });
},[])

    return <>
    <div className={styles.title}>תוכלי למצוא אצלי טיפולים כמו</div>
    <div className={styles.description}>לחצי על כל קוביה כדי לקבל מענה על אותו טיפול</div>
    <div className={styles.row}>
    <Cube icon={face} description="טיפולי פנים" message="היי אוריאן, אשמח לשמוע עוד על טיפולי פנים"/>
    </div>
    <div className={styles.row}>
      

    <Cube icon={needle} description="מיקרובליידינג" message="היי אוריאן, אשמח לשמוע עוד על טיפולי מיקרובליידינג"/>
<Cube icon={laser} description="הסרת שיער בלייזר" message="היי אוריאן, אשמח לשמוע עוד על טיפולי הסרת שיער בלייזר"/>

</div>






    </>
}
export default SecondScreen