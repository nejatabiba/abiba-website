import React, {useState, useEffect} from 'react';
import {logo1, logo1White} from "../data/images/images";

export function Header({ isVisible, headerScroll }) {
  
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav className={`navbar fixed-top navbar-expand-lg ` + headerScroll}>
        <div className="container-fluid">
          <a
           className="navbar-brand text-light" 
           href="#" 
           onClick={(e) => {
            e.preventDefault();
            handleScroll('top');
           }}
            ><img src={logo1White} className='logo'></img></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex flex-row-reverse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#intro"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('intro');
                  }}
                >
                  Intro
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#education"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('education');
                  }}
                >
                  Education
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}