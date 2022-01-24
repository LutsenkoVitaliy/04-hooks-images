import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'

import Searchbar from './components/Searchbar';
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


        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
 
