import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


const LeftNav = () => (
  <div>
    <nav>
      <ul>
        <li><Link to="/playists">Your Music</Link></li>
      </ul>
    </nav>
  </div>
);

export default LeftNav;
