import React, { useState,useEffect } from 'react';
import './FacilitiesTabs.css';
import { FaUtensils, FaGlassCheers, FaCar, FaSwimmer, FaSpa, FaDumbbell } from 'react-icons/fa';
import { FaKey, FaHeadset, FaWifi } from 'react-icons/fa';
import { Hinge,Bounce,Zoom   } from 'react-awesome-reveal';
import Daanbg from '../daanbg';

const services = [
  {
    icon: '🔑',
    title: 'Room Service',
    description: '24 Hours Safety and security',
  },
  {
    icon: '🚗',
    title: 'Free Parking',
    description: 'We provide 24 hours free parking facility',
  },
  {
    icon: '🚎',
    title: 'Travel Desk',
    description: 'We provide 24 hours service',
  },
  {
    icon: '📶',
    title: 'Free Wifi',
    description: 'All rooms enabled with free wifi',
  },
   {
    icon: '🏛️',
    title: 'Banquet Halls',
    description: 'Host your events with ease',
  }, {
    icon: '✈️',
    title: 'Airport Pickup and Drop',
    description: 'Convenient transportation to and from the airport',
  },
];

const Trivandrum=[{
     name:"Daan Lux",
      // icon: <FaHotel />,
      title: 'Vazhakala',
      phone: `📞 +91 79072-18688`,
      description: 'Experience unparalleled comfort and convenience with our exceptional range of services and amenities',
      button: 'Book Now',
      img:'https://i.postimg.cc/NFbVD9k8/ABI1677-HDR-Edit.jpg',
      link: 'https://daaninn.in/'
    
},{
     name:"Daan Cosmosis",
      // icon: <FaHotel />, 
      title: 'Vazhakala',
      phone: `📞 +91 79072-18688`,
      description: 'Experience unparalleled comfort and convenience with our exceptional range of services and amenities',
      button: 'Book Now',
      img:'https://i.postimg.cc/NFbVD9k8/ABI1677-HDR-Edit.jpg',
      link: 'https://daaninn.in/'
    
}
]

