import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Messages from './components/Messages/Messages'

class App extends Component {
  render() {
    return (
      <div className="App-Container">
      <header></header>
      <nav> <Nav/> </nav>
      <messages> <Messages/></messages>
      <footer></footer>



      </div>
    );
  }
}

export default App;
