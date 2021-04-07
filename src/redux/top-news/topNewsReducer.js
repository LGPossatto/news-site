import { GET_TOP_HEADLINES } from "../types";
import { staticNews } from "../../utils/utils";
import { ex_res_general } from "../../utils/ex_resp";

let inicialState = { topHeadlines: null };
if (staticNews) {
  inicialState = {
    topHeadlines: ex_res_general,
  };
}

const topNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_TOP_HEADLINES:
      return { ...state, topHeadlines: action.payload };
    default:
      return state;
  }
};

export default topNewsReducer;
