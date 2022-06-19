import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/planet.png';
import '../css/Navigator.css';

export default function Navigator() {
  return (
    <nav>
      <div className="nav">
        <div>
          <img src={img} alt="logo" width={100} />
          <h1>SPACE TRAVELERS&apos; HUB</h1>
        </div>
        <ul className="links">
          <Link to="/">Rockets</Link>
          {' '}
          <Link to="/missions">Missions</Link>
          {' '}
          |
          {' '}
          <Link to="/myProfile">My Profile</Link>
        </ul>
      </div>
    </nav>
  );
}
