import { GET_BUSINESS_HEADLINES } from "../types";
import { getData } from "../../utils/utils";

export const getBusinessNews = async (dispatch) => {
  const data = await getData("business");

  dispatch({ type: GET_BUSINESS_HEADLINES, payload: data.articles });
};
