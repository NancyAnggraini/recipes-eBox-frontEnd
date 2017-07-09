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
