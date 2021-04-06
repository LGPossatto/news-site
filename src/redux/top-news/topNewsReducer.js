import { GET_TOP_HEADLINES } from "../types";

const inicialState = {
  topHeadlines: null,
};

const topNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_TOP_HEADLINES:
      return { ...state, topHeadlines: action.payload };
    default:
      return state;
  }
};

export default topNewsReducer;
