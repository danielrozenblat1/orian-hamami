import styles from "./ThirdScreen.module.css"
import needle from "../Icons/wired-outline-775-needle.json"
import cars from "../Icons/wired-outline-888-traffic-jam.json"
import mirror from "../Icons/wired-outline-1589-makeup-mirror.json"
import When from "../components/when/When"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
const ThirdScreen=()=>{
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
   
    },[])
return <>
<div className={styles.title}>אני מכירה את התחושה הזו ש..</div>
<div className={styles.row}>

<When title="הגבות לא נראות טבעיות" description="את יוצאת מהטיפול, מסתכלת במראה ולא מרוצה מהתוצאה, הגבות לא נראות לך טבעיות ואת לא מרוצה מהתוצאות" icon={mirror}/>
<When title="המטפלת לא רגישה לכאב שלך" description="העור שלך רגיש ואת מפחדת מהמחט , ביקשת מהמטפלת להתחשב ועדיין, הרגשת כאילו חורטים עלייך בכוחניות.." icon={needle}/>
<When title="כל טיפול נמצא במקום אחר" description="בכל פעם מחדש לסוע לעיר אחרת, לטיפול אחר ולא להיות מסופקת לגמרי" icon={cars}/>

</div>
</>


}
export default ThirdScreen