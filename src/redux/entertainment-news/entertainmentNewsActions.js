import { GET_ENTERTAINMENT_HEADLINES } from "../types";
import { getData } from "../../utils/utils";

export const getEntertainmentsNews = async (dispatch) => {
  const data = await getData("entertainment");

  dispatch({ type: GET_ENTERTAINMENT_HEADLINES, payload: data.articles });
};
