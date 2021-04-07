import { GET_BUSINESS_HEADLINES } from "../types";
import { ex_res_business } from "../../utils/ex_resp";

const inicialState = {
  businessHeadlines: ex_res_business || null,
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
