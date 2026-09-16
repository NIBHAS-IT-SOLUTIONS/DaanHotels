import React, { useEffect, useState } from 'react';
import './herocss.css';
import { Carousel, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import carouselimg from '../../Images/daan carousel.png'

const HeroSection = () => {
  const Carouseldata = [
    {
      url:'/Images/hero-main-bg.png',
      mobileUrl:'/Images/hero-main-bg2.png',
       HotelName:"Daan Hotels",
      description:"Stay in Comfort. Leave with Memories.",
      main:true
    },
    {
      url:'https://pix8.agoda.net/hotelImages/110614/846707625/8367d308835df36a197bb014e3b964e1.jpg?va=1&ce=2&s=1024x',
      HotelName:"Daan Orchid Residency",
      description:"Stay in Comfort. Leave with Memories.",
       main:false
    }, {
      url:'/Images/daanorcid.jpeg',
      HotelName:"Daan Orchid Residency",
      description:"A Place for Every Family Moment.",
       main:false
    }

    ,{
      HotelName:"Daan Regency",
      description:"In the Heart of the City, With You in Mind",
      url:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/365966034.jpg?k=eb2a05f014861063e373d92f1ed1e5bb77571cfbc864aa90f73cdf8c587a8e7b&o=',
       main:false
    }, {
      url:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/776196590.jpg?k=13438a253f72fbe69db7a9492370560aa805df6d11f28ac00c1b70207e2c55c3&o=',
      HotelName:"Daan Luxe Inn",
      description:"A Place for Every Family Moment.",
       main:false
    },{
      url:'https://pix8.agoda.net/hotelImages/4990856/0/c44d60550d96fa643efcb47663ffdc80.jpg?ce=3&s=1024x ',
      HotelName:"Daan Ambalath Maple",
      description:"Stay in Comfort. Leave with Memories.",
       main:false
    }

  ];
  const [link,setLink]=useState('')
  const[selct,setSelct]=useState('')
const facilities = [
{
    name: "Daan Orchid residency",
    location: "Kottayam", location2:'',
      img:'https://i.postimg.cc/PfLLnBBC/Copy-of-Facade-5.jpg',
      link: '/daan-orchid'
  },
   {
    name: "DAAN LUXE INN",
    location: "Trivandrum", location2:'Thiruvananthapuram',
      img:'/Images/lux-1.jpg',
      link: '/daanluxeinn'
  },   {
    name: "DAAN COSMOSINN",
    location: "Trivandrum",
    location2:'Thiruvananthapuram',
      img:'/Images/BG-20.jpeg',
      link: '/daan-cosmos-inn'
  },
  {
    name: "Daan Temple inn",
    location: "Guruvayoor",
    location2:"",
    img:'https://i.postimg.cc/LsC2p22y/DAAN-TEMPLE-INN007-scaled.jpg',
      link: '/daan-temple-inn'
  },  
  {
    name: "Daan Ambalath Maple",
    location: "Guruvayoor",location2:"",
    img: "/Images/_DDD8-_ copy.jpg",
    link: '/daan-ambalath/'
  },{
    name: "Urbn24",
    location: "Kalamassery",location2:"",
   img:'https://i.postimg.cc/0Qsd9Rnw/ABI6958-Edit-1-1024x766.webp',
      link: 'https://urbn24.in/'
  },{
    name: "Daan Inn",
    location: "Kochi Kakkanad",location2:"Ernakulam",
         img:'https://i.postimg.cc/NFbVD9k8/ABI1677-HDR-Edit.jpg',
      link: 'https://daaninn.in/'
  },{
    name: "Monsoon Retreats By Daan",
    location: "Thekkady",location2:"",
     img:'Images/daan-thekkady.webp',
      link: '/Monsoon-Retreats-By-Daan'
  },{
    name: "Daan Residency",
    location: "Kochi Edapally",location2:"Ernakulam",
       img:'https://i.postimg.cc/QxJLDhqp/ABI1197-Edit-copy-1024x683.webp',
      link: 'https://daanresidency.in/'
  },{
    name: "Daan South Park",
    location: "Ernakulam", location2:"",
      img:'https://i.postimg.cc/FzghwcRS/1639455211.jpg',
      link: 'https://www.booking.com/hotel/in/daan-south-park.en-gb.html?aid=357028&label=bin859jc-1DCAsobEIPZGFhbi1zb3V0aC1wYXJrSDNYA2hsiAEBmAEJuAEXyAEM2AED6AEB-AEDiAIBqAIDuALqjPXBBsACAdICJDI4NDAxYWU1LWFjNDktNDMyMi05OTc2LWZkOTdmY2YxNzNkYtgCBOACAQ&sid=e8aa6d68ffa841b312fa52746b65c647&dist=0&keep_landing=1&sb_price_type=total&type=total&'
 
  },{
    name: "Amala Arcade Thrissur",
    location: "Thrissur",location2:"",
         img:'https://i.postimg.cc/x8Bwd14R/DSC4163-HDR-copy-scaled.jpg',
      link: 'https://amalaarcade.com/'
  },
  {
    name: "D Nest Inn",
    location: "Thrissur",location2:"",
         img:'/Images/d-nest.webp',
      link: 'https://dnestinn.store/'
  },
  {
    name: "Daan Regency",
    location: "Thrissur",location2:"",
      img:'/Images/dan-reg-33.jpeg',
      link: 'https://be.aiosell.com/book/04207cd949'
  },
  {
    name: "Meridian By Daan",
    location: "Trivandrum",location2:"Thiruvananthapuram",
 img:'https://i.postimg.cc/tJDLhzJB/478877522.jpg',
      link: 'https://be.aiosell.com/book/d53b872227'
  },
  
  {
    name: "Clouds By Daan",
    location: "Vagamon",location2:"",
     img:'/Images/Vaga-2.jpeg',
      link: 'https://be.aiosell.com/book/8903988c3c'
  },
  ];
   const [selectedLink, setSelectedLink] = useState('');
   const [hotelArray, setSelectedHotelArray] = useState(facilities);

const handleChange = (e) => {
  const location = e.target.value;

  setSelectedLink(""); // Reset hotel selection

  if (location !== "") {
    setSelectedHotelArray(
      facilities.filter((f) => f.location === location)
    );
  } else {
    setSelectedHotelArray(facilities);
  }
};
  const handleChange2 = (e) => {
    const link = e.target.value;
    setSelectedLink(link);
  };

const today = new Date().toISOString().split('T')[0];
  const handleClick = () => {
    if (selectedLink) {
      window.open(selectedLink, '_blank');
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

const [currentIndex, setCurrentIndex] = useState(0);

const currentHotel = Carouseldata[currentIndex];

const nextSlide = () => {
  setCurrentIndex((prev) => (prev + 1) % Carouseldata.length);
};

const prevSlide = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? Carouseldata.length - 1 : prev - 1
  );
};

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % Carouseldata.length);
  }, 12000);

  return () => clearInterval(interval);
}, [Carouseldata.length]);

