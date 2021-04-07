import { GET_HEALTH_HEADLINES } from "../types";
import { staticNews } from "../../utils/utils";
import { ex_res_health } from "../../utils/ex_resp";

let inicialState = { healthHeadlines: null };
if (staticNews) {
  inicialState = {
    healthHeadlines: ex_res_health,
  };
}

const healthNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_HEALTH_HEADLINES:
      return { ...state, healthHeadlines: action.payload };
    default:
      return state;
  }
};

export default healthNewsReducer;
