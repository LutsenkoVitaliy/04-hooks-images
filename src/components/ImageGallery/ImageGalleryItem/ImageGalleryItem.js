import PropTypes from "prop-types"
import "./ImageGalleryItem.css"

export default function ImageGalleryItem ({pictures}) {
  return pictures.map(({ id, webformatURL, largeImageURL }) => (
    <li key={id} className="gallery-item" >
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={`img №${id}`}
        data-url={largeImageURL}
      />
      </li>
  ));
}

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array.isRequired,
  
} 