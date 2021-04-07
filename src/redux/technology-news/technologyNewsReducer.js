import { GET_TECHNOLOGY_HEADLINES } from "../types";
import { ex_res_technology } from "../../utils/ex_resp";

const inicialState = {
  technologyHeadlines: ex_res_technology || null,
};

const technologyNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_TECHNOLOGY_HEADLINES:
      return { ...state, technologyHeadlines: action.payload };
    default:
      return state;
  }
};

export default technologyNewsReducer;
