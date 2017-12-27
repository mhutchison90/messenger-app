import React, { Component } from 'react';
import './Messages.css';
import friendProfilePic from '../assets/images/friend-picture.jpg'

class Messages extends Component {
  render() {
    return (
      <div className="Messages-Container">
      <div className='message' >
        <friendpicture> <img src={friendProfilePic}/> </friendpicture>
        <friendname>Emily</friendname>
        {/* <sender>You:</sender> */}
        <message>You: Ya About That...</message>
        <timestamp>20 minutes ago</timestamp>
      </div>
      
      
      <div className='message' > </div>
      <div className='message' > </div>
      <div className='message' > </div>
      <div className='message' > </div>
      <div className='message' > </div>
      <div className='message' > </div>
      <div className='message' > </div>
      <div className='message' > </div>
      <div className='message' > </div>
      <div className='message' > </div>
      </div>
    );
  }
}

export default Messages;
