import { GET_SPECIFIC_HEADLINES } from "../types";
import { getData } from "../../utils/utils";

export const getSpecificNews = (dispatch) => async (search) => {
  const data = await getData("", search);

  //dispatch({ type: GET_SPECIFIC_HEADLINES, payload: data.articles });
};
