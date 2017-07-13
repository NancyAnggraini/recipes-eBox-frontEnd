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
        Gummi bears ice cream brownie muffin candy I love tiramisu.
        I love dessert gummi bears macaroon chocolate pie.
        I love pastry gummi bears sweet pastry.
      </p>
    </div>
  </div>
);

export default RecipeIntro;

// <p>{ recipe.weblink }</p>
