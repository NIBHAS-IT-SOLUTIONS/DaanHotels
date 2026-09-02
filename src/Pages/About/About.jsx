import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import './About.css'
// import aboutimage from '../../Images/slide2.jpg'
import Footer from '../../Components/Footer/Footer';
import Loading from '../../utils/Loading/Loading';
import { Bounce,Slide,Fade  } from 'react-awesome-reveal';
import LuxuryRoomsSection from '../../Components/booknowgrid/LuxuryRoomsSection';
import { Helmet } from 'react-helmet';


                
export default function About() {
  const features = [
    {
      icon: '📍',
      title: 'Accessible Location',
      description:
        'Conveniently located with easy access to public transport, major attractions, and essential services — making your stay smooth and hassle-free',
    },
    {
      icon: '⏰',
      title: 'Open 24/7',
      description:
        'Our dedicated team is available around the clock to assist with any needs you may have, ensuring a seamless and hassle-free stay.',
    },
    {
      icon: '📅',
      title: 'Reservation',
      description:
        'Our well-appointed rooms are designed with your comfort in mind, offering a peaceful and relaxing environment for both business and leisure travelers.',
    },
  {
    icon: '✈️',
    title: 'Airport Pickup and Drop',
    description: 'Convenient transportation to and from the airport for a stress-free travel experience.',
  },
    {
      icon: '📡',
      title: 'Free Wifi',
      description:
        'Stay connected with fast and reliable internet access throughout the hotel, allowing you to work, stream, or stay in touch with loved ones.',
    },
    {
      icon: '📷',
      title: 'Security',
      description:
        'Your safety is our priority. Our hotel is equipped with 24/7 CCTV surveillance, secure keycard access, and trained staff to ensure a safe and comfortable stay.',
    },
  ];


 const [loading, setLoading] = useState(true);
      useEffect(() => {
         document.title = 'Daan Hotels - About';
    
        setTimeout(() => {
          setLoading(false); // Hide loader after 2 seconds
        }, 2000);
      }, []);
  return (
    <div className='bg-dark'>

<Helmet>
  <title>About Daan Hospitality | Fastest Growing Hotel Group in Kerala</title>
  <meta name="description" content="Learn about Daan Hospitality, the fastest growing hospitality group in Kerala. Trusted for delivering affordable and comfortable hotel stays across multiple cities." />
</Helmet>


        <Header/>
         <Header/>
        {loading ? (
        <Loading />
      ) : (
        <div>
     {/* backgroundImage: `url('https://i.postimg.cc/rw2PGwr5/gallery.png')` */}
       <section className="d-flex img-fluid flex-column justify-content-center align-items-center text-center about-hero"
       style={{
                      height: '650px',
                      backgroundImage: `url('https://i.postimg.cc/sgw9bzbm/aboutus.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundAttachment: 'scroll',
                      width: '100%',
                    }}>
        <div>
          <h2  style={{                                         
            fontSize:'3rem',
            fontWeight:'bold'
          }}>About Us</h2>
          <p  style={{fontSize:'1.5rem'}}>
          who we are, what we value, and how we make your stay unforgettable.
            
          </p>
        </div>
      </section>
    <section className="our-story-section d-flex align-items-center">
      <div className="container-fluid mt-5 mb-5">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <img
              src="https://i.postimg.cc/RVRWNxWF/Facade-Night-1.jpg"
              alt="Our Story"
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center bg-dark p-4 text-container about-text-1">
            <div>
              <h5 className="text-warning">Daan Group</h5>
              <h2 className="fw-bold mb-4">OUR STORY</h2>
              <p className="story-text">
     Step into Daan Hospitality Group and feel the city fade away. In the middle of Kerala’s most vibrant destinations, we’ve created peaceful spaces where comfort takes center stage. Whether you're here for work, a family escape, or simply to relax with friends, our residences promise warmth, charm, and the feeling of home.

Every detail—from the gentle lighting to the elegant décor—is designed with one goal in mind: to give you a place where you can breathe, slow down, and reconnect. With sweeping views of the city skyline and a soothing atmosphere, your stay with us becomes more than just a visit—it becomes an experience.
<br /> <br />
<b>Across Kerala, Close to You</b>
<br />
Our presence spans some of Kerala’s most beloved cities, including Kochi, Kottayam, and Thiruvananthapuram. Each Daan Hotel blends convenience with comfort, offering modern amenities and heartfelt hospitality.
<br /> <br />
 <b>Reaching New Corners of the State</b>
<br />
From spiritual hubs like Guruvayoor to bustling centers like Thrissur and the convenience-focused stays in Kottayam, our footprint continues to grow. Being recognized as Kerala’s fastest-growing hospitality group is a reflection of our passion and dedication to your comfort.

We’re truly delighted to welcome you into our world.
              delighted to have you as our guest.
                {/* Add your full story text here */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="why-choose-section position-relative py-5">
      {/* Decorative Circles */}
      <div className="circle circle-left"></div>
      <div className="circle circle-right"></div>

      <div className="container d-flex justify-content-center">
        <div className="why-box text-center p-5 about-text-2">
          <h2 className="fw-bold">Why Choose Us?</h2>
          <div className="green-underline mx-auto my-3"></div>
          <p className="text-muted">
           We ensure a memorable stay with impeccable service and modern amenities.<br />
            
          </p>
        </div>
      </div>
    </section>
    <section className="py-5 features-section">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-4 mb-4 text-center" key={index}>
              <Fade direction='up' delay={200} duration={1500} >
              <div className="feature-icon mb-3">{feature.icon}</div>
              <h5>{feature.title}</h5>
              <p>{feature.description}</p>
              </Fade >
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* <section className="banner-section d-flex align-items-center banneroverlay">
      <div className="container text-center text-white">
        <h1 className="banner-title">Choose from a wide range of <br /> <strong>luxury rooms</strong>.</h1>
        <a href="https://be.aiosell.com/book/6741980d7b"><button className="btn btn-warning banner-button mt-4">BOOK NOW</button></a>
      </div>
    </section> */}
    <LuxuryRoomsSection/>
    <section className="progress-info-section w-100 px-5 py-5">
      <div className="container-fluid px-5 py-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3>Offering a series of comfortable and lavish hotels & residences</h3>
            <hr className="my-3" />
            <p>
              All our hotels are fabulous, they are destinations unto themselves.
              We have crossed the globe to bring you only the best.
            </p>
           
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>Neet & Hygenic Room</span>
                <span>95%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>Well Appointed Staff</span>
                <span>98%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" style={{ width: '98%' }}></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>Room Ambience</span>
                <span>93%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" style={{ width: '96%' }}></div>
              </div>
            </div>

            <div>
              <div className="d-flex justify-content-between">
                <span>Restaurant & Banquet</span>
                <span>95%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>)}
    <Footer/>
        </div>
  )
}
