import React from "react";
import "./App.scss";
import "./App";

import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";

class App extends React.Component {
  state = {
    recipes: []
  };

  searchQuery = async query => {
    const key = "86b5ce97ac597d1e380aacb23b4fb8f7";
    let response = await fetch(
      `https://www.food2fork.com/api/search?key=${key}&q=${query}&page=1`
    );
    let data = await response.json();
    console.log(data);
    let recipes = data.recipes.slice(0, 10);
    this.setState({ recipes });
  };

  render() {
    return (
      <div className="App">
        <Header searchQuery={this.searchQuery} />
        <Aside recipes={this.state.recipes} />
        <Main />
      </div>
    );
  }
}

export default App;
