import { GET_ENTERTAINMENT_HEADLINES } from "../types";
import { ex_res_entertainment } from "../../utils/ex_resp";

const inicialState = {
  entertainmentHeadlines: ex_res_entertainment || null,
};

const entertainmentNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_ENTERTAINMENT_HEADLINES:
      return { ...state, entertainmentHeadlines: action.payload };
    default:
      return state;
  }
};

export default entertainmentNewsReducer;
