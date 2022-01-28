import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
      <div className="menu ">
        <ul className="nav">
         <Link to ="/home"><li className="style">Home</li></Link> 
         <Link to ="/about"><li className="style">About</li></Link> 
          <Link to="/service"><li className="style">Service</li></Link>
          <Link to="/products"><li className="style">Products</li></Link>
          <Link to ="/register"><li className="style">Register</li></Link>
          <Link to ="/login"><li className="style">Login</li></Link>
        </ul>
      </div>
  );
};

export default Menu;
