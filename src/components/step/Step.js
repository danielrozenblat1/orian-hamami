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
  const steps = [
    {
      title: "פגישת ייעוץ",
      description: "פגישה ללא עלות לתיאום ציפיות והצגת סקיצה מתאימה."
    },
       {
      title: "קבלת החומרים המתאימים",
      description: "בהתאם לטיפול, תקבלי ממני קרמים/חומרים מתאימים שיכינו את האזור בצורה האידיאלית לטיפול שלנו"
    },
    {
      title: "טיפול ראשון",
      description: " הטיפול אורך למשך כשעה, בסוף הטיפול את מקבלת ממני הוראות להחלמה לתקופה הקרובה."
    },
    {
      title: "טיפול שני",
      description: "לאחר חודש וחצי, את מגיעה לבדיקה ולטיפול נוסף לקבלת התוצאה הסופית."
    },
 
    // {
    //   title: "הסרת שיער",
    //   description: "פגישת ייעוץ, אבחון העור והשיער, והתאמת סדרת טיפולים או טיפול בודד."
    // },
    // {
    //   title: "שירותים נוספים",
    //   description: "מניקור ופדיקור זמינים גם כן בקליניקה."
    // }
  ];

  return (
    <>
      <div className={styles.header}>תהליך העבודה איתי</div>
      <div className={styles.processSteps}>
        {steps.map((step, index) => (
          <Step key={index} index={index} title={step.title} description={step.description} />
        ))}
      </div>
      <CustomButton text="לחצי כאן ונדבר" />
    </>
  );
};

export default ProcessSteps;