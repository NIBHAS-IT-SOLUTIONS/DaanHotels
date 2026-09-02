import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Offers.css";
import { Fade,JackInTheBox,Flip  } from "react-awesome-reveal";


const offerItems = [
  { percent: "15% OFF", name:"Daan Regency", link:"https://be.aiosell.com/book/04207cd949", image:"https://daanregency.com/uploads/51318865-f1b7-4732-be95-ce0b5c2571ff1.jpg", code: "DAAN15", title: "Discount Offer", desc: "Use this code to get 15% off on all Your Daan Regency Booking" },
  { percent: "40% OFF" , name:"Daan Orchid", link:"https://daanorchidresidency.com/", image:"https://i.postimg.cc/h4HhpYjY/Copy-of-Suite-10-2.jpg", code: "DEV40", title: "Festival offer", desc: "Use this code Get 40% discount on this Festival Season." },
  { percent: "25% OFF",  name:"Daan Monsoon Retreats", link:"/Monsoon-Retreats-By-Daan",  image:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/829969981.jpg?k=9d96462032ed17e9c56811d6d7630d8d11cca3b0a60beabf4ed9f9bdc65be615&o=", code: "PM25", title: "Bundle Offer", desc: "Use this code Get  25% off on all multiple Rooms Booking" },
];

export default function Offers() {
  const [copiedCode, setCopiedCode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    
    <section className="we-offer-area text-center py-5 bg-gray">
      {/* <Fade direction="up" duration={1000} > */}
      <div className="container">
        <div className="site-heading text-center ">
          <h2>Prime Hotels</h2>
        </div>

        {isMobile ? (
          // 
          
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
          >
            {offerItems.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Fade direction="up" delay={500} duration={1000} >
                <div className="item" onClick={() => handleCopy(item.code)}>
                  {/* <div className="offer-percent">{item.percent}</div>
                  <br />
                  <h4 >{item.title}</h4>
                  <br />
                  <p>{item.desc}</p>
                  <br /> */}
                  <img src={item.image} alt={item.title} />

                  <div className="offer-hover">
                    <h4 onClick={()=>window.location.href=item.link} >Visit Now</h4>
                    <p>{item.name}</p>
                    {/* <p>{item.desc}</p>
                    <div className="offer-code">Code: <strong>{item.code}</strong></div>
                    {copiedCode === item.code && (
                      <div className="copied-msg">Code Copied!</div>
                    )} */}
                  </div>
                </div></Fade>
              </SwiperSlide>
            ))}
          </Swiper>
          
          // </Fade>
        ) : (
          <div className="row">
            {offerItems.map((item, idx) => (
              <div className="col-md-4 col-sm-6 py-5" key={idx}>
                 <Fade delay={300} direction="up" duration={1000} >
                <div   className="item" onClick={() => handleCopy(item.code)}>
                  {/* <div className="offer-percent">{item.percent}</div>
                  <br />
                  <h4>{item.title}</h4>
                  <br />
                  <p>{item.desc}</p>
                  <br /> */}
                  <img src={item.image} alt={item.title} />
                  <div className="offer-hover">
                    <h4 onClick={()=>window.location.href=item.link}>Visit Now</h4>
                    <p> {item.name}</p>
                    {/* <p>{item.desc}</p>
                    <div className="offer-code">Code: <strong>{item.code}</strong></div>
                    {copiedCode === item.code && (
                      <div className="copied-msg">Code Copied!</div>
                    )} */}
                  </div>
                </div>
                </Fade>
              </div>
            ))}
          </div>
        )}
      </div> 
      {/* </Fade> */}
    </section>
   
  );
}
