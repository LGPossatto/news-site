import { GET_SCIENCE_HEADLINES } from "../types";
import { ex_res_science } from "../../utils/ex_resp";

const inicialState = {
  scienceHeadlines: ex_res_science || null,
};

const scienceNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_SCIENCE_HEADLINES:
      return { ...state, scienceHeadlines: action.payload };
    default:
      return state;
  }
};

export default scienceNewsReducer;
