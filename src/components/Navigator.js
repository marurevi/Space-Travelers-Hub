import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/planet.png';

export default function Navigator() {
  return (
    <nav>
      <div>
        <img src={img} alt="logo" />
        <ul>
          <Link to="/">Rockets</Link>
          {' '}
          <Link to="/missions">MISSIONS</Link>
          {' '}
          |
          {' '}
          <Link to="/myProfile">MY PROFILE</Link>
        </ul>
      </div>
    </nav>
  );
}
