import { GET_BUSINESS_HEADLINES } from "../types";
import { staticNews } from "../../utils/utils";
import { ex_res_business } from "../../utils/ex_resp";

let inicialState = { businessHeadlines: null };
if (staticNews) {
  inicialState = {
    businessHeadlines: ex_res_business,
  };
}

const businessNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_BUSINESS_HEADLINES:
      return { ...state, businessHeadlines: action.payload };
    default:
      return state;
  }
};

export default businessNewsReducer;
