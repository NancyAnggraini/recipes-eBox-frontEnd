import React from 'react';
import { List } from 'material-ui';
import NewCookingStep from '../NewCookingStep';
import { CircularProgress } from 'material-ui';

const NewCookingStepList = ({ cookingSteps }) => {
  if(cookingSteps === undefined) {
    return(
      <List>
        <CircularProgress />
      </List>
    );
  }

  return(
    <List>
      {
        cookingSteps.map((step, index) => {
          return <NewCookingStep key={ index } step={ step } />;
        })
      }
    </List>
  );
}

export default NewCookingStepList;
