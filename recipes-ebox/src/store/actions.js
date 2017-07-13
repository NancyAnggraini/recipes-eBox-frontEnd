export const selectRecipes = (recipes) => ({
  type: 'SELECT_RECIPES',
  recipes
})

export const fetchRecipes = () => (dispatch, getState) => {
  fetch('http://localhost:8080/recipes')
    .then( response => response.json() )
    .then( recipes => {
      dispatch(selectRecipes(recipes));
    })
}

export const selectRecipe = (recipe) => ({
  type: 'SELECT_RECIPE',
  recipe
})

export const fetchRecipe = (recipeId) => (dispatch, getState) => {
  fetch(`http://localhost:8080/recipes/${ recipeId }`)
    .then( response => response.json() )
    .then( recipe => {
      dispatch(selectRecipe(recipe));
    })
}

export const fetchSearchedRecipes = (searchedBy) => (dispatch, getState) => {
  fetch(`http://localhost:8080/recipes/search?query=${ searchedBy }`)
    .then( response => response.json() )
    .then( recipes => {
      dispatch(selectRecipes(recipes));
    })
}

export const selectCurrentUser = (currentUser) => ({
  type: 'SELECT_CURRENT_USER',
  currentUser
})

export const fetchCurrentUser = (userId) => (dispatch, getState) => {
  fetch(`http://localhost:8080/users/${ userId }`)
    .then( response => response.json() )
    .then( currentUser => {
      dispatch(selectCurrentUser(currentUser));
    })
}

export const selectCurrentUserRecipes = (currentUserRecipes) => ({
  type: 'SELECT_CURRENT_USER_RECIPES',
  currentUserRecipes
})

export const fetchCurrentUserRecipes = (userId) => (dispatch, getState) => {
  fetch(`http://localhost:8080/users/${ userId }/recipes`)
    .then( response => response.json() )
    .then( currentUserRecipes => {
      dispatch(selectCurrentUserRecipes(currentUserRecipes));
    })
}
