import React, { Component } from 'react';


import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery'
import Modal from './components/Modal'
import "./App.css";

export default class App extends Component {
  state = {
    pictureName: "",
    showModal: false,
    modalImg: {}
  } 
   
  handleSearchSubmit = pictureName => {
    this.setState({pictureName})
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  openModalIMG = (evt) => {
    this.toggleModal();
    const modalImg = {
      largeImageURL: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.alt,
    };
    this.setState({ modalImg });
  }

  render() { 
    const {pictureName, showModal, modalImg} = this.state
    return (
      <div className='App'>
        {!showModal && <Searchbar onSearchSubmit={this.handleSearchSubmit} />}
        <ImageGallery pictureName={pictureName} openModalIMG={this.openModalIMG}/>
        
        {showModal &&
          <Modal onClose={this.toggleModal}>
           <img src={modalImg.largeImageURL} alt={modalImg.alt} />   
          </Modal>}
      </div>
    );
  }
}
 
