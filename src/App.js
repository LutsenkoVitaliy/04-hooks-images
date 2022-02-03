import React, { Component } from 'react';


import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery'
import "./App.css";

export default class App extends Component {
  state = {
    pictureName: "",
  } 
   
  handleSearchSubmit = pictureName => {
    this.setState({pictureName})
  }

  render() { 
    return (
      <div className='App'>


        <Searchbar onSearchSubmit={this.handleSearchSubmit} />
        <ImageGallery pictureName={this.state.pictureName}/>
      </div>
    );
  }
}
 
