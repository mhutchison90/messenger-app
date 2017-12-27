import React, { Component } from 'react';
import './MyProfilePic.css';
import myPic from '../../assets/images/profilePic.jpg';

class MyProfilePic extends Component {
  render() {
    return (
      <div className="MyProfilePic-Container">
      <img id='nav-profile-pic' src={myPic}/>
      </div>
    );
  }
}

export default MyProfilePic;
