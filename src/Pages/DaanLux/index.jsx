import React from 'react'
import './style.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const DaanLuxInn = () => {
  return (
    <div className='daan-lux-inn'>
      <Header number={"+91 -999-557-7077"} booklink={'https://be.aiosell.com/book/6e131bf058'}></Header>
      <section className='section-1'> <h1>DAAN LUXE INN</h1> <h3>Luxury Business Hotel</h3>
        <p>Majestic Tower, Powerhouse Rd, Chenthitta, Thampanoor, Trivandrum  <br /> <span style={{padding:"10px",textDecoration:"underline"}}>Mob: 91 9995577077</span> </p>

       <button onClick={()=>window.open('https://be.aiosell.com/book/6e131bf058')} className='lux-inn-btn'>Book Now</button> <div className="sec-1-images">
        <img src="/Images/lux-2-6.jpg" alt="" />
        <img src="/Images/lux-1.jpg" alt="" />
        <img src="/Images/lux-2-10.jpg" alt="" />
        </div> </section>
      <section className='section-2'> 
        <div className="sec-2-card">
           <h2>Experience Luxury and Comfort with Our Premium Room Features</h2>  <br />

           <p>Our premium room offers the ultimate comfort with a luxurious king-size bed
             and a private balcony with a beautiful view, perfect for relaxing after a long day.
              Guests can enjoy entertainment on a smart TV,
               unwind in a spacious bath tub, and rely on 24×7 concierge service for anything they need throughout their stay. <br /> <br />
                This room combines elegance, convenience, and modern amenities to ensure a memorable experience.
            </p>  
        </div>  
         <img className='img-shade' src="/Images/lux-2-7.jpg" alt="" />
          </section>
   <section className='section-3'>
    <h1>32 Room & Suits</h1>
    <div className="sec-3-cards">
      <div className="sec-3-card-1">
        <img src="/Images/lux-2-12.jpg" alt="" />
        {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
          <dash></dash>
        <p>Standard AC Room</p>
      </div>
         <div className="sec-3-card-1">
        <img src="/Images/lux-2-13.jpg" alt="" />
            {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
      <dash></dash>
        <p>Deluxe AC Room</p>
      </div>   <div className="sec-3-card-1">
        <img src="/Images/lux-2-6.jpg" alt="" />
            {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
         <dash></dash>
        <p>Premium Family Room</p>
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
       <img className='img-shade' src="/Images/lux-2-6.jpg" alt="" />
       <p className='img-p'>Enjoy panoramic views, premium bedding, and exclusive services.</p>
      </div>
       </section>

<section className='section-5' >
  <div className="sec-5-card">
  <h2 className='sec-5-bold'>Delicious Dining Crafted for Your Comfort, Enjoy a delightful dining experience with freshly prepared breakfast</h2>
<img src="/Images/lux-2-11.jpg" alt="" />
<p className='img-p' >
   Every dish is made in our pure and hygienic kitchen, ensuring quality, cleanliness, and great taste in every bite.</p>
  </div>
 <img className='sec-5-img img-shade' src="/Images/lux-2-10.jpg" alt="" />
</section>
<div className="thekkady-map">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1505447676464!2d76.95131277585486!3d8.484739397269221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb78b845d353%3A0x7e3a8dcafed40b31!2sDaan%20Luxe%20Inn!5e0!3m2!1sen!2sin!4v1770028324528!5m2!1sen!2sin"
  width="40%"
   height="450px"
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"></iframe>
   <p>Majestic Tower, Powerhouse Rd, Chenthitta, Thampanoor, Trivandrum<br />
      <span style={{ textDecoration:"underline",
        padding:"0px"}}>Mob :9995577077</span> </p>
  </div>

   <Footer num={9995577077}/>


    </div>
  )
}

export default DaanLuxInn