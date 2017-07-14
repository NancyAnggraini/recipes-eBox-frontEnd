import React from 'react';
import './index.css';

const RecipeIntro = ({ recipe }) => (
  <div className="recipeIntro-container">
    <div className="dish-photo">
      <img src={ recipe.photoUrl } alt={ recipe.name } width="350px" height="250px" />
    </div>
    <div className="recipeIntro-subContainer">
      <h4>Reference Link:</h4>
      <a href={ recipe.weblink }>{ recipe.weblink }</a>
      <br></br>
      <p>
        This easy to make banana bread is delicious warm or cold.
        Perfect for a quick breakfast or for an afternoon tea.
      </p>
    </div>
  </div>
);

export default RecipeIntro;

// <p>{ recipe.weblink }</p>
