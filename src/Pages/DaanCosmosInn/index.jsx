import './style.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const TempleInnImages=[

"https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202509241721036820-8f72c586-3a23-4808-bfb7-2b6d08a19c46.jpg",

"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202509241721036820-bf0b95c1-bf65-4e9c-8793-c821fdf1bd1f.jpg",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751872698.jpg?k=3c29c4960a4c4e18831b9844d6295ebeaaf1330ecd3ab88c7138d16e6a1f87e1&o=",

"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751871908.jpg?k=c0915ae57ff85f2d5db5550909393805dfa15474b4934200b7c2ea35a9d2ba69&o=",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751870825.jpg?k=f8009d502ce47e78208614699eba404e0e00be5876e970d1898ef0dfea1a3301&o=",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751870793.jpg?k=13e96ac0c6736ac9ae827ff7db1aa29c38e7d443f086bf287ef2923eb4121b47&o=",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751870814.jpg?k=69e0334264cc6f791b5fd1fc6ee4c8e953608e3c442f92bc985c0683f480fd11&o=",

"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751872999.jpg?k=79680bf1a6fca6d3f33565c236c2cdb1c734e79249716bcd38cf3fd406246e3c&o=",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751873302.jpg?k=0501a0ce53326c765b137cc5b42aee3c9548ec678a85d38c44b0f7dee05d2de7&o=",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751873385.jpg?k=39c3346c72aad10e2cefe9f05b364cbdf15ce5a36409bbcd677a434d0d3e1c6b&o="
// "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmCFc1phVqiHSj8iqGDkVOcMvW0Jzu35EtyemRrE-P_eSkgBiN01zwSTklj--eN55Wm_nRkTKwQWkx6m1PKIdYk_0qX73HqSV48qD-TSQEOXOLAZtKt8ry2LUszV9kiz99DJMqzsg=s680-w680-h510-rw"

]

const DaanCosmosInn = () => {
  return (  
    <div className='daan-lux-inn'>
      <Header number={"+91 099957 70377"} booklink={'https://bookings.daanhotels.com/book/9be7ffd1d8'}></Header>
      <section className='section-1'> <h1>Daan Cosmos Inn</h1> <h3>Luxury Business Hotel</h3> 
        <p>Medical College, Pazhaya Rd, Murinjapalam, Thiruvananthapuram, Kerala 695011<br /> <span style={{padding:"10px",textDecoration:"underline"}}>Mob: 099957 70377</span> </p>

       <button onClick={()=>window.open('https://bookings.daanhotels.com/book/9be7ffd1d8')} className='lux-inn-btn'>Book Now</button> <div className="sec-1-images">
        <img src={TempleInnImages[0]} alt="" />
        <img src={TempleInnImages[1]} alt="" />
        <img src={TempleInnImages[2]} alt="" />
        </div> </section>
      <section className='section-2'> 
        <div className="sec-2-card">
           <h2>Experience Luxury and Elegance at Daan Cosmos Inn</h2>  <br />

           <p>Welcome to Daan Cosmos Inn, where refined comfort meets exceptional hospitality in the heart of Kottayam.
             Our elegantly designed rooms and premium amenities offer the perfect blend of style, relaxation, and convenience. From plush bedding and
             sophisticated interiors to modern facilities, high-speed Wi-Fi, and personalized service, every detail is crafted to elevate your stay.
             <br /> <br />Welcome to Daan Cosmos Inn, where refined comfort meets exceptional hospitality in the heart of Kottayam. 
            </p>  
        </div>  
         <img className='img-shade' src={TempleInnImages[3]} alt="" />
          </section>
   <section className='section-3'>
    <h1> 18 well-appointed deluxe rooms</h1>
    <div className="sec-3-cards">
      <div className="sec-3-card-1">
        <img src={TempleInnImages[4]} alt="" />
        {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
          <dash></dash>
        {/* <p>Super Deluxe</p> */}
      </div>
         <div className="sec-3-card-1">
        <img src={TempleInnImages[5]} alt="" />
            {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
      <dash></dash>
        {/* <p>Premium Rooms</p> */}
      </div>   <div className="sec-3-card-1">
        <img src={TempleInnImages[6]} alt="" />
            {/* <p>MAX 3 GUESTS / 1 QUEEN OR 2 SINGLE BEDS</p> */}
         <dash></dash>
        {/* <p>Royal Suite</p> */}
      </div>
    </div>
   </section>

       <section className='section-4'> 
          <div className="sec-4-card">

        <h1>Modern Bathrooms Designed for Comfort</h1> <br />
         <p>Experience the perfect blend of comfort and functionality in our thoughtfully
 designed bathrooms. Featuring premium fixtures, elegant finishes, spacious layouts, and
  complimentary luxury toiletries, each bathroom offers a clean, refreshing space to start and end your day. 
  Enjoy a relaxing shower, soft towels, and modern amenities that enhance your stay with convenience and style.
</p> 
          </div>

      <div className="sec-4-card-2">
       <img style={{maxHeight:"450px", objectFit:"cover"}} className='img-shade' src={TempleInnImages[7]} alt="" />
       <p className='img-p'>Experience elegant interiors, modern amenities, and spotless comfort.</p>
      </div>
       </section>

<section className='section-5' >
  <div className="sec-5-card">
  <h2 className='sec-5-bold'>A Naturally Inviting Dining Area Rooted in Sustainability</h2>
<img src={TempleInnImages[8]} alt="" />
<p className='img-p' >
 Celebrate life's special moments in our spacious and elegantly designed banquet hall. Perfect for weddings, receptions, engagements, 
 
 and exceptional hospitality to make every event truly unforgettable..</p>
  </div>
 <img className='sec-5-img img-shade' src={TempleInnImages[9]} alt="" />
</section>
<div className="thekkady-map">

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4896.282374583189!2d76.9309633!3d8.5190365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbc558e9c5e5%3A0xb8a9554f4c962eea!2sDaan%20Cosmos%20Inn!5e1!3m2!1sen!2sin!4v1789538603628!5m2!1sen!2sin" 
 width="40%"
 height="450px"
 allowfullscreen=""  
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"
     ></iframe>




   <p><strong>Address:</strong>Medical College, Pazhaya Rd, Murinjapalam, Thiruvananthapuram, Kerala 695011<br />
      <span style={{ textDecoration:"underline",
        padding:"0px"}}>Mob : 09995770377</span> </p>
  </div>

   <Footer num={0-9995770377}/>


    </div>
  )
}

export default DaanCosmosInn