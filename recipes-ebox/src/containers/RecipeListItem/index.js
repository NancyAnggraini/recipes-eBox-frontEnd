import React, { Component } from 'react';
import './index.css';
import { Avatar, ListItem } from 'material-ui';
import { blue500 } from 'material-ui/styles/colors';

class RecipeListItem extends Component {
  render() {
    console.log('in da RecipeListItem');
    return(
      <ListItem
        className="list-item"
        leftAvatar={ <Avatar backgroundColor={ blue500 } /> }
        primaryText={ this.props.recipe.name }
        secondaryText={ 'by ' + this.props.recipe.recipeOwner }
      />
    );
  }
}

export default RecipeListItem;
