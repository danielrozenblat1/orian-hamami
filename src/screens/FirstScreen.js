import styles from "./FirstScreen.module.css"
import orian from "../images/אוריאן חממי.png"

const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled?styles.descriptionP:styles.description}>נמאס לך לרוץ בין 10 מומחיות כדי לטפח את עצמך כל פעם מחדש?</div>
<div className={styles.subTitle}>את יכולה לעצור.. הגעת למקום הנכון!</div>
<h1 className={styles.title}>אוריאן ביוטי - סלון יופי</h1>
<div className={styles.center}><img className={styles.image} src={orian} alt="אוריאן חממי"/></div>
<div className={styles.subTitle}>הכל במקום   א ח ד</div>
</>


}
export default FirstScreen