import React, { useState } from 'react';


import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery'
import Modal from './components/Modal'
import "./App.css";

export default function App() {
  // state = {
  //   pictureName: "",
  //   showModal: false,
  //   modalImg: {}
  // } 
  const [pictureName, setPictureName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState({})
  
   
  // handleSearchSubmit = pictureName => {
  //   this.setState({pictureName})
  // }
  const handleSearchSubmit = pictureName => {
    setPictureName(pictureName)
  }

  // toggleModal = () => {
  //   this.setState(({showModal}) => ({
  //     showModal: !showModal
  //   }))
  // }
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  // openModalIMG = (evt) => {
  //   this.toggleModal();
  //   const modalImg = {
  //     largeImageURL: evt.currentTarget.dataset.url,
  //     alt: evt.currentTarget.alt,
  //   };
  //   this.setState({ modalImg });
  // }
  const openModalIMG = (evt) => {
    toggleModal();
    const modalImg = {
      largeImageURL: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.alt,
    };
    setModalImg(modalImg);
  }

    return (
      <div className='App'>
        {!showModal && <Searchbar onSearchSubmit={handleSearchSubmit} />}
        <ImageGallery pictureName={pictureName} openModalIMG={openModalIMG}/>
        
        {showModal &&
          <Modal onClose={toggleModal}>
           <img src={modalImg.largeImageURL} alt={modalImg.alt} />   
          </Modal>}
      </div>
    );
}

 
