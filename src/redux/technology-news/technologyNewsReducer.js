import { GET_TECHNOLOGY_HEADLINES } from "../types";

const inicialState = {
  technologyHeadlines: null,
};

const technologyNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_TECHNOLOGY_HEADLINES:
      return { ...state, technologyHeadlines: action.payload };
    default:
      return state;
  }
};

export default technologyNewsReducer;
