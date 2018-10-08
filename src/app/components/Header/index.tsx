import * as React from 'react';
import { Link } from 'react-router';
// const style = require('./style.css');
const avatarIMG = require('./avatar.jpg');

export const Header = ({openModal}) => (
  <header id="header">
    <span className="avatar">
      <img src={avatarIMG} alt="" />
    </span>
    <h1>Hello, my dear friend!</h1>
    <ul className="icons">
      <li>
        <Link to="/" className="icon style2 fas fa-home">
          <span className="label">Home page</span>
        </Link>
      </li>
      <li>
        <Link to="repos" className="icon style2 fas fa-terminal">
          <span className="label">Repos</span>
        </Link>
      </li>
      <li>
        <div onClick={openModal} style={{cursor: 'pointer'}} className="icon style2 fas fa-envelope">
          <span className="label">Contact</span>
        </div>
      </li>
    </ul>
  </header>
);
