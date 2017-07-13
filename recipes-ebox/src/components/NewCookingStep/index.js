import React from 'react';
import { ListItem } from 'material-ui';
import ActionLabelOutline from 'material-ui/svg-icons/action/label-outline';

const NewCookingStep = ({ step }) => {
  return(
    <ListItem
      className="list-item"
      primaryText={ step }
      leftIcon={ <ActionLabelOutline /> }
      />
  );
}

export default NewCookingStep;
