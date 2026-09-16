import React, { useEffect, useRef, useState } from 'react';
import './LuxuryRoomsSection.css';
import { Button } from 'react-bootstrap';

const roomCards = [

  {
    id: 1,
    title: "Daan Orchid residency",
    location: "Kottayam", location2:'',
        subtitle:"Studio AC Rooms",
    bgClass: 'bg-card-2',
      img:'https://i.postimg.cc/PfLLnBBC/Copy-of-Facade-5.jpg',
      link: '/daan-orchid'
  },
   {
    id: 2,
    title: "DAAN LUXE INN",    subtitle:"Premium Family Rooms",
    bgClass: 'bg-card-3',
    location: "Trivandrum", location2:'Thiruvananthapuram',
      img:'/Images/lux-1.jpg',
      link: '/daanluxeinn'
  },   {
    id: 3,
    title: "DAAN COSMOSINN",    subtitle:"Double Delux Rooms",
    bgClass: 'bg-card-4',
    location: "Trivandrum",
    location2:'Thiruvananthapuram',
      img:'/Images/BG-20.jpeg',
      link: '/daan-cosmos-inn'
  },
  {
    id: 4,
    title: "Daan Temple inn",
    subtitle:"Super Delux Rooms",
    bgClass: 'bg-card-5',
    location: "Guruvayoor",
    location2:"",
    img:'https://i.postimg.cc/LsC2p22y/DAAN-TEMPLE-INN007-scaled.jpg',
      link: '/daan-temple-inn'
  },  
  {
    id: 5,
    title: "Daan Ambalath Maple",    subtitle:"Studio AC Rooms",
    bgClass: 'bg-card-6',
    location: "Guruvayoor",location2:"",
    img: "/Images/_DDD8-_ copy.jpg",
    link: '/daan-ambalath/'
  },{
    id: 6,
    title: "Urbn24",    subtitle:"Premium Family Rooms",
    bgClass: 'bg-card-7',
    location: "Kalamassery",location2:"",
   img:'https://i.postimg.cc/0Qsd9Rnw/ABI6958-Edit-1-1024x766.webp',
      link: 'https://urbn24.in/'
  },{
    id: 7,
    title: "Daan Inn",    subtitle:"Studio AC Rooms",
    bgClass: 'bg-card-8',
    location: "Kochi Kakkanad",location2:"Ernakulam",
         img:'https://i.postimg.cc/NFbVD9k8/ABI1677-HDR-Edit.jpg',
      link: 'https://daaninn.in/'
  },{
    id: 8,
    title: "Monsoon Retreats By Daan",    subtitle:"Super Delux Rooms",
    bgClass: 'bg-card-9',
    location: "Thekkady",location2:"",
     img:'Images/daan-thekkady.webp',
      link: '/Monsoon-Retreats-By-Daan'
  },{
      id: 9,
    title: "Daan Residency",    subtitle:"Double Delux Rooms",
    bgClass: 'bg-card-10',
    location: "Kochi Edapally",location2:"Ernakulam",
       img:'https://i.postimg.cc/QxJLDhqp/ABI1197-Edit-copy-1024x683.webp',
      link: 'https://daanresidency.in/'
  },{
      id: 10,
    title: "Daan South Park",    subtitle:"Super Delux Rooms",
    bgClass: 'bg-card-11',
    location: "Ernakulam", location2:"",
      img:'https://i.postimg.cc/FzghwcRS/1639455211.jpg',
      link: 'https://www.booking.com/hotel/in/daan-south-park.en-gb.html?aid=357028&label=bin859jc-1DCAsobEIPZGFhbi1zb3V0aC1wYXJrSDNYA2hsiAEBmAEJuAEXyAEM2AED6AEB-AEDiAIBqAIDuALqjPXBBsACAdICJDI4NDAxYWU1LWFjNDktNDMyMi05OTc2LWZkOTdmY2YxNzNkYtgCBOACAQ&sid=e8aa6d68ffa841b312fa52746b65c647&dist=0&keep_landing=1&sb_price_type=total&type=total&'
 
  },{
      id: 11,
    title: "Amala Arcade thrissur",
    subtitle:"Studio AC Rooms",
    bgClass: 'bg-card-12',
    location: "Thrissur",location2:"",
         img:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/588300359.jpg?k=ee1b24c0d151307f9bfb8b10eba15b1787d32713c671b30ec304497fdf1f81b0&o=',
      link: 'https://amalaarcade.com/'
  },
  {
      id: 12,
    title: "Daan Regency",
    subtitle:"Premium Family Rooms",
    bgClass: 'bg-card-13',
    location: "Thrissur",location2:"",
      img:'/Images/dan-reg-33.jpeg',
      link: 'https://be.aiosell.com/book/04207cd949'
  },
  {
      id: 13,
    title: "Cloud By Daan",
    subtitle:"Luxury Rooms",
    bgClass: 'bg-card-14',
    location: "Vagamon",location2:"",
    img:'/Images/Vaga-2.jpeg',
    link: '/cloud-by-daan'
  }
];

const LuxuryRoomsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth <= 768;

  const scrollRef = useRef(null);

const scrollRight = () => {
  scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
};

const scrollLeft = () => {
  scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
};

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      // setCurrentIndex((prevIndex) => (prevIndex + 1) % roomCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rooms-carousel-wrapper">
        <button variant="scroll-btn" className='scroll-btn btn-1' onClick={scrollLeft}>❮</button>
      <div
        className="rooms-carousel"
        ref={scrollRef}
        style={{
          transform: isMobile
            ? `translateX(-${currentIndex * 100}vw)`
            : 'translateX(0)',
        }}
      >
        {roomCards.map((card) => (
          <div
            key={card.id}
            className={`room-card ${card.bgClass}`}
            // style={{ width: isMobile ? '100vw' : '25vw' }}
          >
            <div className="overlay">
              <h4>{card.title}</h4>
              <h6>{card.subtitle}</h6>
              <a href={card.link} className="btn btn-warning mt-2">
                Visit Now
              </a>
            </div>
          </div>
        ))} 
      </div>
       <button variant="scroll-btn" className='scroll-btn btn-2' onClick={scrollRight}>❯</button>
    </div>
  );
};

export default LuxuryRoomsSection;
