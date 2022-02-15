import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import './Modal.css'
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  // handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     this.props.onClose()
  //   }
  // };
  
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
     onClose()
    }
  };
  
  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown)
  // };

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown)
  // };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })
  

  
  const handleClickBackDrop = e => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  };
  
    return createPortal (
  <div className ="overlay" onClick={handleClickBackDrop}>
    <div className="modal">{children}</div>
  </div>, modalRoot 
    );
  }

 

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}