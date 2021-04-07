import { GET_SPORTS_HEADLINES } from "../types";
import { ex_res_sports } from "../../utils/ex_resp";

const inicialState = {
  sportsHeadlines: ex_res_sports || null,
};

const sportsNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_SPORTS_HEADLINES:
      return { ...state, sportsHeadlines: action.payload };
    default:
      return state;
  }
};

export default sportsNewsReducer;
