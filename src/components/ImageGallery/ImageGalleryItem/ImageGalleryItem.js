import PropTypes from "prop-types"

export default function ImageGalleryItem (pictures, ) {
  return pictures.map(({ id, }) => 
    <li key={id}class="gallery-item" >
        <img src="" alt="" />
      </li>
  );
}