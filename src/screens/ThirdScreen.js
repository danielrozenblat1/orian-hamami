import styles from "./ThirdScreen.module.css"
import think from "../Icons/wired-outline-2340-thinking-skeptic-person-avatar.json"
import cars from "../Icons/wired-outline-888-traffic-jam.json"
import mirror from "../Icons/wired-outline-1589-makeup-mirror.json"
import When from "../components/when/When"
import lips from "../Icons/wired-outline-1597-lips.json"
import face from "../Icons/wired-outline-1276-acne-herpes.json"
import laser from "../Icons/wired-outline-1001-shop-scanner.json"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
import CustomButton from "../components/button/Button"
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
<When title="את מפחדת ממראה גס בגבות" description="את מאוד רוצה לעשות שינוי בגבות שלך , קצת למלא חורים וקצת לדייק צורה וסימטריה אבל חוששת ממראה לא טבעי וגס " icon={think}/>
<When title="כל טיפול נמצא במקום אחר" description="בכל פעם מחדש לסוע לעיר אחרת, לטיפול אחר ולא להיות מסופקת לגמרי" icon={cars}/>
<When title="את מפחדת לעשות מילוי שפתיים" description="כבר תקופה ארוכה שאת רוצה למלא את השפתיים אבל עד עכשיו ראית רק תוצאות מוגזמות ולא טבעיות" icon={lips}/>
<When title="טיפולי הלייזר אף פעם לא עובדים" description="בזבזת כבר המון כסף וזמן על אינספור טיפולי לייזר שלא עשו שינוי או שלא היית מרוצה מהתוצאה" icon={laser}/>
<When title="טיפולי הפנים לא אפקטיביים" description="את כבר תקופה ארוכה עוברת מקוסמטיקאית לקוסמטיקאית אבל בעיות העור לא נפתרות" icon={face}/>

</div>
<div className={styles.title}>זה לא חייב להיות ככה!</div>
<div className={styles.description}>אני מזמינה אותך לשיחת ייעוץ חינמית יחד איתי כדי שנבין את הבעיה שאת סובלת ממנה,נמצא לה פתרון ראוי ונפתור אותה אחת ולתמיד!</div>
<CustomButton text="אוריאן , בואי נדבר"/>
</>


}
export default ThirdScreen