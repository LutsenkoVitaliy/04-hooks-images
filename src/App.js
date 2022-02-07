import React, { Component } from 'react';


import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery'
import Modal from './components/Modal'
import "./App.css";

export default class App extends Component {
  state = {
    pictureName: "",
    showModal: false
  } 
   
  handleSearchSubmit = pictureName => {
    this.setState({pictureName})
  }

  toggleModal = ()

  render() { 
    return (
      <div className='App'>
        {/* <Searchbar onSearchSubmit={this.handleSearchSubmit} />
        <ImageGallery pictureName={this.state.pictureName} /> */}
        
        <Modal/>
      </div>
    );
  }
}
 
