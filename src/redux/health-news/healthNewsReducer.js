import { GET_HEALTH_HEADLINES } from "../types";

const inicialState = {
  healthHeadlines: null,
};

const healthNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_HEALTH_HEADLINES:
      return { ...state, healthHeadlines: action.payload };
    default:
      return state;
  }
};

export default healthNewsReducer;
