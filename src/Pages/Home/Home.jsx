import React, { useEffect, useMemo, useState } from 'react'
import Header from '../../Components/Header/Header'

import HeroSection from '../../Components/HeroSection/HeroSection'
import { Helmet } from "react-helmet"; 
import './Home.css'
import FacilitiesTabs from '../../Components/Facilities/FacilitiesTabs'
import HotelGrid from '../../Components/HotelGrid/HotelGrid'
import Footer from '../../Components/Footer/Footer'

import CounterSection from '../../Components/CountingSection/CounterSection'
import { FaUtensils, FaHotel, FaGlassCheers, FaCar, FaSwimmer, FaSpa, FaDumbbell } from 'react-icons/fa';
import { FaKey, FaHeadset, FaWifi } from 'react-icons/fa';

import Offers from '../../Components/Offers/Offers'
import Loading from '../../utils/Loading/Loading'
import { Link } from 'react-router-dom'


import LuxuryRoomsSection from '../../Components/booknowgrid/LuxuryRoomsSection'
import Daanbg from '../../Components/daanbg';


function Home() {

  const [hoveredId,setHoveredId]=useState(null)

  const facilities = [
{ name:"Daan Orchid residency",
      icon: <FaHotel />,
      title: 'Kottayam ',
      phone: `📞 +91 96338-33141`, 
      description: 'Unwind in style, where every detail is designed for delight.',
      button: 'Book Now',
      img:'https://i.postimg.cc/PfLLnBBC/Copy-of-Facade-5.jpg',
      link: '/daan-orchid',
      image:"/Images/kottayam.jfif"
    },
    // {s
    //   name:"Daan Regency",
    //   icon: <FaHotel />,
    //   title: 'Thrissur',
    //   phone: `📞 +91 90482-88688`,
    //   description: 'Enjoy world-class rooms and facilities in our luxurious lounge.',
    //   button: 'Book Now',
    //   img:'https://i.postimg.cc/Fzq4JZ70/5d0fda4f-9bd7-4138-acaa-9ad4507754571.jpg',
    //   link: 'https://daanregency.com/'
    // },
{
       name:"Daan Temple inn",
      icon: <FaHotel />,
      title: 'GURUVAYUR',
      phone: `📞 +91 73066-55074`,
      description: 'affordable place to stay while supporting your loved ones ',
      button: 'Book Now',
      img:'https://i.postimg.cc/LsC2p22y/DAAN-TEMPLE-INN007-scaled.jpg',
      link: '/daan-temple-inn',
      image:"/Images/guru.jfif"
    },
    { name:"Urbn24",
      icon: <FaHotel />,
      title: 'Kalamassery ',
      phone: `📞 +91 85903-43798`,
      description: 'We ensure a memorable stay with impeccable service and modern amenities.',
      button: 'Book Now',
      img:'https://i.postimg.cc/0Qsd9Rnw/ABI6958-Edit-1-1024x766.webp',
      link: 'https://urbn24.in/',
      image:"/Images/kalamas.jpg"
    },
    
    
    { name:"Daan Inn",
      icon: <FaHotel />,
      title: 'Kochi Kakkanad',
      phone: `📞 +91 79072-18688`,
      description: 'Experience unparalleled comfort and convenience with our exceptional range of services and amenities',
      button: 'Book Now',
      img:'https://i.postimg.cc/ncgrSPh5/ABI1515-HDR-Edit.jpg',
      link: 'https://daaninn.in/',
      image:"/Images/kakkanad.jfif"
    },


        { name:"Monsoon Retreats By Daan",
      icon: <FaHotel />,
      title: 'Thekkady',
      phone: `📞 +91 8848528011`,
      description: 'Your comfort is our promise, your satisfaction our priority.',
      button: 'Book Now',
      img:'Images/daan-thekkady.webp',
      link: '/Monsoon-Retreats-By-Daan',
      image:"/Images/thekkady.jfif"
    },


    { name:"Daan Residency",
      icon: <FaHotel />,
      title: 'Kochi Edapally',
      phone: `📞 +91 85901-08056`,
      description: ' perfect blend of elegant design and ultimate relaxation in every aspect of your stay.',
      button: 'Book Now',
      img:'https://i.postimg.cc/g2FwPg9T/ABI1129-Edit-2.jpg',
      link: 'https://daanresidency.in/',
      image:"/Images/edappaly.jpg"
    },
    
    { name:"Daan South Park",
      icon: <FaHotel />,
      title: 'Ernakulam',
      phone: `📞 +91 90482-88688`,
      description: 'Your comfort is our promise, your satisfaction our priority.',
      button: 'Book Now',
      img:'https://i.postimg.cc/FzghwcRS/1639455211.jpg',
      link: 'https://www.booking.com/hotel/in/daan-south-park.en-gb.html?aid=357028&label=bin859jc-1DCAsobEIPZGFhbi1zb3V0aC1wYXJrSDNYA2hsiAEBmAEJuAEXyAEM2AED6AEB-AEDiAIBqAIDuALqjPXBBsACAdICJDI4NDAxYWU1LWFjNDktNDMyMi05OTc2LWZkOTdmY2YxNzNkYtgCBOACAQ&sid=e8aa6d68ffa841b312fa52746b65c647&dist=0&keep_landing=1&sb_price_type=total&type=total&',
      image:"/Images/ERNAKULAM.jpg"
    },{
       name:"Amala Arcade thrissur",
      icon: <FaHotel />,
      title: 'Thrissur',
      phone: `📞 +91 73063-93739`,
      description: 'Your premier destination in the heart of Kottayam town!',
      button: 'Book Now',
      img:'https://r1imghtlak.mmtcdn.com/47fb94aa-aa84-4cd2-811c-2291c6fa66a2.jpg?downsize=540:*',
      link: 'https://amalaarcade.com/',
      image:"/Images/thrissur.jfif"
    },
    
    { name:"Meridian By Daan",
      icon: <FaHotel />,
      title: 'Trivandrum',
      phone: `📞 +91 90482-88688`,
      description: 'Every guest is a VIP, every stay is unforgettable',
      button: 'Book Now',
      img:'https://i.postimg.cc/tJDLhzJB/478877522.jpg',
      link: 'https://be.aiosell.com/book/d53b872227',
      image:"/Images/trivan.jpg"
    },
    { name:"Cloud By Daan",
      icon: <FaHotel />,
      title: 'Vagamon',
      phone: `📞 +91 9633833077`,
      description: 'We are dedicated to your comfort and committed to making every stay memorable.',
      button: 'Book Now',
      img:'/Images/Vaga-2.jpeg',
      link: '/cloud-by-daan',
      image:"/Images/vagamon.jfif"
    }
  ];

  const MapData=[
    {
      id:1,name:'Amala Arcade',x:440,y:330,  link: 'https://amalaarcade.com/',  image:"https://r1imghtlak.mmtcdn.com/47fb94aa-aa84-4cd2-811c-2291c6fa66a2.jpg?downsize=540:*"
    },   {
      id:2,name:'Daan Ambalath',x:395,y:345,  link: '/daan-ambalath', image:"/Images/_DDD7-_ copy.jpg"
    },   {
      id:3,name:'Daan LuxInn',x:620,y:710,  link: '/daanluxeinn', image:"/Images/daanlux.jpg"
    },   {
      id:4,name:'Daan Regency',x:475,y:445, link: 'https://be.aiosell.com/book/04207cd949', image:"https://daanregency.com/uploads/5d0fda4f-9bd7-4138-acaa-9ad4507754571.jpg"
    },   {
      id:5,name:'Daan Recidency',x:500,y:490, link: 'https://daanresidency.in/', image:"https://i.postimg.cc/Bv312MMK/ABI0912-Edit-copy2.jpg"
    },   {
      id:6,name:'Daan South Park',x:470,y:490, link: 'https://www.booking.com/hotel/in/daan-south-park.en-gb.html?aid=357028&label=bin859jc-1DCAsobEIPZGFhbi1zb3V0aC1wYXJrSDNYA2hsiAEBmAEJuAEXyAEM2AED6AEB-AEDiAIBqAIDuALqjPXBBsACAdICJDI4NDAxYWU1LWFjNDktNDMyMi05OTc2LWZkOTdmY2YxNzNkYtgCBOACAQ&sid=e8aa6d68ffa841b312fa52746b65c647&dist=0&keep_landing=1&sb_price_type=total&type=total&', image:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/527524380.jpg?k=832e8608604cdb3dd45290a64da98fae3e65b382ac38929bc471b0267b656f50&o="
    },   {
      id:7,name:'Daan Meridian',x:584,y:720, link: 'https://be.aiosell.com/book/d53b872227', image:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/478877522.jpg?k=c5dce3bc9db07f5fcd9e5cbd32640ac0d1a85676477e528ed741ab6cb00d7621&o="
    },   {
      id:8,name:'Daan Orchid',x:570,y:580,   link: 'https://daanorchidresidency.com/', image:"https://i.postimg.cc/TP4Thy5s/Facade-Night-2.jpg"
    },   {
      id:9,name:'Daan Temple Inn',x:380,y:310, link: 'https://daantempleinn.com/', image:"https://i.postimg.cc/LsC2p22y/DAAN-TEMPLE-INN007-scaled.jpg"
    },   {
      id:10,name:'Daan Inn Kakkanad',x:440,y:420, link: 'https://daaninn.in/', image:"https://i.postimg.cc/NMq1h0G3/ABI1677-HDR-Edit-1.jpg"
    },   {
      id:11,name:'Monsoon Retreats',x:595,y:465,  link: '/Monsoon-Retreats-By-Daan', image:"https://r1imghtlak.mmtcdn.com/6e8fbcd1-082e-4e24-b87a-427d37b17bd1.jpg?downsize=540:*"
    },   {
      id:12,name:'Daan CosmosInn',x:570,y:680,  link: '/daancosmosinntvm', image:"/Images/BG-20.jpeg"
    }, {
      id:13,name:'Urban24',x:475,y:400, link: 'https://urbn24.in/', image:"https://i.postimg.cc/WpFc6SBt/Untitled-design-34.png"
    },{
      id:14,name:'Cloud By Daan',x:600,y:500, link: '/cloud-by-daan', image:"/Images/Vaga-2.jpeg"
    },
  ]

  const sortedLocations=useMemo(()=>{
    return [...MapData].sort((a,b)=>{
      if(a.id===hoveredId) return 1;
      if(b.id===hoveredId) return -1
    })
  },[hoveredId])

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = 'Daan Hotels - Home';

    setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 2000);

  }, []);
  
  return (
    <div >

      <Helmet>
  <title>Daan Hotels – No 1 Hotel Group in Kerala | Best Budget Hotels</title>
  <meta name="description" content="Welcome to Daan Hotels, the No 1 hotel group in Kerala offering affordable and quality 
  stays across prime locations. Discover budget accommodation with premium hospitality." />
</Helmet>


     
      {/* <TopBar/> */}
      <Header no={1}/>
     
      {/* <BookingForm/> */}

      
 {loading ? (
        <Loading />
      ) : (
      <div className="home-container">
        <Daanbg></Daanbg>
        
        <div className='hero'>
          <HeroSection />
        </div>


        {/* <div className='bookingbar '>
           <BookingBar />
        </div> */}

        <div className='Specialoffers'>

          <Offers />
        </div>



        <div style={{ color:"gold",   border: "2px solid #ffd014",  borderRadius:"40px", backgroundImage:"linear-gradient(40deg, #3b5951c9, #273b35ca, #3b5951bd)", padding:"100px 20px", width:"90%", maxWidth:"70rem",margin:" auto", marginBottom:"40px", textAlign:"center"}}>
          <h1 className='home-gold-h1' >
            About Daan Hotels

          </h1> <br />
          <p className='home-gold-h1' style={{lineHeight:"30px", width:"50%", minWidth:"300px", textAlign:"justify",margin:"0 auto" }} > 
Daan Hotels is a trusted name in Kerala, offering exceptional comfort and value through the Daan Hotel Chain. Backed by the reputed Daan Group, we have become the No.1 Hotel Group in Kerala – Daan Group, setting benchmarks in quality and service. Whether you are traveling for business or leisure, our hotels are designed to provide convenience, style, and unmatched hospitality.
 </p> <br />
 <p className='home-gold-h1' style={{lineHeight:"30px", width:"50%", minWidth:"300px", textAlign:"justify",margin:"0 auto" }} > 
 <h4  style={{textAlign:"center"}} className='home-gold-h1' >Affordable and Budget _ Friendly Stays</h4>  <br />


For guests looking for value-based travel, the Best Budget Accommodation Hotel Group – Daan Hotels is the ideal choice. We take pride in being known for the Best Affordable Stay – Daan Hotels, offering excellent facilities at competitive prices. Whether it’s a family holiday or a business trip.</p>
        </div>
        <div>
          {/* <section className="banner-section w-100 d-flex align-items-center banneroverlay">
            <div className="overlay d-flex align-items-center">
            <div className="container text-center text-white">
              <h1 className="banner-title">Choose from a wide range of <br /> <strong>luxury rooms</strong></h1>
              <a href="https://be.aiosell.com/book/6741980d7b"><button className="btn btn-warning btn-lg banner-button mt-4">BOOK NOW</button></a>
            </div>
            </div>
          </section> */}
          <LuxuryRoomsSection/>
        </div>
       <div className='facilities'>
          <FacilitiesTabs facilities={facilities} from='Home' />
        </div>

        <div>
          <CounterSection />
        </div>

        <div className="home-map-dot">
          <div className="home-map-container">
            <svg viewBox='0 0 850 800' width='100%' height='auto' preserveAspectRatio='xMidYMid meet' >
              <image href='/Images/mapDaan2.jpeg' width="850" height="800" ></image>

<defs> {MapData.map((i,index)=>(
<clipPath clipPathUnits="userSpaceOnUse" id={`clip-${i.id}`} > <circle cx={i.x} cy={i.y} r='18' ></circle> </clipPath> 
))} </defs>


{
  sortedLocations.map((i,index)=>(
    <g onClick={()=>window.location.href=i.link} className='marker' onMouseEnter={()=>setHoveredId(i.id)} onMouseLeave={()=>setHoveredId(null)} key={i.id}>
      
<image className='img-map'  href={i.image} x={i.x-18} y={i.y-18} width={40} clipPath={`url(#clip-${i.id})`}  height={40}></image>
<circle cx={i.x} cy={i.y} r='18' fill="none" stroke="#ffff" strokeWidth='2' >  </circle>
     
     {
      hoveredId === i.id &&    <g className='tooltip' >
      <rect x={i.x} y={i.y} width={120} height={30} rx='6' ></rect>
      <text x={i.x+60} y={i.y +20 } textAnchor='middle'  >{i.name}</text>
     </g>
     }
  

    </g>
       
  ))
}

            </svg>
            
          </div>
         
        <div className="home-map-details">
          <h1> We Are Here For Your Desired Locations</h1>
          <ul>
            <li>Comfort</li>,
            <li>Convenience</li>,
            <li>Affordability</li>
          </ul>

<div className="home-map-head">
  <h1>📍Thiruvananthapuram</h1>
  <h1>📍Kochi </h1>
  <h1>📍Thrissur </h1>
  <h1>📍Kottayam </h1>
  <h1>📍Guruvayoor </h1>
  <h1>📍Vagamon </h1>
</div>

      
        </div>
        </div>
        
        <div className='Hotelgrid'>
          <HotelGrid />
        </div>
       
        {/* Other page content can go here */}
      </div>)}
     <Footer />
    </div>
  )
}

export default Home