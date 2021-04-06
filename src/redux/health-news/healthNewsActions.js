import { GET_HEALTH_HEADLINES } from "../types";
import { getData } from "../../utils/utils";

export const getHealthNews = async (dispatch) => {
  const data = await getData("health");

  dispatch({ type: GET_HEALTH_HEADLINES, payload: data.articles });
};
