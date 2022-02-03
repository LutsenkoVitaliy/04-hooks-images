import PropTypes from "prop-types"
import { Component } from "react";

import "./ImageGallery.css"
import ImageGalleryItem from "./ImageGalleryItem";
import Loader from "../Loader"
import Button from "../Button";

class ImageGallery extends Component {
  state = {
    pictures: [],
    page: 1,
    error: null,
    status: 'idle'
  } 

  onLoadMore = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      };
    });
  };
  
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName

    if ( prevName !== nextName) {
      this.setState({ status: 'pending'})

      fetch(`https://pixabay.com/api/?q=${this.props.pictureName}&page=1&key=24021062-33a986e16cffce2cd7c29eb8f&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          
          return Promise.reject(
            new Error(`Error search result, try again`)
          );
        })
        .then((data) => {
          this.setState({
            pictures:
              this.state.page > 1
              ? [...prevState.pictures, ...data.hits]
              : data.hits,
            status: 'resolved'
          })
      })
      .catch(error => this.setState({ error, status: 'rejected' }))
    };
    
    
  }

   

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
        <ul className="ImageGallery">
        <ImageGalleryItem pictures={pictures}/>
        </ul>
        <Button onLoadMore={this.onLoadMore}/>
      </> 
      )
    }
    
     
  }
}
 
export default ImageGallery;

