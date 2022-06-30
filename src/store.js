function reducer(state = { data: [] }, action) {
    switch (action.type) {
      case "SET_DATA":
        return {
          data: [...state.data, action.currentData]
        };
        case "REMOVE_DATA":
        return {
          data: action.currentData
        };
      default:
        return state;
    }
  }
  
  export default reducer;