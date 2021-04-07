import { GET_SPECIFIC_HEADLINES } from "../types";
import { ex_res_general } from "../../utils/ex_resp";

const inicialState = {
  specificHeadlines: ex_res_general || null,
};

const specificNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_SPECIFIC_HEADLINES:
      return { ...state, specificHeadlines: action.payload };
    default:
      return state;
  }
};

export default specificNewsReducer;
