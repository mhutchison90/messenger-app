import React, { Component } from 'react';
import './Search.css';
import MagnifyingGlass from '../../assets/images/magnifying-glass.svg'

class Search extends Component {
  render() {
    return (
      <div className="Search-Container">
      <img id='search-icon' src={MagnifyingGlass}/>
        <input type='text' placeholder='Search'/>
      </div>
    );
  }
}

export default Search;
