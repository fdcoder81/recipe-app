import React from "react";
import "./App.scss";
import "./App";

import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    recipes: [],
    recipeClicked: [],
    loadingRecipes: false,
    loadingDetails: false
  };

  handleClick = async id => {
    this.setState({ recipeClicked: [], loadingDetails: true });
    const key = "5fee6f712b52ad6132afa064267aa860";
    let response = await fetch(
      `https://www.food2fork.com/api/get?key=${key}&rId=${id}`
    );
    let recipeClicked = await response.json();
    this.setState({ recipeClicked, loadingDetails: false });
  };

  searchQuery = async query => {
    this.setState({ loadingRecipes: true });
    const key = "5fee6f712b52ad6132afa064267aa860";
    let response = await fetch(
      `https://www.food2fork.com/api/search?key=${key}&q=${query}&page=1`
    );
    let data = await response.json();
    let recipes = data.recipes.slice(0, 10);
    console.log(recipes);
    this.setState({ recipes, loadingRecipes: false });
  };

  render() {
    return (
      <div className="App">
        <Header searchQuery={this.searchQuery} />
        <Aside
          recipes={this.state.recipes}
          handleClick={this.handleClick}
          loading={this.state.loadingRecipes}
        />
        <Main
          recipeClicked={this.state.recipeClicked}
          loadingDetails={this.state.loadingDetails}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
