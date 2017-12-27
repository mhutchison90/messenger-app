import React, { Component } from 'react';
import './Nav.css';
import Search from './Search/Search';
import MyProfilePic from './MyProfilePic/MyProfilePic';
import Compose from '../assets/images/new-message-interface-symbol.svg'

class Nav extends Component {
  render() {
    return (
      <div className="Nav-Container">
      <MyProfilePic/>
      <Search/>
      <img id='compose-icon' src={Compose} alt='Compose new message' title='Compose new message'/>
        {/* <ul>
            <li><h3>Home</h3></li>
            <li><h3>Inbox</h3></li>
            <li><h3>Outbox</h3></li>
            <li><h3>Friends</h3></li>
        </ul> */}
      </div>
    );
  }
}

export default Nav;
