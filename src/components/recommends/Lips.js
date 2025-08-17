import styles from "./Recommends.module.css"
import result1 from "../../images/אוריאן טיפול פנים 1.png"
import result2 from "../../images/אוריאן טיפול פנים 2.png"
import result3 from "../../images/אוריאן טיפול פנים 3.png"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../button/Button"
const Lips=()=>{
    const sliderSettings = {
     
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        infinite: true,
   
        dots:false,
        
        slidesToShow: window.innerWidth < 450 ? 1 : window.innerWidth < 750 ? 2 : 3,
        slidesToScroll:1,
                     
      };
      const content = [
        {
          type: 'image',
          src: result1,
        },
       
        {
          type: 'image',
          src: result2,
        },
  
        {
          type: 'image',
          src: result3,
        },
      
    
     
   

  

        ];  
return <>
<div className={styles.title} id="טיפולי פנים">לא עוד מראה ברווזי בשפתיים אחרי טיפול חומצה הילראונית!</div>

<div className={styles.explain}>תחליקי בין התמונות כדי לראות את התוצאות ממילוי שפתיים בחומצה הילארונית בשיטה החדשנית  ללא מחט אצלי בקליניקה</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemscope itemtype="http://schema.org/Review">
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`אוריאן חממי חומצה הילראונית מספר ${index + 1}`} itemprop="image"/>
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
           <meta itemprop="datePublished" content={new Date().toISOString()} />
            </div>
            
          ))}
        </Slider>
      </div>

<div className={styles.center}><Button text="אוריאן,אני רוצה לשמוע עוד!"/></div>
</>


}
export default Lips