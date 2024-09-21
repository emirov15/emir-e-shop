import React from 'react';
import '../Header/Header.css';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa6';
import { SlBasket } from 'react-icons/sl';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import Home from '../HomePage';

const Header: React.FC = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="footer-top">
          <div className="footer-link">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a href="#">ShopNow</a>
          </div>
          <div className="footer-language">
            <p>English</p>
            <FaChevronDown />
          </div>
        </div>
        <div className="header">
          <div className="logo">
            <h1>Exclusive</h1>
          </div>
          <div className="header-nav">
            <div className="nav">
              <Link href="/">Home</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about"> About</Link>
              <Link href="/singup"> Sign Up</Link>
            </div>
          </div>
          <div className="icons">
            <div className="inputs">
              <input type="text" placeholder="What are you looking for?" />
              <a>
                <IoSearchOutline />
              </a>
            </div>
            <div className="icona">
              <a>
                <FaRegHeart />
              </a>
              <a>
                <SlBasket />
              </a>
            </div>
          </div>
        </div>
        <hr className="hrHeader" />
      </div>
    </div>
  );
};

export default Header;
