import { GET_TOP_HEADLINES } from "../types";
import { getData } from "../../utils/utils";

export const getTopNews = async (dispatch) => {
  const data = await getData();

  dispatch({ type: GET_TOP_HEADLINES, payload: data.articles });
};
