import { Component } from "react";
import { toast } from 'react-toastify'

import './Searchbar.css'


class Searchbar extends Component {
  state = {
    pictureName: "",
  } 

  handleNameChange = event => {
    this.setState({ pictureName: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pictureName.trim() === '') {
      alert("Введите имя!");
      return;
    }

    this.props.onSearchSubmit(this.state.pictureName);
    this.setState({ pictureName: "" });
  };

  render() { 
    return (
  <header className="Searchbar">
  <form className="SearchForm" onSubmit={this.handleSubmit}>
    <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.pictureName}
      onChange={this.handleNameChange}
    />
  </form>
</header>
    );
  } 
}
 
export default Searchbar;