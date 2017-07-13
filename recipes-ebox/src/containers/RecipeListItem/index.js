import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Avatar, ListItem } from 'material-ui';
import { blue500 } from 'material-ui/styles/colors';

class RecipeListItem extends Component {
  render() {
    if(this.props.currentUser === undefined) {
      return(
        <Link to={"/recipes/" + this.props.recipe.id } style={{ textDecoration: "none" }}>
          <ListItem
            className="list-item"
            leftAvatar={ <Avatar backgroundColor={ blue500 } /> }
            primaryText={ this.props.recipe.name }
            secondaryText={ 'by ' + this.props.recipe.recipeOwner }
            />
        </Link>
      );
    }

    return(
      <Link to={"/users/" + this.props.currentUser.id + "/recipes/" + this.props.recipe.id } style={{ textDecoration: "none" }}>
        <ListItem
          className="list-item"
          leftAvatar={ <Avatar backgroundColor={ blue500 } /> }
          primaryText={ this.props.recipe.name }
          secondaryText={ 'by ' + this.props.recipe.recipeOwner }
          />
      </Link>
    );
  }
}

export default RecipeListItem;
