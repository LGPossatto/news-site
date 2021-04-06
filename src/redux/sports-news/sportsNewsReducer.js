import { GET_SPORTS_HEADLINES } from "../types";

const inicialState = {
  sportsHeadlines: null,
};

const sportsNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_SPORTS_HEADLINES:
      return { ...state, sportsHeadlines: action.payload };
    default:
      return state;
  }
};

export default sportsNewsReducer;
