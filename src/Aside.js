import React from "react";

const Aside = ({ recipes }) => {
  console.log(recipes);

  const recipeItem = recipes.length
    ? recipes.map(recipe => {
        return (
          <div className="aside__recipe" key={recipe.recipe_id}>
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

  return <div className="aside">{recipeItem}</div>;
};

export default Aside;
