import clsx from 'clsx';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
// import { ReactComponent as Message } from '../../assets/svg/message.svg';
// import { ReactComponent as Phone } from '../../assets/svg/phone.svg';

import Message from '../../assets/svg/message.svg';
import Phone from '../../assets/svg/phone.svg';
import BookModal from '../BookModal';
import CommonButton from '../Button/CommonButton';

// eslint-disable-next-line react/prop-types
const Burger = ({ open, ToggleSidebar }) => {
  return (
    <button open={open} onClick={() => ToggleSidebar()} className="hamburger">
      <div className={open ? 'isOpen' : ''} />
      <div className={open ? 'isOpen' : ''} />
      <div className={open ? 'isOpen' : ''} />
    </button>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const [colorChange, setColorchange] = useState(false);

  const [bookModal, setBookModal] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  const ToggleSidebar = () => {
    open === true ? setOpen(false) : setOpen(true);
  };

  if (open) {
    window.document.body.classList.add('Navbaropen');
  } else {
    window.document.body.classList.remove('Navbaropen');
  }

  return (
    <div>
      <Navbar className={clsx('nav-bar p-0', colorChange ? 'isScroll' : '')}>
        <div className="header_icons">
          <Burger open={open} setOpen={setOpen} ToggleSidebar={ToggleSidebar} />
          <a className="header_img">
            <img src={Message} alt="img" />
          </a>
          <a className="header_img">
            <img src={Phone} alt="img" />
          </a>
        </div>
        <NavLink to="/" className="logo">
          <Logo />
        </NavLink>
        <CommonButton className="book-btn header-btn" onClick={() => setBookModal(!bookModal)}>
          Book now
        </CommonButton>
      </Navbar>

      <div className="container-fluid">
        <div className={`sidebar ${open == true ? 'active' : ''}`}>
          <div className="side-header">
            <Burger open={open} setOpen={setOpen} ToggleSidebar={ToggleSidebar} />
            <Logo />
          </div>
          <div className="sd-body">
            <ul>
              {/* <li>
                <NavLink to="/" className={clsx('sd-link', ({ isActive }) => (isActive ? 'active' : ''))} onClick={() => ToggleSidebar()}>
                  Home
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/about" className={clsx('sd-link', ({ isActive }) => (isActive ? 'active' : ''))} onClick={() => ToggleSidebar()}>
                  <span>01</span>
                  About the hotel
                </NavLink>
              </li>
              <li>
                <NavLink to="/events-weddings" className={clsx('sd-link', ({ isActive }) => (isActive ? 'active' : ''))} onClick={() => ToggleSidebar()}>
                  <span>02</span>
                  Events & Weddings
                </NavLink>
              </li>

              <li>
                <NavLink to="/rooms-suites" className={clsx('sd-link', ({ isActive }) => (isActive ? 'active' : ''))} onClick={() => ToggleSidebar()}>
                  <span>03</span>
                  Rooms & Suites
                </NavLink>
              </li>

              <li>
                <NavLink to="/cafe" className={clsx('sd-link', ({ isActive }) => (isActive ? 'active' : ''))} onClick={() => ToggleSidebar()}>
                  <span>04</span>
                  Dining
                </NavLink>
              </li>
              <li>
                <NavLink to="/facilities" className={clsx('sd-link', ({ isActive }) => (isActive ? 'active' : ''))} onClick={() => ToggleSidebar()}>
                  <span>05</span>
                  Facilities
                </NavLink>
              </li>
              <li>
                <NavLink to="/offers" className={clsx('sd-link', ({ isActive }) => (isActive ? 'active' : ''))} onClick={() => ToggleSidebar()}>
                  <span>06</span>
                  Offers
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={clsx('sd-link', ({ isActive }) => (isActive ? 'active' : ''))} onClick={() => ToggleSidebar()}>
                  <span>05</span>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className={clsx('sd-link', ({ isActive }) => (isActive ? 'active' : ''))} onClick={() => ToggleSidebar()}>
                  <span>06</span>
                  Contact & Location
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={`sidebar-overlay ${open == true ? 'active' : ''}`} onClick={() => ToggleSidebar()}></div>
      </div>
      {bookModal && <BookModal setBookModal={setBookModal} bookModal={bookModal} />}
    </div>
  );
};

export default Header;
