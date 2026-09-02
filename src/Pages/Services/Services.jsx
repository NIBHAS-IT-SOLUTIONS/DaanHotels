import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import FacilitiesTabs from '../../Components/Facilities/FacilitiesTabs'
import './Services.css'
import { FaUtensils, FaGlassCheers, FaCar, FaSwimmer, FaSpa, FaDumbbell ,FaPlane  } from 'react-icons/fa';
import { FaKey, FaHeadset, FaWifi } from 'react-icons/fa';
import CounterSection from '../../Components/CountingSection/CounterSection'
import Rooms from '../../Components/Room/Rooms'
import { useState } from 'react'
import Loading from '../../utils/Loading/Loading'
import LuxuryRoomsSection from '../../Components/booknowgrid/LuxuryRoomsSection'
import { Helmet } from 'react-helmet'
function Services() {
   const facilities = [
      {
        icon: <FaUtensils />,
        title: 'Restaurant',
        hours: ' 7:30 AM - 10:00 PM',
        description: 'Our restaurant is easily accessible, with step-free entry, spacious seating, and facilities designed for guests of all abilities.',
        button: 'Book Now',
        img:'https://i.postimg.cc/mZFySF8T/new-clean-luxury-restaurant-european-style-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turke.jpg',
      link:'https://be.aiosell.com/book/6741980d7b'
      },
      
      {
        icon: <FaCar />,
        title: 'Travel Assistance',
        hours: 'Service Hours : 24/7',
        description: 'Complimentary airport and local transport service available anytime.',
        button: 'Book Now',
        img:'https://i.postimg.cc/zG3BnTFj/driver-dressed-elegant-costume.jpg',
      link:'https://be.aiosell.com/book/6741980d7b'
      },
      {
        icon: <FaSpa />,
        title: 'Laundry',
        hours: 'Service Hours : 10:00 AM - 9:00 PM',
        description: 'Enjoy the convenience of our professional laundry service, available daily to keep your clothes fresh and ready for any occasion',
        button: 'Book Now',
        img:'https://i.postimg.cc/J4fgqLb2/freshly-laundered-linens-stacked-neatly-table-bright-laundry-room.jpg',
      link:'https://be.aiosell.com/book/6741980d7b'
      },
      {
        icon: <FaDumbbell />,
        title: 'Room Service',
        hours: 'Service Hours : 24/7',
        description: 'Delight in our 24/7 room service offering a variety of delicious meals and refreshments delivered right to your door for your comfort and convenience',
        img:'https://i.postimg.cc/W31f3bvh/housekeeper-cleaning-hotel-room.jpg',
        button: 'Book Now',
        // image:'/Images/AM-1.jpg',

      link:'https://be.aiosell.com/book/6741980d7b'
      },   {
        icon: <FaPlane />,
        title: 'Airport Pickup and Drop',
        hours: 'Service Hours : 24/7',
        description: 'Experience seamless travel with our 24/7 airport pickup and drop service, ensuring a stress-free journey to and from the airport with comfort and convenience.',
        img:'/Images/airport.jpg',
        button: 'Book Now',
        // image:'/Images/AM-1.jpg',

      link:'https://be.aiosell.com/book/6741980d7b'
      }
    ];

  const [loading, setLoading] = useState(true);
       useEffect(() => {
          document.title = 'Daan Hotels - Facilities';
     
         setTimeout(() => {
           setLoading(false); // Hide loader after 2 seconds
         }, 2000);
       }, []);
  return (
    <div>


<Helmet>
  <title>Facilities at Daan Hotel Chain | Best Hotels in Thrissur</title>
  <meta name="description" content="Discover the modern facilities offered at Daan Hotel Chain. From budget rooms to luxury amenities, explore why we are among the best hotels in Thrissur and beyond." />
</Helmet>



        <Header/>
         {loading ? (
        <Loading />
      ) : (
  <div>
    {/* backgroundImage: `url('https://i.postimg.cc/rw2PGwr5/gallery.png')`, */}
       <section className="d-flex flex-column justify-content-center bg-dark align-items-center service-hero text-center"
       style={{
                      height: '650px',
                      backgroundImage: `url('https://iili.io/FoXX6SR.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      backgroundAttachment: 'scroll',
                      
                    }}>
        <div>
          <h2 style={{
                                              
            fontSize:'3rem',
            fontWeight:'bold'
          }}>Facilities</h2>
          <p style={{ fontSize:'1.5rem'}}>
          Let's See What we Provide 
            
          </p>
        </div>
      </section>
      <div className='service-provide'>
        <h2 className='text-center mb-5' style={{textAlign:'center',padding:"40px 10px"}}>Rooms We Provide</h2>
        <Rooms/>
      </div>
      <div>
        {/* <section className="banner-section w-100 d-flex align-items-center ">
      <div className="container text-center text-white">
        <h1 className="banner-title">Choose from a wide range of <br /> <strong>luxury rooms</strong>.</h1>
        <a href="https://be.aiosell.com/book/6741980d7b"><button className="btn btn-warning banner-button mt-4">BOOK NOW</button></a>
      </div>
    </section> */}
    <LuxuryRoomsSection/>
        </div >
        <div className='service-facility'>
      <FacilitiesTabs facilities={facilities} from='false'  /> 
        </div>
   
 <div>
          <CounterSection/>
        </div>
        </div>)}
         <Footer/>
        </div>
  )
}

export default Services