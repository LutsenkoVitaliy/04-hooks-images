import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'

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
      <div>
        <Searchbar onSearchSubmit={this.handleSearchSubmit} />
        <ImageGallery pictureName={this.state.pictureName}/>

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
 
