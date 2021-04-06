import { GET_ENTERTAINMENT_HEADLINES } from "../types";

const inicialState = {
  entertainmentHeadlines: null,
};

const entertainmentNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_ENTERTAINMENT_HEADLINES:
      return { ...state, entertainmentHeadlines: action.payload };
    default:
      return state;
  }
};

export default entertainmentNewsReducer;