const [isMobile, setIsMobile] = useState(
  window.matchMedia("(max-width: 700px)").matches
);

useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 700px)");

  const handleChange = (e) => {
    setIsMobile(e.matches);
  };

  mediaQuery.addEventListener("change", handleChange);

  return () => mediaQuery.removeEventListener("change", handleChange);
}, []);

  return (
//  <section
//   className="hero"
//   style={{
//     backgroundImage: `url(${Carouseldata[currentSlide].url})`,
//   }}
// >
//   <div className="hero-overlay">

//     <Container>

//       <div className="hero-content">

//         <div className="hero-left">
//           <h1>{Carouseldata[currentSlide].HotelName}</h1>

//           <p>{Carouseldata[currentSlide].description}</p>
//         </div>

//         <div className="booking-box">

//           <Row className="g-3 select-boxes">

//             <Col lg={4}>
//               <Form.Label>Location</Form.Label>
//               <Form.Select onChange={handleChange}>
//                 <option value="">Select Location</option>

//                       {[...new Set(facilities.map(f => f.location))].map((location,index)=>(
//                         <option key={index}>{location}</option>
//                       ))}
//               </Form.Select>
//             </Col>

//             <Col lg={4}>
//               <Form.Label>Hotel</Form.Label>
//               <Form.Select
//                 value={selectedLink}
//                 onChange={handleChange2}
//               >
//                  <option value="">Select Hotel</option>

//                       {hotelArray.map((facility,index)=>(
//                         <option
//                           key={index}
//                           value={facility.link}
//                         >
//                           {facility.HotelName}
//                         </option>
//                       ))}
//               </Form.Select>
//             </Col>

//             <Col lg={4} className="d-grid align-items-end">
//               <Button  style={{background:"#2f816b",border:"none"}}    onClick={handleClick} className="hero-btn blue-btn">
//                 Check Availability
//               </Button>
//             </Col>

//           </Row>

//         </div>

//       </div>

//       <div className="hero-dots">
//         {Carouseldata.map((_, index) => (
//           <span
//             key={index}
//             className={currentSlide === index ? "active" : ""}
//             onClick={() => setCurrentSlide(index)}
//           />
//         ))}
//       </div>

//     </Container>

//   </div>
//   <button
//   className="hero-arrow left"
//   onClick={() =>
//     setCurrentSlide(
//       currentSlide === 0
//         ? Carouseldata.length - 1
//         : currentSlide - 1
//     )
//   }
// >
//   ❮
// </button>

// <button
//   className="hero-arrow right"
//   onClick={() =>
//     setCurrentSlide(
//       (currentSlide + 1) % Carouseldata.length
//     )
//   }
// >
//   ❯
// </button>
// </section>

<section className="hero-section">
  <div className="hero-left">

    <div className="hero-slider">
        {/* image */}
{
  isMobile?    <img
        src={currentHotel.mobileUrl?currentHotel.mobileUrl:currentHotel.url}
        alt={currentHotel.HotelName}
        className="hero-image"
      />:   <img
        src={currentHotel.url}
        alt={currentHotel.HotelName}
        className="hero-image"
      />
}
    
     
      {/* Overlay */}
      <div className="hero-overlay">
        <h1>{currentHotel.HotelName}</h1>
        <p>{currentHotel.description}</p>
      </div>
<button className="hero-nav prev-btn" onClick={prevSlide}>
  ❮
</button>

<button className="hero-nav next-btn" onClick={nextSlide}>
  ❯
</button>
    </div>
   
  </div>

  <div className="hero-right">
<div class="hero-content">

    <span class="hero-tagline">
        TEN DESTINATIONS ONE
    </span>

    <h1 class="hero-title">
        SIGNATURE OF <br />
        HOSPITALITY
    </h1>

    <p class="hero-subtitle">
        Discover premium stays crafted for comfort, elegance, and unforgettable experiences across every destination.
    </p>

</div>
    <div className="booking-card">

      <h2>Book Your Stay</h2>

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Select onChange={handleChange}>
                <option value="">Select Location</option>

                      {[...new Set(facilities.map(f => f.location))].map((location,index)=>(
                        <option key={index}>{location}</option>
                      ))}
              </Form.Select>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Hotel</Form.Label>
        <Form.Select
       
                value={selectedLink}
                onChange={handleChange2}
              >
                 <option  value="">Select Hotel</option>
                

                      {hotelArray.map((facility,index)=>(
                        <option
                        style={{color:"black"}}
                          key={index}
                          value={facility.link}
                        >
                          {facility.name}
                        </option>
                      ))}
              </Form.Select>
      </Form.Group>

      <Button onClick={handleClick} style={{ background: "#2f816b", border: "none" }} className="booking-btn">
        Check Availability
      </Button>

    </div>

  </div>

</section>
  );
};

export default HeroSection;
