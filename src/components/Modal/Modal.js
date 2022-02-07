import { Component } from "react";
import PropTypes from "prop-types";

import './Modal.css'

class Modal extends Component {

  componentDidMount() {

  }
  
  render() { 
    return (
  <div className ="overlay">
    <div className="modal">
      <img src="" alt="" />
    </div>
  </div>
    );
  }
}
 
export default Modal;