const FacilitiesTabs = ({facilities,from}) => {
  
  let classn=''
  
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
   
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % facilities.length);
    }, 40000); // Change tab every 40 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [facilities.length]);


  return (
    
    <div className='bg-fac'>
      
    <div className="container py-5">
    {from  === 'Home' ?
      <h2  className='text-center display-3 '> Explore Locations </h2>
      :
      <h2 className='text-center display-3' style={{fontFamily:'Gitky Trial'}}> </h2>
      }
        <br /><br />
      <div className="d-flex justify-content-center flex-wrap mb-4 facility-tabs">
        {facilities.map((item, idx) => (
          <div
            key={idx}
            style={{backgroundImage:`url(${item.image})`, backgroundSize:'cover', backgroundPosition:'center'}}
            className={`text-center mx-3  facility-tab ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          >
            <div className="icon" >{item.icon}</div>
            <div className="label">{item.title}</div>
          </div>
        ))}
      </div>
<br /><br />
      <div className="row align-items-center hotel-facility-slide">
        
        <div className="col-md-6 mb-4 mb-md-0">

          <img src={facilities[activeIndex].img} className="facility-img rounded bg-secondary"   />
          
        </div>
        <div className="col-md-6 facility-details-bg">
          <h6 className=" text-uppercase" style={{fontSize:'2rem'}}>{facilities[activeIndex].name}</h6>
          <h3 className="mb-3">{facilities[activeIndex].title}</h3>
          <p>{facilities[activeIndex].description}</p>
          
         
          <p>{facilities[activeIndex].phone}</p>
          
          <p> {facilities[activeIndex].hours}</p>
          
          {from === 'Home' ? 
 <a href={facilities[activeIndex].link}><button className="btn btn-lg btn-block text-white px-4" style={{backgroundImage:"linear-gradient(40deg, #3b5951, #273b35, #3b5951)"}}>{facilities[activeIndex].button}</button></a>
          :
            <h3></h3>
           }
         
        </div>
        
          {facilities[activeIndex].title ==="Trivandrum" &&  
                     <div style={{padding:"20px 0px 0px 15px"}} className="row align-items-center">
        
        <div className="col-md-6 mb-4 mb-md-0">

          <img src="/Images/daanlux.jpg" className="facility-img rounded bg-secondary"   />
          
        </div>
        <div className="col-md-6 facility-details-bg">
          <h6 className=" text-uppercase" style={{fontSize:'2rem'}} >DAAN LUXE INN</h6>
          <h3 className="mb-3" >Thiruvananthapuram</h3>
          <p >We ensure a mem orable stay with impeccable service and modern amenities.</p>
           
  
          <p>📞 +91 9995577077</p>
          
          {/* <p> {i.hour}</p> */}
          
          {from === 'Home' ? 
 <a href="/daanluxeinn"><button className="btn btn-lg btn-block text-white px-4" style={{backgroundImage:"linear-gradient(40deg, #3b5951, #273b35, #3b5951)"}}>Book Now</button></a>
          :
            <h3></h3>
           }
         
        </div> <p></p>
              <div className="col-md-6 mb-4 mb-md-0">

          <img src="/Images/BG-20.jpeg" className="facility-img rounded bg-secondary"   />
          
        </div>
        <div className="col-md-6 facility-details-bg">
          <h6 className=" text-uppercase" style={{fontSize:'2rem'}} >DAAN COSMOSINN</h6>
          <h3 className="mb-3" >Thiruvananthapuram</h3>
          <p >Your comfort is our promise, your satisfaction our priority.</p>
          
         
          <p>📞 +91 9995770377</p>
          
          {/* <p> {i.hour}</p> */}
          
          {from === 'Home' ? 
 <a href='/daancosmosinntvm'><button className="btn btn-lg btn-block text-white px-4" style={{backgroundImage:"linear-gradient(40deg, #3b5951, #273b35, #3b5951)"}}>Book Now</button></a>
          :
            <h3></h3>
           }
         
        </div>
        
        
      </div>
}
{
   facilities[activeIndex].title ==="GURUVAYUR" &&  <div style={{padding:"20px 0px 0px 15px"}} className="row align-items-center">
        
        <div className="col-md-6 mb-4 mb-md-0">

          <img src="/Images/_DDD8-_ copy.jpg" className="facility-img rounded bg-secondary"   />
          
        </div>
        <div className="col-md-6 facility-details-bg">
          <h6 className=" text-uppercase" style={{fontSize:'2rem'}} >DAAN AMBALATH MAPLE</h6>
          <h3 className="mb-3" >Guruvayur</h3>
          <p >We ensure a memorable stay with impeccable service and modern amenities.</p>
          
         
          <p>📞 +91 9633833022</p>
          
          {/* <p> {i.hour}</p> */}
          
          {from === 'Home' ? 
 <a href="/daan-ambalath"><button className="btn btn-lg btn-block text-white px-4" style={{backgroundImage:"linear-gradient(40deg, #3b5951, #273b35, #3b5951)"}}>Book Now</button></a>
          :
            <h3></h3>
           }
         
        </div> <p></p>  
        
      </div>
}

{/* ///////////////////////////////// */}

{
   facilities[activeIndex].title ==="Thrissur" &&  <div style={{padding:"20px 0px 0px 15px"}} className="row align-items-center">
        
        <div className="col-md-6 mb-4 mb-md-0">

          <img src="/Images/dan-reg-33.jpeg" className="facility-img rounded bg-secondary"   />
          
        </div>
        <div className="col-md-6 facility-details-bg">
          <h6 className=" text-uppercase" style={{fontSize:'2rem'}}>DAAN REGENCY</h6>
          <h3 className="mb-3" >Thrissur</h3>
          <p >We ensure a memorable stay with impeccable service and modern amenities.</p>
          
         
          <p>📞 +91 90482 88688</p>
          
          {/* <p> {i.hour}</p> */}
          
          {from === 'Home' ? 
 <a href="https://be.aiosell.com/book/04207cd949"><button className="btn btn-lg btn-block text-white px-4" style={{ backgroundImage:"linear-gradient(40deg, #3b5951, #273b35, #3b5951)" }}>Book Now</button></a>
          :
            <h3></h3>
           }
         
        </div> <p></p>
              <div className="col-md-6 mb-4 mb-md-0">

          <img src="/Images/d-nest.webp" className="facility-img rounded bg-secondary"   />
          
        </div>
        <div className="col-md-6 facility-details-bg">
          <h6 className=" text-uppercase" style={{fontSize:'2rem'}} >D NEST INN</h6>
          <h3 className="mb-3" >Thrissur</h3>
          <p >Your comfort is our promise, your satisfaction our priority.</p>
          
         
          <p>📞 +91 6238758158</p>
          
          {/* <p> {i.hour}</p> */}
          
          {from === 'Home' ? 
 <a href="https://dnestinn.store/"><button className="btn btn-lg btn-block text-white px-4" style={{backgroundImage:"linear-gradient(40deg, #3b5951, #273b35, #3b5951)"}}>Book Now</button></a>
          :
            <h3></h3>
           }
         
        </div>  
        
      </div>
}
          
      
        {/* //////////////////// */}
      </div>
      <br /><br />
      <section className="services-section py-5">
      <div className="container">
        <div className="row text-center">
          {services.map((service, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-2 mb-4">
              <Zoom delay={500} duration={1000} >
              <div className="service-box p-3">
                <div className="icon-circle mb-3">
                  <span className="icon">{service.icon}</span>
                </div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="">{service.description}</p>
                
              </div>
              </Zoom  >
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};

export default FacilitiesTabs;
