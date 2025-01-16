// AboutMe.jsx
import React from 'react';
import styles from './Me.module.css';
import orian from "../../images/אוריאן חממי.jpeg";
// Import your new image here
import processImage from "../../images/אוריאן חממי עבודה בקליניקה.png"; // Update this path to match your image location

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={orian} alt="אוריאן חממי" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>אוריאן חממי</h1>
          <p className={styles.subtitle}>
            קוסמטיקאית קלינית | מומחית לבעיות עור
          </p>
          <p className={styles.description}>
            בעשור האחרון כל מה שאני עושה מהבוקר עד הערב הוא להפוך את הבנות שמגיעות אלי לשלמות עם עצמן ועם עור הפנים שלהן 
          </p>
          <p className={styles.description}>
            אני מתמחה בטיפולי אנטי אייג'ינג,פיגמנטציה, אקנה ופוסט אקנה ומאמינה שאיך שנתייחס לעור שלנו, ככה הוא יתייחס אלינו
          </p>
          <p className={styles.description}>
            במהלך שנותיי במקצוע פיתחתי שיטת טיפול ייחודית בשילוב מכשור וטכנולוגיות חדשניות שבאמת מביאה לתוצאות משמעותיות בעור ובאמת עוזרות לבנות שמגיעות אלי להסתכל מול המראה בבטחון! 
          </p>
          <p className={styles.subtitle}>זה נראה ככה</p>
        </div>
      </div>
      <div className={styles.bottomImageContainer}>
        <img src={processImage} alt="תהליך הטיפול" className={styles.bottomImage} />
      </div>
    </>
  );
};

export default AboutMe;