import React from 'react';
import './index.css';

const RecipeIntro = ({ recipe }) => (
  <div className="recipeIntro-container">
    <img src={ recipe.photoUrl } alt={ recipe.name } width="350px" height="250px" />
    <div className="recipeIntro-subContainer">
      <p>{'Reference Link: ' + recipe.weblink }</p>
      <p>
        Gummi bears ice cream brownie muffin candy I love tiramisu.
        I love dessert gummi bears macaroon chocolate pie.
        I love pastry gummi bears sweet pastry.
        Fruitcake gingerbread marshmallow danish liquorice I love oat cake pie.
      </p>
    </div>
  </div>
);

export default RecipeIntro;
