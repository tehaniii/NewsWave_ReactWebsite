import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/css/header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="NewsWave Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a target='blank' href='http://localhost/NewsWave/categories.php' >Explore News</a></li>
            <li><a target='blank' href='http://localhost/NewsWave/categories.php' > Categories</a></li>

            <li><a target='blank' href='http://localhost/NewsWave/login.php' >Login</a></li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
