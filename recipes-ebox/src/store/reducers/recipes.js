const recipes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPES':
      let newState = [...action.recipes];
      return newState;
    default:
      return state;
  }
}

export default recipes;
