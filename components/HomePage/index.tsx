import React from 'react';
import '../HomePage/HomePage.css';
import { MdNavigateNext } from 'react-icons/md';
import iphone from '../../public/assets/logo-iphone.png';
import Image from 'next/image';
import apple from '../../public/assets/apple.png';
import { GrLinkNext } from 'react-icons/gr';

const HomePage: React.FC = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home-text">
            <div className="woman-link">
              <h3>Woman’s Fashion</h3>
              <a>
                {' '}
                <MdNavigateNext />
              </a>
            </div>
            <div className="man-link">
              <h3>Men’s Fashion</h3>
              <a>
                {' '}
                <MdNavigateNext />
              </a>
            </div>
            <h3>Electronics</h3>
            <h3>Home & Lifestyle</h3>
            <h3>Medicine</h3>
            <h3>Sports & Outdoor</h3>
            <h3>Baby’s & Toys</h3>
            <h3>Groceries & Pets</h3>
            <h3>Health & Beauty</h3>
          </div>
          <hr className="hr" width="1" size="420"></hr>
          <div className="img-block">
            <div className="home-img">
              <Image src={iphone} alt="img" />
            </div>
            <div className="text-block">
              <Image src={apple} alt="img" />
              <h2>iPhone 14 Series</h2>
              <h1>
                Up to 10% <br /> off Voucher
              </h1>
              <div className="btns">
                <a>Shop Now</a>
                <hr className="blockHr" noshade size="2" width="9%"></hr>
                <span>
                  <GrLinkNext />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
