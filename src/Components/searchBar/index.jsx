import { useEffect, useMemo, useState } from 'react'
import './style.css'

const locations = [
  "Trivandrum",
  "Thrissur",
  "Ernakulam",
  "Kochi Edapally",
  "Thekkady",
  "Kochi Kakkanad",
  "Kalamassery",
  "Guruvayoor",
  "Kottayam",
  "Vagamon",
  
]
const Hotels = [
  {
    name: "Daan Orchid residency",
    location: "Kottayam", location2:'',
      img:'https://i.postimg.cc/PfLLnBBC/Copy-of-Facade-5.jpg',
      link: '/daan-orchid'
  },
   {
    name: "DAAN LUXE INN",
    location: "Trivandrum", location2:'Thiruvananthapuram',
      img:'/Images/lux-1.jpg',
      link: '/daanluxeinn'
  },   {
    name: "DAAN COSMOSINN",
    location: "Trivandrum",
    location2:'Thiruvananthapuram',
      img:'/Images/BG-20.jpeg',
      link: '/daancosmosinntvm'
  },
  {
    name: "Daan Temple inn",
    location: "Guruvayoor",
    location2:"",
    img:'https://i.postimg.cc/LsC2p22y/DAAN-TEMPLE-INN007-scaled.jpg',
      link: '/daan-temple-inn'
  },  
  {
    name: "Daan Ambalath Maple",
    location: "Guruvayoor",location2:"",
    img: "/Images/_DDD8-_ copy.jpg",
    link: '/daan-ambalath/'
  },{
    name: "Urbn24",
    location: "Kalamassery",location2:"",
   img:'https://i.postimg.cc/0Qsd9Rnw/ABI6958-Edit-1-1024x766.webp',
      link: 'https://urbn24.in/'
  },{
    name: "Daan Inn",
    location: "Kochi Kakkanad",location2:"Ernakulam",
         img:'https://i.postimg.cc/NFbVD9k8/ABI1677-HDR-Edit.jpg',
      link: 'https://daaninn.in/'
  },{
    name: "Monsoon Retreats By Daan",
    location: "Thekkady",location2:"",
     img:'Images/daan-thekkady.webp',
      link: '/Monsoon-Retreats-By-Daan'
  },{
    name: "Daan Residency",
    location: "Kochi Edapally",location2:"Ernakulam",
       img:'https://i.postimg.cc/QxJLDhqp/ABI1197-Edit-copy-1024x683.webp',
      link: 'https://daanresidency.in/'
  },{
    name: "Daan South Park",
    location: "Ernakulam", location2:"",
      img:'https://i.postimg.cc/FzghwcRS/1639455211.jpg',
      link: 'https://www.booking.com/hotel/in/daan-south-park.en-gb.html?aid=357028&label=bin859jc-1DCAsobEIPZGFhbi1zb3V0aC1wYXJrSDNYA2hsiAEBmAEJuAEXyAEM2AED6AEB-AEDiAIBqAIDuALqjPXBBsACAdICJDI4NDAxYWU1LWFjNDktNDMyMi05OTc2LWZkOTdmY2YxNzNkYtgCBOACAQ&sid=e8aa6d68ffa841b312fa52746b65c647&dist=0&keep_landing=1&sb_price_type=total&type=total&'
 
  },{
    name: "Amala Arcade thrissur",
    location: "Thrissur",location2:"",
         img:'https://i.postimg.cc/x8Bwd14R/DSC4163-HDR-copy-scaled.jpg',
      link: 'https://amalaarcade.com/'
  },
  {
    name: "Daan Regency",
    location: "Thrissur",location2:"",
      img:'/Images/dan-reg-33.jpeg',
      link: 'https://be.aiosell.com/book/04207cd949'
  },
    {
    name: "D Nest Inn",
    location: "Thrissur",location2:"",
      img:'/Images/d-nest.webp',
      link: 'https://dnestinn.store/'
  },
  {
    name: "Meridian By Daan",
    location: "Trivandrum",location2:"Thiruvananthapuram",
 img:'https://i.postimg.cc/tJDLhzJB/478877522.jpg',
      link: 'https://be.aiosell.com/book/d53b872227'
  },
   {
    name: "Cloud By Daan",
    location: "Vagamon",location2:"",
 img:'/Images/Vaga-1.jpg',
      link: '/cloud-by-daan'
  }

]


const SearchBar = () => {

    const [open,setOpen]=useState(false)
    const [contain,setContain]=useState(false)
    const [results,setResults]=useState([])
    const [size,setSize]=useState(false)
    const [data,setData]=useState("")
    const[selected,setSelect]=useState(null)

    const entryData =(e)=>{
      setContain(true)
        setData(e.target.value)
    }

    const handleEnter=(e)=>{
      if(e.key==="Enter"){
        e.preventDefault();
handleSubmit(data)
      }
    }

    const handleSubmit = (loc) => {
      setContain(false)
           setData(loc)
        const HotelFilter=Hotels.filter((hotel)=>{
          return hotel.location.toLowerCase().includes(loc.toLowerCase())
        })
       
          const Again=Hotels.filter((hotel)=>{
          return hotel.location2.toLowerCase().includes(loc.toLowerCase())
        })

        setResults([...HotelFilter,...Again])
    }

    const FilterData=useMemo(()=>{
      return locations.filter((location)=>{
        return location.toLowerCase().includes(data.toLowerCase())
      })
    },[data])

      useEffect(() => {
      const checkWidth = () => {
      setSize(window.innerWidth >= 992); // true if small screen
    };

    checkWidth(); // run on first render
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div className='search-bar'> 
    <i onClick={()=>setOpen(!open)} class="fa fa-search" aria-hidden="true"></i>
    {
       (size || open) &&
        <div className='result'>
         <form   className="sub-2">
                 <input onChange={entryData} value={data} style={{background:"white", border:"1px solid #ccc"}} onKeyDown={handleEnter} required type="text" placeholder="Search hotels by location 'Trivandrum'" className="search-input" />
         {/* <button type="submit">Search</button>  */}
        </form>
        {

     data!=='' && contain ? FilterData.length > 0 ? 

        <div className="sub-3" > {FilterData.slice(0,5).map((loc,index)=>(
        <p Submit onClick={(e)=>  handleSubmit(loc)} >{loc}</p>   ))}
        </div>

     : <div className="sub-3"> No data found ! </div> :''
        }
        </div>
    } 

    {
      results.length > 0 &&
      <div className='search-results'>

        <i onClick={()=>setResults([])} class="fas  fa-shield-cross"> X </i>



        <h2>Search Results for "{data}"</h2>
        {/* Here you can map through actual search results based on the query */}
        <div className="hotel-flex">
        {results.map((hotel, index) => (
          <div key={index} onClick={()=> window.open(hotel.link) } className="hotel-result">
            <img src={hotel.img} alt={hotel.name} />
            <b>{hotel.name}</b>
            <p> location: {hotel.location}</p>
          </div>
        ))}
        </div>

      </div>
    }   
       
   
    </div>

  )
}

export default SearchBar