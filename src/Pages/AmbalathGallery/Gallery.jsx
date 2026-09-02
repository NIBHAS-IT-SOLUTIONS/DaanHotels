import React,{ useEffect, useRef, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
// import './Gallery.css';
import { Fade  } from 'react-awesome-reveal';
import { motion } from "framer-motion";
import GalleryComponent from '../../Components/GalleryComponent/GalleryComponent';
import Loading from '../../utils/Loading/Loading';

import Ambalath from '../../utils/Jsonfiles/DaanAmbalath';

import { Helmet } from 'react-helmet';

export default function AmbalathGallery() {
  
  const [loading, setLoading] = useState(true);
    useEffect(() => {
       document.title = 'Daan Hotels - Gallery';
  
      setTimeout(() => {
        setLoading(false); // Hide loader after 2 seconds
      }, 2000);
    }, []);

  
  return (
    <div>
      <Helmet>
  <title>Explore Daan Hotels in Kochi, Trivandrum & Guruvayoor</title>
  <meta name="description" content="View photos of Daan Hotels located in Kochi, Trivandrum, and Guruvayoor. See our comfortable rooms, modern amenities, and top-rated budget accommodations." />
</Helmet>

      <Header/>
      {loading ? (
        <Loading/>
      ) : (
        <div>
          {/* backgroundImage: `url('https://i.postimg.cc/rw2PGwr5/gallery.png')` */}
      <section className="d-flex flex-column justify-content-center align-items-center gallery-hero text-center"
       style={{
                      height: '400px',
                      backgroundImage: `url(https://i.postimg.cc/hPNpt2fR/galleries.jpg)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      backgroundAttachment: 'scroll'
                    }}>
        <div>
          <h2 style={{
                                      
            fontSize:'3rem',
            fontWeight:'bold'
          }}>Gallery</h2>
          <p style={{ fontSize:'1.5rem'}}>
          Picture Walkthrough 
            
          </p>
        </div>
      </section>
      {/* <br /> */}
      <section className='gallery-section'>
   
          <h2 className='display-5 text-center'>Daan Ambalath Maple</h2>
          <Fade  direction="down" cascade delay={200} duration={1000}>
      <GalleryComponent images={Ambalath}/></Fade>
      </section>
  



      </div>
    
    )}
      
      <Footer/>
      
      </div>
  )
}
