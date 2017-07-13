const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CURRENT_USER':
      let newState = {...action.currentUser};
      return newState;
    default:
      return state;
  }
}

export default currentUser;
