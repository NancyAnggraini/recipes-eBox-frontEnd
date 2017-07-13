import React from 'react';
import './index.css';
import { List, ListItem } from 'material-ui/List';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
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
            <ListItem
              className="cookingStep-item"
              key={ index }
              primaryText={ step }
              leftIcon={ <ActionAssignment /> }
              />
          )
        }
      </List>
    </div>
  );
}

export default CookingSteps;
