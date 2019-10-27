import React from "react";

import Loader from "react-loader-spinner";

const Aside = ({ recipes, handleClick, loading }) => {
  const recipeItem = recipes.length
    ? recipes.map(recipe => {
        return (
          <div
            onClick={() => handleClick(recipe.recipe_id)}
            className="aside__recipe"
            key={recipe.recipe_id}
          >
            <img
              className="aside__recipe--image"
              src={recipe.image_url}
              alt=""
            />
            <p className="aside__recipe--title">{recipe.title}</p>
          </div>
        );
      })
    : null;

  return (
    <div className="aside">
      {loading ? (
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
      {recipeItem}
    </div>
  );
};

export default Aside;
