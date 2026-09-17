
import './style.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

import {
  FaBed,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaConciergeBell,
  FaWifi,
  FaBuilding
} from 'react-icons/fa'


const TempleInnImages=[

"https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202509241721036820-8f72c586-3a23-4808-bfb7-2b6d08a19c46.jpg",

"/Images/cosmos-main.jpeg",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751872698.jpg?k=3c29c4960a4c4e18831b9844d6295ebeaaf1330ecd3ab88c7138d16e6a1f87e1&o=",

"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751871908.jpg?k=c0915ae57ff85f2d5db5550909393805dfa15474b4934200b7c2ea35a9d2ba69&o=",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751870825.jpg?k=f8009d502ce47e78208614699eba404e0e00be5876e970d1898ef0dfea1a3301&o=",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751870793.jpg?k=13e96ac0c6736ac9ae827ff7db1aa29c38e7d443f086bf287ef2923eb4121b47&o=",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751870814.jpg?k=69e0334264cc6f791b5fd1fc6ee4c8e953608e3c442f92bc985c0683f480fd11&o=",

"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751872999.jpg?k=79680bf1a6fca6d3f33565c236c2cdb1c734e79249716bcd38cf3fd406246e3c&o=",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751873302.jpg?k=0501a0ce53326c765b137cc5b42aee3c9548ec678a85d38c44b0f7dee05d2de7&o=",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/751873385.jpg?k=39c3346c72aad10e2cefe9f05b364cbdf15ce5a36409bbcd677a434d0d3e1c6b&o="

]


