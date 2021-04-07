import { GET_HEALTH_HEADLINES } from "../types";
import { ex_res_health } from "../../utils/ex_resp";

const inicialState = {
  healthHeadlines: ex_res_health || null,
};

const healthNewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_HEALTH_HEADLINES:
      return { ...state, healthHeadlines: action.payload };
    default:
      return state;
  }
};

export default healthNewsReducer;
