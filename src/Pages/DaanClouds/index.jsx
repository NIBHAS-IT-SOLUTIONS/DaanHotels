import React from 'react'
import './style.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const DaanClouds = () => {
  return (
    <div className='daan-clouds'>
      <Header number={"+91 9633-833-077"} booklink={'https://be.aiosell.com/book/8903988c3c'}></Header>
      <section className='section-1'> <h1>THE CLOUD BY DAAN VAGAMON</h1> <h3>A Serene Escape in Vagamon</h3>
        <p> Vattapathal Rd, Vagamon, Idukki, Kerala 685503 <br /><span style={{padding:"10px" ,textDecoration:"underline"}}> Mob: +91 9633833077</span></p>

       <button onClick={()=>window.open('https://be.aiosell.com/book/8903988c3c')} className='clouds-btn'>Book Now</button> <div className="sec-1-images">
        <img src="https://r1imghtlak.mmtcdn.com/f2cc1a15-cd98-41a1-b28c-3315109122ef.jpg" alt="" />
        <img src="/Images/Vaga-4.jpeg" alt="" />
        <img src="https://r1imghtlak.mmtcdn.com/f2cc1a15-cd98-41a1-b28c-3315109122ef.jpg" alt="" />
        </div> </section>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      <section className='section-2'> 
        <div className="sec-2-card">
           <h2>Experience Eco-Friendly Comfort Amid the Hills of Vagamon</h2>  <br />

           <p>Our eco-friendly rooms are designed to provide comfort, fresh mountain air, and beautiful hill views. The peaceful surroundings create a relaxing atmosphere for every guest. <br /> <br />
             Thoughtfully designed interiors, energy-saving features, and eco-friendly amenities help create a sustainable and refreshing stay..</p>
        </div>  
         <img className='img-shade' src="https://r1imghtlak.mmtcdn.com/f2cc1a15-cd98-41a1-b28c-3315109122ef.jpg" alt="" />
          </section>
   <section className='section-3'>
    <h1>Rooms</h1>
    <div className="sec-3-cards">
      <div className="sec-3-card-1">
        <img src="/Images/Vaga-7.jpeg" alt="" />
        {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
          <dash></dash>
        <p>Standard Deluxe Room</p>
      </div>
         <div className="sec-3-card-1">
        <img src="/Images/Vaga-9.jpg" alt="" />
            {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
      <dash></dash>
        <p>Premium Mountain View</p>
      </div>   <div className="sec-3-card-1">
        <img src="https://r1imghtlak.mmtcdn.com/6ab906c4-3e0f-4afa-9230-dc0d4c654485.jpg?downsize=540:*" alt="" />
            {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
         <dash></dash>
        <p>Standard Valley View</p>
      </div>
    </div>
   </section>

       <section className='section-4'> 
          <div className="sec-4-card">
        <h1>A Peaceful Retreat Inspired by Nature</h1> <br />
         <p>A beautiful hillside covered in lush greenery and tea plants, with soft mist rolling across the mountains. A small building is nestled among the trees, adding to the peaceful and secluded atmosphere. The combination of fresh green landscapes, foggy hills, and open skies creates a calm and refreshing natural setting.</p> 
          </div>

      <div className="sec-4-card-2">
       <img className='img-shade' src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/bgdefault_bg.jpg" alt="" />
       <p className='img-p'>Golden sunset views, peaceful garden seating, and fresh mountain air create the perfect escape into nature.</p>
      </div>
       </section>

<section className='section-5' >
  <div className="sec-5-card">
  <h2 className='sec-5-bold'>A Relaxing Dining Experience with Stunning Hill Views</h2>
<img src="/Images/Vaga-6.png" alt="" />
<p className='img-p' >
Enjoy your meals in a cozy dining space surrounded by beautiful hill views and fresh mountain air. The peaceful atmosphere and scenic surroundings make every dining experience relaxing and memorable.</p>
  </div>
 <img className='sec-5-img img-shade' src="/Images/Vaga-13.png" alt="" />
</section>
<div className="clouds-map">
<iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.898706979115!2d76.9201987!3d9.689686099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07b3c7a99f7db7%3A0xed66582f4020a6d!2sStar%20Hills%20Resort!5e0!3m2!1sen!2sin!4v1776680405010!5m2!1sen!2sin"
  width="40%"
   height="450px"
    allowfullscreen="" 
    loading="lazy"
     referrerpolicy="no-referrer-when-downgrade"></iframe>
       <p> Vattapathal Rd, Vagamon, Idukki, Kerala 685503 <br /> <span style={{padding:"10px"}}> Mob : +91 9633833077</span></p>
</div>

   <Footer num={9633833077}/>


    </div>
  )
}

export default DaanClouds
