import { GET_SCIENCE_HEADLINES } from "../types";
import { staticNews } from "../../utils/utils";
import { ex_res_science } from "../../utils/ex_resp";

let inicialState = { scienceHeadlines: null };
if (staticNews) {
  inicialState = {
    scienceHeadlines: ex_res_science,
  };
}

const scienceNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_SCIENCE_HEADLINES:
      return { ...state, scienceHeadlines: action.payload };
    default:
      return state;
  }
};

export default scienceNewsReducer;
