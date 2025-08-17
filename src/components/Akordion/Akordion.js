import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button from '../button/Button';
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 0 5px 1px #999',
          width: "100%",
          margin: "auto",
          background:"linear-gradient(135deg, rgba(171,125,115,1) 0%, rgba(255,227,212,1) 50%, rgba(171,125,115,1) 100%)",
  
          display: "flex",
          flexDirection: "column",
          
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

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
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות נפוצות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">זמן לענות על השאלות שלכן</div>
    <div className={styles.subTitle}>מיקרובליידינג</div>
      <DropdownAccordion title="האם טיפול מיקרובליידינג הוא כמו קעקוע?" content="1. טיפול המיקרובליידינג הוא ממש לא כמו קעקוע, גם מבחינת הפיגמנטים וגם מבחינת החדירה. בקעקוע אנחנו משתמשים בפיגמנטים שמתאימים לקעקוע ואינם יורדים מהעור ולעיתים אפילו משנים את צבעם , לעומת זאת המיקרובליידינג הפיגמנטים הם מינרלים ומתנדפים מהעור עם הזמן בצורה הדרגתית ואיתם משנים את הצבעם.
וגם מבחינת החדירה- בקעקוע אנחנו חודרים לשכבות עמוקות הרבה יותר מבטיפול המיקרובליידינג שבו אנחנו חודרים רק לשכבה העליונה של העור" />
      <DropdownAccordion title="האם התוצאה יוצאת טבעית?" content="שיטת המיקרובליידינג היא השיטה הכי חדשנית וטבעית בעולם האיפור קבוע כיום , אני מציירת לך בטיפול שיערות שמשתלבות באופן מושלם עם השיערה הטבעית של הגבה שלך ומתאימה אותה גם מבחינת עובי השיערה וגם מבחינת הפיגמנט ככה שהתוצאה יוצאת סופר טבעית ומדויקת" />
      <DropdownAccordion title="למי מתאים טיפול המיקרובליידינג?" content="טיפול המיקרובליידינג מתאים לכל מי שמעוניינת לעשות שינוי בגבות שלה אבל בכל זאת להישאר עם המראה הטבעי , בין אם זה להוסיף שיערות, לעשות אפקט של הרמת העין, לעבות ולמלא את הגבות אבל בצורה העדינה והטבעית ביותר." />
      <div className={styles.subTitle}>טיפולי פנים</div>
        <DropdownAccordion title="האם אפשר להגיע לתוצאות משמעותיות החל מהטיפול הראשון?" content="כן בהחלט, החל מהטיפול פנים הראשון אצלי בקליניקה אני מאבחנת לך את מצב העור בצורה מדויקת וכבר מתחילה לעבוד עליו בהתאם בשילוב של טכנולוגיות מתקדמות ולגמרי תרגישי בהבדל החל מטיפול בודד אצלי ."/>
        <DropdownAccordion title="האם טיפול הלייזר אצלי בקליניקה כואב?" content="אצלי בקליניקה אני עובדת עם מכונת לייזר להסרת שיער ללא כאבים כלל."/>
</div>
    <Button text="אוריאן יש לי עוד כמה שאלות"/>
 </>
}
