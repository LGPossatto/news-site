import { GET_TECHNOLOGY_HEADLINES } from "../types";
import { staticNews } from "../../utils/utils";
import { ex_res_technology } from "../../utils/ex_resp";

let inicialState = { technologyHeadlines: null };
if (staticNews) {
  inicialState = {
    technologyHeadlines: ex_res_technology,
  };
}

const technologyNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_TECHNOLOGY_HEADLINES:
      return { ...state, technologyHeadlines: action.payload };
    default:
      return state;
  }
};

export default technologyNewsReducer;
