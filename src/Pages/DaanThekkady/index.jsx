import React from 'react'
import './style.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const DaanThekkady = () => {
  return (
    <div className='daan-thekkady'>
      <Header number={"+91 -8848-528-011"} booklink={'https://be.aiosell.com/book/77f4b1aeff'}></Header>
      <section className='section-1'> <h1>MONSOON RETREATS BY DAAN</h1> <h3>Eco Stay in Thekkady</h3>
        <p> Attapallam, Thekkady, Kumily, Kerala 685509 <br /><span style={{padding:"10px" ,textDecoration:"underline"}}> Mob: 91 8848528011</span></p>

       <button onClick={()=>window.open('https://be.aiosell.com/book/77f4b1aeff')} className='thekkady-btn'>Book Now</button> <div className="sec-1-images">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/829971852.jpg?k=a019875e0cd94d5e835f9e041713428cc541b86fa31c8830cb4b51afa58994f9&o=" alt="" />
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/829969941.jpg?k=6a0de8ba49bebca16e47a76aec2addb077cda0a9a6f7f4c7fbbca30791ebeff9&o=" alt="" />
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/829969981.jpg?k=9d96462032ed17e9c56811d6d7630d8d11cca3b0a60beabf4ed9f9bdc65be615&o=" alt="" />
        </div> </section>
      <section className='section-2'> 
        <div className="sec-2-card">
           <h2>Experience Sustainable Comfort with Our Eco-Friendly Stay</h2>  <br />

           <p>Our eco-friendly rooms are thoughtfully designed to offer comfort while caring for the planet. Enjoy fresh airflow, eco-conscious furnishings, and smart climate control that reduces energy use without compromising comfort. <br /> <br />
With responsible water usage, eco-friendly toiletries, and mindful housekeeping practices, your stay supports sustainability at every step.Ensuring a refreshing and guilt-free hospitality experience.
            </p>  
        </div>  
         <img className='img-shade' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/829971847.jpg?k=5c8f499ace6bd45f81b11af01c9229bc11d7aade480f2c52f812e353f536f017&o=" alt="" />
          </section>
   <section className='section-3'>
    <h1>Total 5 Room & Suits</h1>
    <div className="sec-3-cards">
      <div className="sec-3-card-1">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/829969941.jpg?k=6a0de8ba49bebca16e47a76aec2addb077cda0a9a6f7f4c7fbbca30791ebeff9&o=" alt="" />
        {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
          <dash></dash>
        <p>TreeHouse Standard</p>
      </div>
         <div className="sec-3-card-1">
        <img src="https://r1imghtlak.mmtcdn.com/ad985713-3948-4df7-ae3d-6ccfb5940d21.jpg?downsize=540:*" alt="" />
            {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
      <dash></dash>
        <p>Treehouse Deluxe</p>
      </div>   <div className="sec-3-card-1">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/829969901.jpg?k=9c26ddc7eddb0500e9a99e76e171afe561cb54b9192ea3c77b0e9327e5f5f0e4&o=" alt="" />
            {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
         <dash></dash>
        <p>Delux Double Room</p>
      </div>
    </div>
   </section>

       <section className='section-4'> 
          <div className="sec-4-card">
        <h1>A Refreshing Eco-Friendly Stay That Blends Modern Comfort with Natural Living</h1> <br />
         <p>Our eco-friendly atmosphere focuses on wellness, comfort, and sustainability. From breathable fabrics to environmentally responsible amenities, every detail supports a calm stay that respects both guests and nature..</p> 
          </div>

      <div className="sec-4-card-2">
       <img className='img-shade' src="https://r1imghtlak.mmtcdn.com/b46ac420-d289-4cd0-aab5-c4b68b13a725.jpg?downsize=540:*" alt="" />
       <p className='img-p'>Enjoy panoramic views, premium bedding, and exclusive services.</p>
      </div>
       </section>

<section className='section-5' >
  <div className="sec-5-card">
  <h2 className='sec-5-bold'>A Naturally Inviting Dining Area Rooted in Sustainability</h2>
<img src="https://r1imghtlak.mmtcdn.com/05ad89ce-bd33-49d3-a7c7-17b9ac184f82.jpg?downsize=540:*" alt="" />
<p className='img-p' >
 Warm textures and natural lighting create a welcoming dining atmosphere. Sustainable choices ensure a comfortable space that respects both guests and the environment.</p>
  </div>
 <img className='sec-5-img img-shade' src="https://r1imghtlak.mmtcdn.com/61703456-f49b-4736-8445-e659f044a548.jpg?downsize=540:*" alt="" />
</section>
<div className="thekkady-map">
<iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.6724142416!2d77.14490087586098!3d9.623448579399119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0654e2b87ea54b%3A0x9b6337745090e626!2sMONSOON%20RETREATS%20BY%20DAAN!5e0!3m2!1sen!2sin!4v1770026172409!5m2!1sen!2sin"
  width="40%"
   height="450px"
    allowfullscreen="" 
    loading="lazy"
     referrerpolicy="no-referrer-when-downgrade"></iframe>
       <p> Attapallam, Thekkady, Kumily, Kerala 685509 <br /> <span style={{padding:"10px"}}> Mob : 8848528011</span></p>
</div>

   <Footer num={8848528011}/>


    </div>
  )
}

export default DaanThekkady
