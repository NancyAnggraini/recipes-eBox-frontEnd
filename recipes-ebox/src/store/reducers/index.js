import { combineReducers } from 'redux';
import recipes from './recipes';
import currentUser from './currentUser';
import currentUserRecipes from './currentUserRecipes';

export default combineReducers ({
  currentUser,
  currentUserRecipes,
  recipes,
})
