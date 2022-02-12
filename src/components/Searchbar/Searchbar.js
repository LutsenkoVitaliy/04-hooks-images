import { useState } from "react";
import PropTypes from "prop-types";


import './Searchbar.css'


export default function Searchbar ({onSearchSubmit}) {
  const [pictureName, setPictureName] = useState('')
  // state = {
  //   pictureName: "",
  // } 

  // handleNameChange = event => {
  //   this.setState({ pictureName: event.target.value.toLowerCase() });
  // };
  const handleNameChange = event => {
    setPictureName(event.target.value.toLowerCase())
  };

  // handleSubmit = event => {
  //   event.preventDefault();

  //   if (this.state.pictureName.trim() === '') {
  //     alert("Введите имя!");
  //     return;
  //   }

  //   this.props.onSearchSubmit(this.state.pictureName);
  //   this.setState({ pictureName: "" });
  // };
  const handleSubmit = event => {
    event.preventDefault();

    if (pictureName.trim() === '') {
      alert("Введите имя!");
      return;
    }

    onSearchSubmit(pictureName);
    setPictureName('')
  };

    return (
  <header className="searchbar">
  <form className="searchForm" onSubmit={handleSubmit}>
    <button type="submit" className="searchForm-button">
        <span className="searchForm-button-label">Search</span>
    </button>

    <input
      className="searchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={pictureName}
      onChange={handleNameChange}
    />
  </form>
</header>
    ); 
}

Searchbar.propType = {
  onSearchSubmit: PropTypes.func.isRequired
}