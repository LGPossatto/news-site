import { GET_SPORTS_HEADLINES } from "../types";
import { getData } from "../../utils/utils";

export const getSportsNews = async (dispatch) => {
  const data = await getData("sports");

  dispatch({ type: GET_SPORTS_HEADLINES, payload: data.articles });
};
