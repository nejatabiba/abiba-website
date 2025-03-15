import React from 'react';

export function Header({isVisible}) {
  return (
    <header >
        <nav className={`navbar fixed-top navbar-expand-lg `}>
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Logo Here</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex flex-row-reverse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                      <a className="nav-link active text-light" aria-current="page" href="#intro">Intro</a>
                      </li>
                      <li className="nav-item ">
                      <a className="nav-link text-light" href="#education">Education</a>
                      </li>
                  </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}