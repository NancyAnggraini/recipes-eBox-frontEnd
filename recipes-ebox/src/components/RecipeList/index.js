import React from 'react';
import { Paper } from 'material-ui';
import { List } from 'material-ui';
import { CircularProgress } from 'material-ui';
import './index.css';
import RecipeListItem from '../../containers/RecipeListItem';
import GalleryList from '../../components/GalleryList';


const RecipeList = ({ recipes }) => {
  console.log('in da recipeList');
  if (!recipes.length) {
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
          recipes.map(recipe =>
            <RecipeListItem key={ recipe.id } recipe={ recipe } />
          )
        }
      </List>
      <GalleryList recipes={ recipes }/>
    </Paper>
  );
}

export default RecipeList;
