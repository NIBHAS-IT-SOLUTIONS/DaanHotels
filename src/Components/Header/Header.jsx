import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// import newlogo from '../../Images/logoDaan2.png';
import SearchBar from '../searchBar';

const Header = ({bgcolor,number,gallery ,no,booklink}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="header-wrapper" ref={navRef}>
      <div className="topile-bar">
    <span className='phonee' onClick={()=>window.location.href=`tel:${number?number:"09633833141"}` }>📞 {number?number:"09633833141"} <span className={`alert ${no?"alert-visible":""}`} >Add 0 first while calling</span> </span>
    <span className='places'>We're in Trivandrum , Kottayam , Kochi , Thrissur , Guruvayoor , Thekkady, Vagamon</span>
    <span className='phonee'>✉️ info@daanhotels.com
</span>
  </div>
     <Navbar
  expand="lg"
  expanded={menuOpen}
  // gallery={gallery}
  className={`hotel-navbar ${
    scrolled ? "navbar-scrolled" : "navbar-transparent"
  }`}
>
  <Container>

    <Navbar.Brand as={Link} to="/" className="brand-logo">
      <img src="/Images/logoDaan2.png" alt="Logo" />
    </Navbar.Brand>

    <SearchBar />

    <Navbar.Toggle
      aria-controls="main-navbar"
      onClick={handleToggle}
      className="custom-toggle"
    />

    <Navbar.Collapse id="main-navbar">

      <Nav className="mx-auto align-items-lg-center">

        <Nav.Link as={Link} to="/" className="nav-item-custom">
          Home
        </Nav.Link>

        <Nav.Link as={Link} to="/about" className="nav-item-custom">
          About
        </Nav.Link>

        <Nav.Link as={Link} to={`/gallery${gallery||""}`} className="nav-item-custom">
          Gallery
        </Nav.Link>

        <Nav.Link as={Link} to="/facilities" className="nav-item-custom">
          Facilities
        </Nav.Link>

        <Nav.Link as={Link} to="/contact" className="nav-item-custom">
          Contact
        </Nav.Link>

      </Nav>

      <Button onClick={() => window.open(booklink || 'https://bookings.daanhotels.com/book/6891adaf23')} className="book-btn">
        Book Now
      </Button>

    </Navbar.Collapse>

  </Container>
</Navbar>
    </div>
  );
};

export default Header;
