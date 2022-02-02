import PropTypes from "prop-types"
import { Component } from "react";

import ImageGalleryItem from "./ImageGalleryItem";

class ImageGallery extends Component {
  state = {
    pictures : null
  } 
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pictureName !== this.props.pictureName) {
      console.log("Новое имя");
      fetch(`https://pixabay.com/api/?q=${this.props.pictureName}&page=1&key=24021062-33a986e16cffce2cd7c29eb8f&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(pictures => {
          this.setState((prevState) => ({
            this.state.page >
          }))
        })
      
    }
   
  }

  render() { 
    return (
      <>
      {/* <ul className="ImageGallery">
         {<ImageGalleryItem /> }
       </ul>  */}
      
      <p>{this.props.pictureName}</p>
      </>
    );
  }
}
 
export default ImageGallery;