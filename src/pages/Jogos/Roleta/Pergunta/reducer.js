const initialState = {
    con: null,
    player : null
};
  
  const conReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CON":
        return {
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default conReducer;