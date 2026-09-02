import React from 'react'
import './style.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const TempleInnImages=[
"https://r1imghtlak.ibcdn.com/9076de91-e1b8-4e23-9daa-9a6484344765.jpg",
"https://r1imghtlak.ibcdn.com/2bc9321a-b7bb-4d91-8125-9b324c51d159.jpg",
"https://r1imghtlak.ibcdn.com/4dfbae9f-09ed-4445-8583-b164aae47a56.jpg",
"https://r1imghtlak.ibcdn.com/7e7ace7b-bc76-4658-9510-bb509962ef9f.jpg",
"https://s3.ap-south-1.amazonaws.com/buzz.beconf.test/6891adaf23/economic-ac-double-434-DAAN%20TEMPLE%20INN041.jpg",

"https://s3.ap-south-1.amazonaws.com/buzz.beconf.test/6891adaf23/deluxe-with-balcony-ac-948-DAAN%20TEMPLE%20INN080.jpg",
"https://s3.ap-south-1.amazonaws.com/buzz.beconf.test/6891adaf23/1-bhk-with-ac-895-DAAN%20TEMPLE%20INN062.jpg",

"https://r1imghtlak.ibcdn.com/b527e679-acd6-40b8-87a1-b35c6c624f2e.jpg",
"https://r1imghtlak.ibcdn.com/77c5d54c-82f4-4c0b-aacc-4d84148adf07.jpg",
"https://r1imghtlak.ibcdn.com/619d3661-96cc-4a9f-82f4-e972096c2b51.jpg"
]

const DaanTempleInn = () => {
  return (
    <div className='daan-lux-inn'>
      <Header number={"+91 07306655074"}></Header>
      <section className='section-1'> <h1>DAAN TEMPLE INN</h1> <h3>Luxury Business Hotel</h3> 
        <p>Ambalath Ayesha, near, Karakkad Rd, East Nada, Guruvayur, Kerala 680101  <br /> <span style={{padding:"10px",textDecoration:"underline"}}>Mob: 0-7306655074</span> </p>

       <button onClick={()=>window.open('https://bookings.daanhotels.com/book/6891adaf23')} className='lux-inn-btn'>Book Now</button> <div className="sec-1-images">
        <img src={TempleInnImages[0]} alt="" />
        <img src={TempleInnImages[1]} alt="" />
        <img src={TempleInnImages[2]} alt="" />
        </div> </section>
      <section className='section-2'> 
        <div className="sec-2-card">
           <h2>Experience Comfort and Convenience Near Guruvayoor Temple</h2>  <br />

           <p>Stay at Daan Temple Inn, where comfort meets convenience just moments from Guruvayoor Temple. 
            Our well-appointed rooms are designed to provide a peaceful and relaxing stay, featuring comfortable bedding, modern amenities,
             air-conditioned interiors, complimentary Wi-Fi, and attentive hospitality.
             <br /> <br /> Whether you're visiting for a pilgrimage or a family trip, our prime location and warm service ensure
              a pleasant and memorable experience.
            </p>  
        </div>  
         <img className='img-shade' src={TempleInnImages[3]} alt="" />
          </section>
   <section className='section-3'>
    <h1>15 Room & Suits</h1>
    <div className="sec-3-cards">
      <div className="sec-3-card-1">
        <img src={TempleInnImages[4]} alt="" />
        {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
          <dash></dash>
        <p>Economic AC Double</p>
      </div>
         <div className="sec-3-card-1">
        <img src={TempleInnImages[5]} alt="" />
            {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
      <dash></dash>
        <p>Deluxe with Balcony AC</p>
      </div>   <div className="sec-3-card-1">
        <img src={TempleInnImages[6]} alt="" />
            {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
         <dash></dash>
        <p>1 BHK with AC</p>
      </div>
    </div>
   </section>

       <section className='section-4'> 
          <div className="sec-4-card">
        <h1>A Peaceful Atmosphere Designed for RelaxationLuxury Room</h1> <br />
         <p>Enjoy a calm and refreshing environment throughout your stay. Soft interiors and warm
           lighting create a soothing space where you can truly unwind. Whether you’re resting in your room or exploring the hotel,
           everything feels comfortable and inviting. Relax, breathe, and experience a peaceful atmosphere made for your comfort.</p> 
          </div>

      <div className="sec-4-card-2">
       <img className='img-shade' src={TempleInnImages[7]} alt="" />
       <p className='img-p'>Enjoy panoramic views, premium bedding, and exclusive services.</p>
      </div>
       </section>

<section className='section-5' >
  <div className="sec-5-card">
  <h2 className='sec-5-bold'>Delicious Dining Crafted for Your Comfort, Enjoy a delightful dining experience with freshly prepared breakfast</h2>
<img src={TempleInnImages[8]} alt="" />
<p className='img-p' >
   Every dish is made in our pure and hygienic kitchen, ensuring quality, cleanliness, and great taste in every bite.</p>
  </div>
 <img className='sec-5-img img-shade' src={TempleInnImages[9]} alt="" />
</section>
<div className="thekkady-map">

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4692.9688410632625!2d76.0445514!3d10.5892048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7953da21de237%3A0x5f0e7abd85ca3545!2sDaan%20Temple%20Inn!5e1!3m2!1sen!2sin!4v1785475330292!5m2!1sen!2sin"
 width="40%"
 height="450px"
 allowfullscreen=""  
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
  </iframe>

   <p><strong>Address:</strong> Ambalath Ayesha, near, Karakkad Rd, East Nada, Guruvayur, Kerala 680101<br />
      <span style={{ textDecoration:"underline",
        padding:"0px"}}>Mob : 073066 55074</span> </p>
  </div>

   <Footer num={0-7306655074}/>


    </div>
  )
}

export default DaanTempleInn