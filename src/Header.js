import React from "react";

import logo from "./img/logo.png";

class Header extends React.Component {
  state = { query: "" };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchQuery(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <div className="header">
        <img className="header__image" src={logo} alt="Logo" />
        <form onSubmit={this.handleSubmit} className="header__form">
          <input
            onChange={this.handleChange}
            className="header__input"
            type="text"
            placeholder="Search Recipes"
            value={this.state.query}
          />
        </form>
      </div>
    );
  }
}

export default Header;
