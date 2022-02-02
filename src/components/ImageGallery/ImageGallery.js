import PropTypes from "prop-types"
import { Component } from "react";

import "./ImageGallery.css"
import ImageGalleryItem from "./ImageGalleryItem";
// import Loader from "../Loader"
import Button from "../Button";

class ImageGallery extends Component {
  state = {
    pictures: [],
    page: 1,
    loading: false
  } 
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pictureName !== this.props.pictureName) {
      this.setState({ loading: true})

      fetch(`https://pixabay.com/api/?q=${this.props.pictureName}&page=1&key=24021062-33a986e16cffce2cd7c29eb8f&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then((data) => {
        this.setState((prevState) => ({
          pictures:
            this.state.page > 1
              ? [...prevState.pictures, ...data.hits]
              : data.hits,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
      };
  }

  render() { 
    const { pictures, loading } = this.state
    const {pictureName} = this.props
    return (
      <>
        {loading && <h2>Loading...</h2>}
        {!pictureName && <h1>Enter name</h1>}
        
      <ul className="ImageGallery">
        <ImageGalleryItem
        pictures={pictures}
        />
        </ul>
        {/* <Button /> */}

       </> 
    );
  }
}
 
export default ImageGallery;

