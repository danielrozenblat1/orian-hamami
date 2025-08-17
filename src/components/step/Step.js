import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './Step.module.css';
import CustomButton from '../button/Button';

const Step = ({ title, description, index }) => {
  const stepRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(stepRef.current, {
      origin: index % 2 === 0 ? 'left' : 'right',
      distance: '30px',
      duration: 1200,
      delay: 200,
      easing: 'ease-in-out'
    });
  }, [index]);

  return (
    <div ref={stepRef} className={`${styles.step} ${index % 2 === 0 ? styles.leftStep : styles.rightStep}`}>
      <div className={styles.stepNumber}>{index + 1}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const ProcessSteps = () => {
  const treatments = [
    {
      name: "טיפולי פנים",
      steps: [
        {
          title: "התאמת טיפול",
          description: "התאמת טיפול בודד או סדרה בהתאם למצב העור ושילוב טכנולוגיות מתקדמות עד לתוצאות מקסימליות בטיפול."
        },
        {
          title: "התאמת חומרים",
          description: "התאמה מדויקת של חומרים שמתאימים למצב העור שלך כדי להמשיך טיפול משלים בבית."
        },
        {
          title: "מעקב וליווי",
          description: "מעקב וליווי צמוד שלי עד שנגיע לתוצאה שבעקבותיה הגעת אלי לטיפול."
        }
      ]
    },
    {
      name: "מיקרובליידינג",
      steps: [
        {
          title: "פגישת ייעוץ",
          description: "פגישת ייעוץ ללא עלות לתיאום ציפיות והצגת סקיצה מושלמת למבנה הפנים שלך."
        },
        {
          title: "הטיפול",
          description: "הטיפול אורך כשעה ובסוף הטיפול את מקבלת ממני דף הוראות מלא לטיפול בעור לאחר איפור קבוע בבית."
        },
        {
          title: "טיפול נוסף",
          description: "לאחר כחודש וחצי את מגיעה לטיפול נוסף לקבלת התוצאה הסופית."
        }
      ]
    },
    
  ];

  return (
    <>
         <div className={styles.header} id="תהליך העבודה איתי" >תהליך העבודה איתי</div>
      {treatments.map((treatment, treatmentIndex) => (
        <React.Fragment key={treatmentIndex}>
     
          <div className={styles.more}>{treatment.name}</div>
          <div className={styles.processSteps}>
            {treatment.steps.map((step, index) => (
              <Step key={index} index={index} title={step.title} description={step.description} />
            ))}
          </div>
     
        </React.Fragment>
      ))}
           <CustomButton text="לחצי כאן ונדבר" />
    </>
  );
};

export default ProcessSteps;