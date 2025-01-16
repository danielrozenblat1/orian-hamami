import styles from "./Recommends.module.css"
import result1 from "../../images/אוריאן חממי לקוחה 1.png"
import result2 from "../../images/אוריאן חממי לקוחה 2.png"
import result3 from "../../images/אוריאן חממי לקוחה 3.png"
import result4 from "../../images/אוריאן חממי לקוחה 4.png"
import result5 from "../../images/אוריאן חממי לקוחה 5.png"
import result6 from "../../images/אוריאן חממי לקוחה 6.png"
import result7 from "../../images/אוריאן חממי לקוחה 7.png"
import result8 from "../../images/אוריאן חממי לקוחה 8.png"
import result9 from "../../images/אוריאן חממי לקוחה 9.png"

import result13 from "../../images/אוריאן חממי לקוחה 13.png"
import result14 from "../../images/אוריאן חממי לקוחה 14.png"
import result15 from "../../images/אוריאן חממי לקוחה 15.png"
import result16 from "../../images/אוריאן חממי לקוחה 16.png"
import result17 from "../../images/אוריאן חממי לקוחה 17.png"
import result18 from "../../images/אוריאן חממי לקוחה 18.png"
import result19 from "../../images/אוריאן חממי לקוחה 19.png"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../button/Button"
const Recommends=()=>{
    const sliderSettings = {
     
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        infinite: true,
   
        dots:false,
        
        slidesToShow: window.innerWidth < 450 ? 1 : window.innerWidth < 750 ? 2 : window.innerWidth < 1100 ? 3 :4,
        slidesToScroll:1,
                     
      };
      const content = [
  
    

    
        {
          type: 'image',
          src: result3,
        },
        {
          type: 'image',
          src: result4,
        },
        {
          type: 'image',
          src: result1,
        },
             
        {
          type: 'image',
          src: result19,
        },
        {
          type: 'image',
          src: result6,
        },
   


     
        {
          type: 'image',
          src: result8,
        },
        {
          type: 'image',
          src: result9,
        },

        {
          type: 'image',
          src: result13,
        },
        {
          type: 'image',
          src: result14,
        },
        {
          type: 'image',
          src: result15,
        },
        {
          type: 'image',
          src: result16,
        },
     
        {
          type: 'image',
          src: result2,
        },
        {
          type: 'image',
          src: result17,
        },
        {
          type: 'image',
          src: result5,
        },
        {
          type: 'image',
          src: result18,
        },   
        {
          type: 'image',
          src: result7,
        },
        ];  
return <>
<div className={styles.title} id="תוצאות">מיקרובליידינג</div>

<div className={styles.explain}>תחליקי בין התמונות של הבנות שכבר עשו את הצעד</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemscope itemtype="http://schema.org/Review">
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`אוריאן חממי לפני אחרי מספר ${index + 1}`} itemprop="image"/>
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
export default Recommends