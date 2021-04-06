import { GET_TECHNOLOGY_HEADLINES } from "../types";
import { getData } from "../../utils/utils";

export const getTechnologyNews = async (dispatch) => {
  const data = await getData("technology");

  dispatch({ type: GET_TECHNOLOGY_HEADLINES, payload: data.articles });
};
