import { GET_ENTERTAINMENT_HEADLINES } from "../types";
import { staticNews } from "../../utils/utils";
import { ex_res_entertainment } from "../../utils/ex_resp";

let inicialState = { entertainmentHeadlines: null };
if (staticNews) {
  inicialState = {
    entertainmentHeadlines: ex_res_entertainment,
  };
}

const entertainmentNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_ENTERTAINMENT_HEADLINES:
      return { ...state, entertainmentHeadlines: action.payload };
    default:
      return state;
  }
};

export default entertainmentNewsReducer;
