import { GET_SPECIFIC_HEADLINES } from "../types";
import { staticNews } from "../../utils/utils";
import { ex_res_general } from "../../utils/ex_resp";

let inicialState = { specificHeadlines: null };
if (staticNews) {
  inicialState = {
    specificHeadlines: ex_res_general,
  };
}

const specificNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_SPECIFIC_HEADLINES:
      return { ...state, specificHeadlines: action.payload };
    default:
      return state;
  }
};

export default specificNewsReducer;
