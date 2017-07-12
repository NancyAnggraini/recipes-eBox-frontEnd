import React from 'react';
import { ListItem } from 'material-ui';

const NewCookingStep = ({ step }) => {
  return(
    <ListItem
      className="list-item"
      primaryText={ step }
      />
  );
}

export default NewCookingStep;
