import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Footer({num}) {
  const  [openLocation,setOpenLocation]=useState(null);

  const toggleLocation=(index)=>{
    if(openLocation===index){
      setOpenLocation(null);
    }else{
      setOpenLocation(index);
    }
  };
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#273b35" }}
    >
      <section
        className="d-flex bg-black text-white justify-content-between p-4"
        style={{ background: "#000" }}
      >
        <div className="me-5">
          <span>Get connected with us on social networks</span>
        </div>

        <div>
          <a href="https://www.facebook.com/profile.php?id=61557428725502&ref=_ig_profile_ac" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
         
          <a href="https://www.instagram.com/_daan_hotels_" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/watch?v=gz0OYhgjIto" className="text-white me-4">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          
        </div>
      </section>

      <section style={{background: "#273b35"}}>
        <div  className="container text-center  text-md-start mt-5">
          <div   className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 style={{color:"#ffc928"}} className="text-uppercase fw-bold"> DAAN HOSPITALITY SOLUTIONS PRIVATE LIMITED</h6>
              <hr
                className="mb-4 mt-0 text-white d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p style={{color:"#ffc928"}} >
                Elegant, cooling and modern cosy room,stay near to city without city hassles. 
                There are all the little extras that make a stay at daan regency so special.Are you on business? Or private trip? 
                It doesn’t matter. 
                We want you to feel completely at ease with your stay in daan group.
              </p>
              <a
                href="/privacy_policy.html"
                    target="_blank"
                       rel="noopener noreferrer"
                        >
                             Terms & Conditions & Privacy Policy
                                </a>
            </div>

            <div  className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 style={{color:"#ffc928"}} className="text-uppercase  fw-bold">Our Locations</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "80px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p onClick={()=> toggleLocation("kottayam")} style={{color:"#ffc928"}}>
                Kottayam <i class="fa fa-angle-down" aria-hidden="true"></i>
              </p>
              {openLocation==="kottayam" && (
                <ul>
                  <li><Link to="/daan-orchid" style={{color:"#ffc928"}} className="text-decoration-none">Daan Orchid Residency</Link></li>
                  
                </ul>
              )}
              <p onClick={()=> toggleLocation("guruvayur")} style={{color:"#ffc928"}}>
                Guruvayur <i class="fa fa-angle-down" aria-hidden="true"></i>
              </p>
              {openLocation==="guruvayur" && (
                <ul>
                  <li><Link to="/daan-temple-inn" style={{color:"#ffc928"}} className="text-decoration-none">Daan Temple Inn</Link></li>
                  <li><Link to="/daan-ambalath" style={{color:"#ffc928"}} className="text-decoration-none">Daan Ambalath Maple</Link></li>
                </ul>
              )}
              <p onClick={()=> toggleLocation("kalamassery")} style={{color:"#ffc928"}}>
                Kalamassery <i class="fa fa-angle-down" aria-hidden="true"></i>
              </p>
              {openLocation==="kalamassery" && (
                <ul>
                  
                  <li><Link to="https://urbn24.in/" style={{color:"#ffc928"}} className="text-decoration-none">Urban24</Link></li>
                 
                </ul>
              )}
              <p onClick={()=> toggleLocation("kakkanad")} style={{color:"#ffc928"}}>
                Kakkanad <i class="fa fa-angle-down" aria-hidden="true"></i>
              </p>
              {openLocation==="kakkanad" && (
                <ul>
                  <li><Link to="https://daaninn.in/" style={{color:"#ffc928"}} className="text-decoration-none">Daan Inn</Link></li>
                  
                </ul>
              )}
              <p onClick={()=> toggleLocation("thekkady")} style={{color:"#ffc928"}}>
                Thekkady <i class="fa fa-angle-down" aria-hidden="true"></i>
              </p>
              {openLocation==="thekkady" && (
                <ul>
                  <li><Link to="/Monsoon-Retreats-By-Daan" style={{color:"#ffc928"}} className="text-decoration-none">Monsoon Retreats By Daan</Link></li>
                 
                </ul>
              )}
            </div>

            <div  className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 style={{color:"#ffc928"}} className="text-uppercase  fw-bold">Our Locations</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p onClick={()=> toggleLocation("edapally")} style={{color:"#ffc928"}}>
                Edapally <i class="fa fa-angle-down" aria-hidden="true"></i>
              </p>
              {openLocation==="edapally" && (
                <ul>
                  <li><Link to="https://daanresidency.in/" style={{color:"#ffc928"}} className="text-decoration-none">Daan Residency</Link></li>
                </ul>
              )}
              <p onClick={()=> toggleLocation("trivandrum")} style={{color:"#ffc928"}}>
                Trivandrum <i class="fa fa-angle-down" aria-hidden="true"></i>
              </p>
              {openLocation==="trivandrum" && (
                <ul>
                  <li><Link to="/daanluxeinn" style={{color:"#ffc928"}} className="text-decoration-none">Daan Luxe Inn</Link></li>
                  <li><Link to="/daan-cosmos-inn" style={{color:"#ffc928"}} className="text-decoration-none">Daan Cosmosinn</Link></li>
                  <li><Link to="https://be.aiosell.com/book/d53b872227" style={{color:"#ffc928"}} className="text-decoration-none">Meridian By Daan</Link></li>
                </ul>
              )}
              <p onClick={()=> toggleLocation("ernakulam")} style={{color:"#ffc928"}} >
                Ernakulam <i class="fa fa-angle-down" aria-hidden="true"></i>
              </p>
              {openLocation==="ernakulam" && (
                <ul>
                  <li><Link to="https://www.booking.com/hotel/in/daan-south-park.en-gb.html?aid=357028&label=bin859jc-1DCAsobEIPZGFhbi1zb3V0aC1wYXJrSDNYA2hsiAEBmAEJuAEXyAEM2AED6AEB-AEDiAIBqAIDuALqjPXBBsACAdICJDI4NDAxYWU1LWFjNDktNDMyMi05OTc2LWZkOTdmY2YxNzNkYtgCBOACAQ&sid=e8aa6d68ffa841b312fa52746b65c647&dist=0&keep_landing=1&sb_price_type=total&type=total&" style={{color:"#ffc928"}} className="text-decoration-none">Daan South park </Link></li>
                </ul>
              )}
             <p onClick={()=> toggleLocation("thrissur")} style={{color:"#ffc928"}} >
                Thrissur <i class="fa fa-angle-down" aria-hidden="true"></i>
              </p>
              {openLocation==="thrissur" && (
                <ul>
                  <li><Link to="https://amalaarcade.com/" style={{color:"#ffc928"}} className="text-decoration-none">Amala Arcade Thrissur</Link></li>
                  <li><Link to="https://be.aiosell.com/book/04207cd949" style={{color:"#ffc928"}} className="text-decoration-none">Daan Regency</Link></li>
                  <li><Link to="https://dnestinn.store/" style={{color:"#ffc928"}} className="text-decoration-none">D  Nest Inn</Link></li>
                </ul>
              )}
              <p onClick={()=> toggleLocation("vagamon")} style={{color:"#ffc928"}}>
                Vagamon <i class="fa fa-angle-down" aria-hidden="true"></i>
              </p>
              {openLocation==="vagamon" && (
                <ul>
                  <li><Link to="/cloud-by-daan" style={{color:"#ffc928"}} className="text-decoration-none">Cloud By Daan </Link></li>
                </ul>
              )}


            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 style={{color:"#ffc928"}} className="text-uppercase  fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p style={{color:"#ffc928"}} ><i className="fas fa-home mr-1"></i > DAAN HOSPITALITY SOLUTIONS PRIVATE LIMITED <br />
                Orchid Residency <br />Pulimoodu Rd, Pulimoodu Jn, <br />  Kottayam 686001</p>
              <p style={{color:"#ffc928"}} ><i className="fas fa-envelope mr-3"></i>	info@daanhotels.com
</p>
              <p style={{color:"#ffc928"}} ><i className="fas fa-phone mr-3"></i>  {num?num:"09633833141"}</p>
             

            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2025 Copyright: All rights reserved &nbsp;
        <a className="text-white text-decoration-none" href="https://daanregency.com/">
          DAAN HOSPITALITY SOLUTIONS PRIVATE LIMITED
        </a>
        <br />
        Our IT Partner &nbsp;
        <Link style={{textDecoration:'none'}} to={'https://nibhasitsolutions.com/'}>Nibhas IT Solutions</Link> 
      </div>
    </footer>
  );
}

export default Footer;
