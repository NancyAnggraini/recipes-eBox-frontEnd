import React from 'react';
import { List } from 'material-ui';
import NewIngredient from '../NewIngredient';
import { CircularProgress } from 'material-ui';

const NewIngredientList = ({ ingredients }) => {
  if(ingredients === undefined) {
    return(
      <List>
        <CircularProgress />
      </List>
    );
  }

  return(
    <List>
      {
        ingredients.map((ingredient, index) => {
          return <NewIngredient key={ index } ingredient={ ingredient } />;
        })
      }
    </List>
  );
}

export default NewIngredientList;
