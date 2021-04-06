import { GET_BUSINESS_HEADLINES } from "../types";

const inicialState = {
  businessHeadlines: null,
};

const businessNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_BUSINESS_HEADLINES:
      return { ...state, businessHeadlines: action.payload };
    default:
      return state;
  }
};

export default businessNewsReducer;
