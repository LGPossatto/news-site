import { GET_SCIENCE_HEADLINES } from "../types";
import { getData } from "../../utils/utils";

export const getScienceNews = async (dispatch) => {
  const data = await getData("science");

  dispatch({ type: GET_SCIENCE_HEADLINES, payload: data.articles });
};
