import PropTypes from "prop-types"
import { Component } from "react";

import "./ImageGallery.css"
import ImageGalleryItem from "./ImageGalleryItem";
import Loader from "../Loader"
import Button from "../Button";
import api from "../../services/pixabayAPI"

class ImageGallery extends Component {
  state = {
    pictures: [],
    page: 1,
    error: null,
    status: 'idle'
  } 

  
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if ( prevName !== nextName) {
      this.setState({ status: 'pending'})
      
      api
        .fetchPicture(nextName, 1)
        .then((data) => {
          this.setState({
            pictures: data.hits,
            status: 'resolved'
          })
          if (data.total === 0) {return Promise.reject( new Error(`Error search result, try again`))}
      })
      .catch(error => this.setState({ error, status: 'rejected' }))
    };

    
    if (prevPage !== nextPage) {
      api.fetchPicture(nextName, nextPage)
      .then((data) => {
        this.setState(
          { pictures: nextPage > 1 ? [...prevState.pictures, ...data.hits] : data.hits })
      })
        .catch(error => this.setState({ error, status: 'rejected' }))
      
    }
  }

  onLoadMore() {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() { 
    const { pictures, error, status } = this.state


    if (status === 'idle') {
        return <h1>Enter name</h1>
    }
    
    if (status === 'pending') {
      return <Loader />
    }

    if (status === 'rejected') {
      return <h2>{error.message}</h2>
    }

    if (status === 'resolved') {
      return (
      <>
        <ul className="imageGallery_list">
        <ImageGalleryItem pictures={pictures} openModalIMG={this.props.openModalIMG} />
          </ul>
          <Button onLoadMore={() => this.onLoadMore()}/>
      </> 
      )
    }
    
     
  }
}
 
export default ImageGallery;

