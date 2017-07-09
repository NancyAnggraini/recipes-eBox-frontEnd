import React from 'react';
import { Paper } from 'material-ui';
import { List } from 'material-ui';
import './index.css';
import RecipeListItem from '../../containers/RecipeListItem';
import GalleryList from '../../components/GalleryList';


const RecipeList = ({ recipes }) => {
  return(
    <Paper className="recipe-list-container" zDepth={ 2 }>
      <List>
        <RecipeListItem />
      </List>
      <GalleryList />
    </Paper>
  );
}

export default RecipeList;

// {
//   recipes.map(recipe => {
//     <RecipeListItem key={ recipe.id } recipe={ recipe.name } />
//   })
// }
