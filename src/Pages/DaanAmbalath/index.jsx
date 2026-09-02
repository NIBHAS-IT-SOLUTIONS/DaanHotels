import { useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import './style.css'
import { useState } from 'react';
// import slid from '../../../public/Images/slide1.jpg'

//       <div className="danlux-1-details">
//             <h1>Daan Ambalath Maple</h1>
//             <button onClick={()=> window.open("https://be.aiosell.com/book/b33dc0f174")} >Book Now</button>
//             <p>
//  Ambalath Maple Leaves, Behind Devaswom, Ponnuparambil Guruvayur, Kerala 680101</p>
// <p>Reception no- +91 9633833022</p> <br /> <br />
// <b style={{fontSize:"40px"}}>Room Category</b> <br /> <p></p>
// <span style={{fontSize:"40px"}}>Total 24 Rooms</span>

// <div className="daan-amb-image-slide">
//  <img src="/Images/DA-1.jpg" alt="" />
//   <img src="/Images/DA-2.jpg" alt="" />
//   <img src="/Images/DA-3.jpg" alt="" />
//   <img src="/Images/DA-4.jpg" alt="" />
    
// </div>
// <br /> <br />
// <p > <span style={{fontSize:"40px"}}> <b>Studio Room</b>  <span> </span> <br />  <span > <p></p> 1 BHK Room, 
// 2 BHK Room</span>

const DaanAmbalath = () => {

  const [data,setData] =useState('');

const pathname = window.location.pathname;
const daanPath = pathname.toLowerCase().startsWith("/daan")
  ? pathname
  : null;

console.log("Daan Path:", daanPath); // Log the Daan path for debugging

  return (
   <div className='daan-ambalath'>
      <Header gallery={daanPath} number={"+91 -963-383-3022"} bgcolor={"rgb(81, 131, 116)"}></Header>
      <section className='section-1'> <h1>DAAN AMBALATH </h1> <h3>Luxury Business Hotel</h3>  <p>Ambalath Maple Leaves, Behind Devaswom, Ponnuparambil Guruvayur, Kerala 680101, <span style={{padding:"10px"}}> <p style={{textDecoration:"underline"}}>Mob: 91 9633833022</p></span></p>
       <button onClick={()=>window.open('https://be.aiosell.com/book/b33dc0f174')} className='ambalath-btn'>Book Now</button> <div className="sec-1-images">
        <img src="/Images/_DDD7-_ copy.jpg" alt="" />
        <img src="/Images/_DDD9-_ copy.jpg" alt="" />
        <img src="/Images/_DDD6-_.jpg" alt="" />
        </div> </section>
      <section className='section-2'> 
        <div className="sec-2-card">
           <h2>Experience Unmatched Luxury in Our Signature Rooms</h2>  <br />


           <p>Step into a world where elegance meets absolute comfort. Our signature rooms are thoughtfully
             designed to elevate your stay with refined interiors, plush furnishings, and serene views that inspire relaxation.
              Every corner reflects timeless sophistication — from the soft ambient lighting to the carefully curated décor. 
            Whether you’re visiting for business or leisure, our rooms provide a sanctuary where comfort and class coexist seamlessly.
            </p>  
        </div>  
         <img className='img-shade' src="/Images/_DDD11-_.jpg" alt="" />
          </section>
   <section className='section-3'>
    <h1>24 Room & Suits</h1>
    <div className="sec-3-cards">
      <div className="sec-3-card-1">
        <img src="/Images/_DDD12-_.jpg" alt="" />
        {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
          <dash></dash>
        <p>Standard AC Room</p>
      </div>
         <div className="sec-3-card-1">
        <img src="/Images/_DDD4-_.jpg" alt="" />
            {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
      <dash></dash>
        <p>Deluxe AC Room</p>
      </div>   <div className="sec-3-card-1">
        <img src="/Images/_DDD2-_.jpg" alt="" />
            {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
         <dash></dash>
        <p>Premium Family Room</p>
      </div>
    </div>
   </section>

       <section className='section-4'> 
          <div className="sec-4-card">
        <h1>Personalized Guest Services for Your Every Need</h1> <br />
         <p>Our guest services team is dedicated to curating an exceptional stay customized to your desires.
           From arranging transportation and dining reservations to fulfilling special requests, we are here to assist
           you with warmth and professionalism. Allow us to take care of the details while you relax and enjoy a seamless
            and luxurious experience.</p> 
          </div>

      <div className="sec-4-card-2">
       <img className='img-shade' src="/Images/_DDD5-_.jpg" alt="" />
       <p className='img-p'>To ensure your stay is consistently pleasant, our service teams operate around the clock..</p>
      </div>
       </section>

<section className='section-5' >
  <div className="sec-5-card">
  <h2 className='sec-5-bold'>Where Luxury Meets Function—Perfect for Work and Leisure</h2>
<img src="/Images/_DDD1-_.jpg" alt="" />
<p className='img-p' >
   It’s a refined lifestyle crafted for those who appreciate the extraordinary.</p>
  </div>
 <img className='sec-5-img img-shade' src="/Images/_DDD10-_.jpg" alt="" />
</section>

<div className="thekkady-map">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.8768138990554!2d76.04181087586737!3d10.588803262624818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba795d1ed3614c5%3A0x562d1886ade90992!2sDaan%20Ambalath%20Maple!5e0!3m2!1sen!2sin!4v1770028585404!5m2!1sen!2sin"
 width="40%"
   height="450px"
    allowfullscreen=""
     loading="lazy" 
     referrerpolicy="no-referrer-when-downgrade"></iframe>
  <p>Ambalath Maple Leaves, Behind Devaswom, Ponnuparambil Guruvayur, Kerala 680101, <span style={{ textDecoration:"underline", padding:"0px"}}> Mob:91 9633833022</span></p>
</div>

 <Footer num={9633833022}/>
 

{/* <section className='section-6'>
   <img src="/Images/lux-1.jpg" alt="" />
   <div className="sec-6-cards">

    <div className="sec-6-card-1">
         <img src="/Images/lux-1.jpg" alt="" />
         <p>Deluxe Room</p>
    </div>

    <div className="sec-6-card-1">
         <img src="/Images/lux-1.jpg" alt="" />
         <p>Deluxe Room</p>
    </div>
    <div className="sec-6-card-1">
         <img src="/Images/lux-1.jpg" alt="" />
         <p>Deluxe Room</p>
    </div>
    <div className="sec-6-card-1">
         <img src="/Images/lux-1.jpg" alt="" />
         <p>Deluxe Room</p>
    </div>
 
   </div>
</section> */}
    </div>
  )
}

export default DaanAmbalath