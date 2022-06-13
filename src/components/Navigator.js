import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigator() {
  return (
    <nav>
      <div>
        <span className="Bookstore-CMS">
          Bookstore CMS // CAMBIAR!!!
        </span>
        <Link to="/">Rockets</Link>
        <Link to="/missions">MISSIONS</Link>
        <Link to="/myProfile">MY PROFILE</Link>
      </div>
    </nav>
  );
}