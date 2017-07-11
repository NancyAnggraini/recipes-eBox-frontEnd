const recipes = (state = [], action) => {
  let newState;
  switch (action.type) {
    case 'ADD_RECIPES':
      newState = [...action.recipes];
      return newState;
    case 'ADD_RECIPE':
      newState = [...state];
      newState.push(action.recipe);
      return newState;
    default:
      return state;
  }
}

export default recipes;
