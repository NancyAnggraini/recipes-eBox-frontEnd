const recipes = (state = [], action) => {
  let newState;
  switch (action.type) {
    case 'SELECT_RECIPES':
      newState = [...action.recipes];
      return newState;
    case 'SELECT_RECIPE':
      return [action.recipe];
    default:
      return state;
  }
}

export default recipes;
