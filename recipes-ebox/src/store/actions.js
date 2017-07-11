export const addRecipes = (recipes) => ({
  type: 'ADD_RECIPES',
  recipes
})

export const fetchRecipes = () => (dispatch, getState) => {
  fetch('http://localhost:8080/recipes')
    .then( response => response.json() )
    .then( recipes => {
      dispatch(addRecipes(recipes));
    })
}

export const fetchSearchedRecipes = (searchedBy) => (dispatch, getState) => {
  fetch(`http://localhost:8080/recipes/search?query=${ searchedBy }`)
    .then( response => response.json() )
    .then( recipes => {
      dispatch(addRecipes(recipes));
    })
}

export const addCurrentUser = (currentUser) => ({
  type: 'ADD_CURRENT_USER',
  currentUser
})

export const fetchCurrentUser = (userId) => (dispatch, getState) => {
  fetch(`http://localhost:8080/users/${ userId }`)
    .then( response => response.json() )
    .then( currentUser => {
      dispatch(addCurrentUser(currentUser));
    })
}

export const addCurrentUserRecipes = (currentUserRecipes) => ({
  type: 'ADD_CURRENT_USER_RECIPES',
  currentUserRecipes
})

export const fetchCurrentUserRecipes = (userId) => (dispatch, getState) => {
  fetch(`http://localhost:8080/users/${ userId }/recipes`)
    .then( response => response.json() )
    .then( currentUserRecipes => {
      dispatch(addCurrentUserRecipes(currentUserRecipes));
    })
}
