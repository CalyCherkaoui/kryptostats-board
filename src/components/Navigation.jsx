import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <h1 className="nav_logo">Krypto-stats | Dashboard</h1>
      <ul>
        <li className="nav_item">
          <Link to="/about" className="nav_link">About</Link>
        </li>
        <li className="nav_item">
          <Link to="/" className="nav_link">Index</Link>
        </li>
        <li className="nav_item">
          <Link to="/item" className="nav_link">Item</Link>
        </li>
        <li className="nav_item">
          <Link to="/tracked" className="nav_link">Tracked Items</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
