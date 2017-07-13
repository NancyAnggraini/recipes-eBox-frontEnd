import React from 'react';
import './index.css';
import { List, ListItem } from 'material-ui/List';
import ActionLabel from 'material-ui/svg-icons/action/label';
import { CircularProgress } from 'material-ui';

const Ingredients = ({ ingredients }) => {
  if (ingredients === undefined) {
    return(
      <div className="ingredients-container">
        <h3>Ingredients:</h3>
        <List>
          <CircularProgress />
        </List>
      </div>
    );
  }

  return(
    <div className="ingredients-container">
      <h3>Ingredients:</h3>
      <List>
        {
          ingredients.map( (ingredient, index) =>
            <ListItem
              className="ingredient-list-item"
              key={ index }
              primaryText={ ingredient }
              leftIcon={ <ActionLabel /> }
              />
          )
        }
      </List>
    </div>
  );
}

export default Ingredients;
