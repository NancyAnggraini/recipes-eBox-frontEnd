import React from 'react';
import { ListItem } from 'material-ui';
import ActionLabelOutline from 'material-ui/svg-icons/action/label-outline';

const NewIngredient = ({ ingredient }) => {
  return(
    <ListItem
      className="list-item"
      primaryText={ ingredient }
      leftIcon={ <ActionLabelOutline /> }
      />
  );
}

export default NewIngredient;
