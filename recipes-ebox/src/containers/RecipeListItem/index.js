import React, { Component } from 'react';
import './index.css';
import { Avatar, ListItem } from 'material-ui';
import { blue500 } from 'material-ui/styles/colors';

class RecipeListItem extends Component {
  render() {
    return(
      <ListItem
        className="list-item"
        leftAvatar={ <Avatar backgroundColor={ blue500 } /> }
        primaryText={ "Recipe Name" }
        secondaryText="recipe owner"
      />
    );
  }
}

export default RecipeListItem;
