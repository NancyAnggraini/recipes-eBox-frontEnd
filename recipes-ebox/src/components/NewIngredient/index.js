import React from 'react';
import { ListItem } from 'material-ui';

const NewIngredient = ({ ingredient }) => {
  return(
    <ListItem
      className="list-item"
      primaryText={ ingredient }
      />
  );
}

export default NewIngredient;
