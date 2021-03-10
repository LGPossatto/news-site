import { useReducer } from "react";

import NewsContext from "./newsContext";
import NewsReducer from "./newsReducer";
import {
  GET_TOP_HEADLINES,
  GET_BUSINESS_HEADLINES,
  GET_ENTERTAINMENT_HEADLINES,
  GET_HEALTH_HEADLINES,
  GET_SCIENCE_HEADLINES,
  GET_SPORTS_HEADLINES,
  GET_TECHNOLOGY_HEADLINES,
  SET_CATEGORY_LOADING,
} from "../types";

const NewsState = (props) => {
  const initialState = {
    topLoading: true,
    topHeadlines: [],
    categoryLoading: true,
    businessHeadlines: [],
    entertainmentHeadlines: [],
    healthHeadlines: [],
    scienceHeadlines: [],
    sportsHeadlines: [],
    technologyHeadlines: [],
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // get data
  const getData = async (category = "") => {
    let categoryUrl = "";
    if (category !== "") {
      categoryUrl = `&category=${category}`;
    }

    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=br${categoryUrl}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
    );
    const data = await res.json();

    return data;
  };

  // get top headlines
  const getTopHeadlines = async () => {
    const data = await getData();

    dispatch({ type: GET_TOP_HEADLINES, payload: data.articles });
  };

  // get business headlines
  const getBusinessHeadlines = async () => {
    const data = await getData("business");

    dispatch({ type: GET_BUSINESS_HEADLINES, payload: data.articles });
  };

  // get entertainment headlines
  const getEntertainmentHeadlines = async () => {
    const data = await getData("entertainment");

    dispatch({ type: GET_ENTERTAINMENT_HEADLINES, payload: data.articles });
  };

  // get health headlines
  const getHealthHeadlines = async () => {
    const data = await getData("health");

    dispatch({ type: GET_HEALTH_HEADLINES, payload: data.articles });
  };

  // get science headlines
  const getScienceHeadlines = async () => {
    const data = await getData("science");

    dispatch({ type: GET_SCIENCE_HEADLINES, payload: data.articles });
  };

  // get sports headlines
  const getSportsHeadlines = async () => {
    const data = await getData("sports");

    dispatch({ type: GET_SPORTS_HEADLINES, payload: data.articles });
  };

  // get technology headlines
  const getTechnologyHeadlines = async () => {
    const data = await getData("technology");

    dispatch({ type: GET_TECHNOLOGY_HEADLINES, payload: data.articles });
  };

  // setCategoryLoading
  const setCategoryLoading = () => {
    dispatch({ type: SET_CATEGORY_LOADING });
  };

  // get all headlines
  const getAllHeadlines = async () => {
    getTopHeadlines();

    await getBusinessHeadlines();
    await getEntertainmentHeadlines();
    await getHealthHeadlines();
    await getScienceHeadlines();
    await getSportsHeadlines();
    await getTechnologyHeadlines();
    setCategoryLoading();
  };

  return (
    <NewsContext.Provider
      value={{
        topLoading: state.topLoading,
        topHeadlines: state.topHeadlines,
        categoryLoading: state.categoryLoading,
        businessHeadlines: state.businessHeadlines,
        entertainmentHeadlines: state.entertainmentHeadlines,
        healthHeadlines: state.healthHeadlines,
        scienceHeadlines: state.scienceHeadlines,
        sportsHeadlines: state.sportsHeadlines,
        technologyHeadlines: state.technologyHeadlines,
        getAllHeadlines,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
