import React from 'react';
import './index.css';
import { List, ListItem } from 'material-ui/List';
import { CircularProgress } from 'material-ui';


const CookingSteps = ({ cookingSteps }) => {
  if (cookingSteps === undefined) {
    return(
      <div className="cookingSteps-container">
        <h3>CookingSteps:</h3>
        <List>
          <CircularProgress />
        </List>
      </div>
    );
  }

  return(
    <div className="cookingSteps-container">
      <h3>Cooking Steps:</h3>
      <List>
        {
          cookingSteps.map( (step, index) =>
            <ListItem className="list-item" key={ index } primaryText={ step } />
          )
        }
      </List>
    </div>
  );
}

export default CookingSteps;