const KeyFeatures = () => {
  return (
    <section className="key-features">
      <div style={{padding:"10px"}} className="key-features-container">

        <h2>Key Features & Amenities</h2>

        <p className="key-features-subtitle">
          Everything you need for a comfortable and convenient stay
        </p>

        <div className="features-grid">

          <div className="feature-item">
            <div className="feature-icon">
              <FaBed />
            </div>

            <div className="feature-content">
              <h3>Room Inventory</h3>
              <p>
                18 Premium, Modern AC Double Deluxe Rooms
              </p>
            </div>
          </div>


          <div className="feature-item">
            <div className="feature-icon">
              <FaCalendarAlt />
            </div>

            <div className="feature-content">
              <h3>Stay Type</h3>
              <p>
                Short-term, Extended, and Long-Stay options
              </p>
            </div>
          </div>


          <div className="feature-item">
            <div className="feature-icon">
              <FaMapMarkerAlt />
            </div>

            <div className="feature-content">
              <h3>Key Location</h3>
              <p>
                Walking distance / short drive to Medical College,
                Trivandrum
              </p>
            </div>
          </div>


          <div className="feature-item">
            <div className="feature-icon">
              <FaConciergeBell />
            </div>

            <div className="feature-content">
              <h3>Service Standard</h3>
              <p>
                24/7 Front Desk, Daily Housekeeping, High Hygiene Standards
              </p>
            </div>
          </div>


          <div className="feature-item">
            <div className="feature-icon">
              <FaWifi />
            </div>

            <div className="feature-content">
              <h3>Connectivity</h3>
              <p>
                Free High-Speed Wi-Fi & Work Desk Setup
              </p>
            </div>
          </div>


          <div className="feature-item">
            <div className="feature-icon">
              <FaBuilding />
            </div>

            <div className="feature-content">
              <h3>Parent Brand</h3>
              <p>
                Daan Hospitality Group
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}




const DaanCosmosInn = () => {
  return (  
    <div className='daan-lux-inn'>

      <Header 
        number={"+91 099957 70377"} 
        booklink={'https://bookings.daanhotels.com/book/9be7ffd1d8'}>
      </Header>

      <section className='section-1'> 
        <h1>Daan Cosmos Inn</h1> 
        <h3>Comfort, Convenience, and Peace of Mind Near Medical College</h3> 
        
        <p>
          Medical College, Pazhaya Rd, Murinjapalam, Thiruvananthapuram, Kerala 695011
          <br /> 
          <span style={{padding:"10px",textDecoration:"underline"}}>
            Mob: 099957 70377
          </span> 
        </p>

        <button 
          onClick={()=>window.open('https://bookings.daanhotels.com/book/9be7ffd1d8')} 
          className='lux-inn-btn'>
          Book Now
        </button> 

        <div className="sec-1-images">
          <img src={TempleInnImages[0]} alt="" />
          <img src={TempleInnImages[1]} alt="" />
          <img src={TempleInnImages[2]} alt="" />
        </div> 
      </section>


      <section className='section-2'> 
        <div className="sec-2-card">

          <h2>
            A Comfortable Home Away From Home Near Medical College
          </h2>  
          <br />

          <p>
            When a loved one is undergoing medical care, finding a reliable, 
            restful, and affordable place to stay shouldn't be an extra worry. 
            Daan Cosmos Inn, a proud property of the reputed Daan Hospitality Group, 
            offers 18 thoughtfully designed premium modern rooms crafted specifically 
            for extended and long-term stays.
            
            <br /><br />

            Located just minutes from Government Medical College, Trivandrum, 
            our hotel provides the ideal home-away-from-home experience during 
            critical times.
          </p>  

        </div>  

        <img className='img-shade' src={TempleInnImages[3]} alt="" />

      </section>


      <section className='section-3'>

        <h1 style={{textAlign:"center"}}>18 Premium Modern Rooms Designed for Extended Stays</h1>

        <div className="sec-3-cards">

          <div className="sec-3-card-1">
            <img src={TempleInnImages[4]} alt="" />
            <dash></dash>
          </div>

          <div className="sec-3-card-1">
            <img src={TempleInnImages[5]} alt="" />
            <dash></dash>
          </div>

          <div className="sec-3-card-1">
            <img src={TempleInnImages[6]} alt="" />
            <dash></dash>
          </div>

        </div>


        <div style={{border:"2px solid rgb(255, 204, 38)",padding:"20px 10px",borderRadius:"20px"}} className="sec-5-card">

          <h2 className='sec-5-bold'>
            Signature Daan Hospitality
          </h2>

          <p style={{textAlign:"center"}} className='img-p'>

            As part of the Daan Hospitality Group, we guarantee top-tier hygiene, 
            round-the-clock assistance, and empathetic customer service.

            <br /><br />

            Whether you need a quiet retreat after a long day at the hospital 
            or an extended stay for ongoing treatment, Daan Cosmos Inn is dedicated 
            to surrounding you with warmth, privacy, and seamless comfort.

          </p>

        </div>


      </section>


{KeyFeatures()}

      <section className='section-4'> 

        <div className="sec-4-card">

          <h1>
            Thoughtfully Designed for Comfort and Peaceful Rest
          </h1> 

          <br />

          <p>
            Each of our 18 spacious air-conditioned rooms combines modern 
            aesthetics with functional comfort. Engineered for extended living, 
            our rooms feature peaceful interiors, soothing lighting, high-speed 
            Wi-Fi, and plush bedding to ensure you get the restorative rest you need.
            
            <br /><br />

            Whether you're staying for a short visit or an extended period, 
            every detail is designed to provide a comfortable and relaxing 
            environment away from the hospital.
          </p> 

        </div>


        <div className="sec-4-card-2">

          <img 
            style={{maxHeight:"450px", objectFit:"cover"}} 
            className='img-shade' 
            src={TempleInnImages[7]} 
            alt="" 
          />

          <p className='img-p'>
            Peaceful interiors, modern amenities, and thoughtful comfort 
            designed for restful extended stays.
          </p>

        </div>

      </section>


      <section className='section-5' >

        <div className="sec-5-card">

          <h2 className='sec-5-bold'>
            Why Choose Daan Cosmos Inn?
          </h2>

          <img src={TempleInnImages[8]} alt="" />

          <p className='img-p'>

            <strong>Prime Medical Location:</strong> Situated within easy reach 
            of Trivandrum Medical College and surrounding specialist healthcare centers.

            <br /><br />

            <strong>Long-Stay & Family Friendly:</strong> Tailored booking options 
            and amenities designed to make extended stays stress-free and cost-effective.

            <br /><br />

            <strong>Affordable Excellence:</strong> Premium quality standards 
            without the luxury price tag, keeping long family stays budget-friendly.

          </p>

        </div>

        <img className='sec-5-img img-shade' src={TempleInnImages[9]} alt="" />

      </section>


      {/* <section className='section-5' >

        <div className="sec-5-card">

          <h2 className='sec-5-bold'>
            Signature Daan Hospitality
          </h2>

          <p className='img-p'>

            As part of the Daan Hospitality Group, we guarantee top-tier hygiene, 
            round-the-clock assistance, and empathetic customer service.

            <br /><br />

            Whether you need a quiet retreat after a long day at the hospital 
            or an extended stay for ongoing treatment, Daan Cosmos Inn is dedicated 
            to surrounding you with warmth, privacy, and seamless comfort.

          </p>

        </div>

      </section> */}


      <div className="thekkady-map">

        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4896.282374583189!2d76.9309633!3d8.5190365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbc558e9c5e5%3A0xb8a9554f4c962eea!2sDaan%20Cosmos%20Inn!5e1!3m2!1sen!2sin!4v1789538603628!5m2!1sen!2sin" 
          width="40%"
          height="450px"
          allowfullscreen=""  
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>


        <p>
          <strong>Address:</strong>
          Medical College, Pazhaya Rd, Murinjapalam, 
          Thiruvananthapuram, Kerala 695011
          <br />

          <span style={{
            textDecoration:"underline",
            padding:"0px"
          }}>
            Mob : 09995770377
          </span> 
        </p>

      </div>


      <Footer num={0-9995770377}/>

    </div>
  )
}

export default DaanCosmosInn

