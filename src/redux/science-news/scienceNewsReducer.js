import { GET_SCIENCE_HEADLINES } from "../types";

const inicialState = {
  scienceHeadlines: null,
};

const scienceNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_SCIENCE_HEADLINES:
      return { ...state, scienceHeadlines: action.payload };
    default:
      return state;
  }
};

export default scienceNewsReducer;
