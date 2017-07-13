import React from 'react';
import { Paper } from 'material-ui';
import { List } from 'material-ui';
import { CircularProgress } from 'material-ui';
import './index.css';
import RecipeListItem from '../../containers/RecipeListItem';
import GalleryList from '../../components/GalleryList';


const RecipeList = ( props ) => {
  if (!props.recipes.length) {
    return(
      <Paper className="recipe-gallery-container" zDepth={ 2 }>
        <List>
          <CircularProgress />
        </List>
        <CircularProgress />
      </Paper>
    );
  }

  return(
    <Paper className="recipe-gallery-container" zDepth={ 2 }>
      <List className="recipeList-container">
        {
          props.recipes.map(recipe =>
            <RecipeListItem key={ recipe.id } recipe={ recipe } currentUser={ props.currentUser } />
          )
        }
      </List>
      <GalleryList recipes={ props.recipes }/>
    </Paper>
  );
}

export default RecipeList;
