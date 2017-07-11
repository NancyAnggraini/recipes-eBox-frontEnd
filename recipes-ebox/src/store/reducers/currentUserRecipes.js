const currentUserRecipes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CURRENT_USER_RECIPES':
      let newState = [...action.currentUserRecipes];
      return newState;
    default:
      return state;
  }
}

export default currentUserRecipes;
