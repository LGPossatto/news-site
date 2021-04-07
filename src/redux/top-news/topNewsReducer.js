import { GET_TOP_HEADLINES } from "../types";
import { ex_res_general } from "../../utils/ex_resp";

const inicialState = {
  topHeadlines: ex_res_general || null,
};

const topNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_TOP_HEADLINES:
      return { ...state, topHeadlines: action.payload };
    default:
      return state;
  }
};

export default topNewsReducer;
