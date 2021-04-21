import React from 'react';
import logo from '../../Images/frendy.png';
import './Header.css';
const Header = () => {
    return (
  
  <div className="row bg-secondary">
    <div className="col">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="frendy.muhammadlovlu.com">
            <img src={logo} width="120px" alt=""/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold active" aria-current="page" href="frendy.muhammadlovlu.com">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="frendy.muhammadlovlu.com">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="frendy.muhammadlovlu.com">Topic</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="frendy.muhammadlovlu.com">Interest</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="frendy.muhammadlovlu.com">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="frendy.muhammadlovlu.com">Credit</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
       
    );
};

export default Header;