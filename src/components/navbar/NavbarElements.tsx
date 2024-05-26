import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-bar">
        <div className="logo">
          <Link to="/">MentorMatchy</Link>
        </div>
        <div></div>
        <div className="navbar">
          <Link to="/matches">Matches</Link>
          <Link to="/login">Login</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;