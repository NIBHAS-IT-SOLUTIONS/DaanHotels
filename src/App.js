import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Services from './Pages/Services/Services';
import ScrollToTop from './utils/ScrollToTop';
import DaanLux from './Pages/DaanLux';
import DaanAmbalath from './Pages/DaanAmbalath';
import DaanThekkady from './Pages/DaanThekkady';
import DaanClouds from './Pages/DaanClouds';

import FloatingContactIcons from './utils/FloatingContactIcons';
import FloatingFABMenu from './utils/Floating/FloatingFABMenu';
import DaanTempleInn from './Pages/DaanTemple';
// import c from './Pages/DaanOrchid';
import DaanOrchid from './Pages/DaanOrchid';
import AmbalathGallery from './Pages/AmbalathGallery/Gallery';
import DaanCosmosInn from './Pages/DaanCosmosInn';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <HeroSection/> */}
      <Router>
      <FloatingContactIcons/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={ <Gallery/> } />
        <Route path="/Facilities" element={ <Services/> } />
        <Route path="/daanluxeinn" element={ <DaanLux/> } />
        <Route path="/daan-temple-inn" element={ <DaanTempleInn/> } />
        <Route path="/daan-orchid" element={ <DaanOrchid/> } />
        <Route path="/daan-ambalath" element={ <DaanAmbalath/> } />
        <Route path="/Monsoon-Retreats-By-Daan" element={ <DaanThekkady/> } />
        <Route path="/Cloud-By-Daan" element={ <DaanClouds/> } />
        <Route path="/gallery/daan-ambalath/" element={ <AmbalathGallery/> } />
        <Route path="/daan-cosmos-inn" element={ <DaanCosmosInn/> } />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
