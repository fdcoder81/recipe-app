import React from "react";

import "./Main.scss";

import Loader from "react-loader-spinner";

const Main = ({ recipeClicked, loadingDetails }) => {
  let recipe = recipeClicked.recipe;

  const ingredients = recipe
    ? recipe.ingredients.map(ingredient => {
        return <p className="main__ingredients--text">{ingredient}</p>;
      })
    : null;

  const recipeDetails = recipe ? (
    <div className="main__recipe">
      <img className="main__image" src={recipe.image_url} alt="" />
      <h1 className="main__title">{recipe.title}</h1>
      <a
        className="main__link"
        href={recipe.source_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Recipe here
      </a>
      <h3>Ingredients</h3>
    </div>
  ) : null;

  return (
    <div className="main">
      {loadingDetails ? (
        <div className="aside__loader">
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={0}
          />
        </div>
      ) : null}

      {recipeDetails}

      <div className="main__ingredients">{ingredients}</div>
    </div>
  );
};

export default Main;
