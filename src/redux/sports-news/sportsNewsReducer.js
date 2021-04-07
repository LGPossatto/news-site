import { GET_SPORTS_HEADLINES } from "../types";
import { staticNews } from "../../utils/utils";
import { ex_res_sports } from "../../utils/ex_resp";

let inicialState = { sportsHeadlines: null };
if (staticNews) {
  inicialState = {
    sportsHeadlines: ex_res_sports,
  };
}

const sportsNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_SPORTS_HEADLINES:
      return { ...state, sportsHeadlines: action.payload };
    default:
      return state;
  }
};

export default sportsNewsReducer;
