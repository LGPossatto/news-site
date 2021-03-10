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

const newsReducer = (state, action) => {
  switch (action.type) {
    case GET_TOP_HEADLINES:
      return { ...state, topHeadlines: action.payload, topLoading: false };
    case GET_BUSINESS_HEADLINES:
      return { ...state, businessHeadlines: action.payload };
    case GET_ENTERTAINMENT_HEADLINES:
      return { ...state, entertainmentHeadlines: action.payload };
    case GET_HEALTH_HEADLINES:
      return { ...state, healthHeadlines: action.payload };
    case GET_SCIENCE_HEADLINES:
      return { ...state, scienceHeadlines: action.payload };
    case GET_SPORTS_HEADLINES:
      return { ...state, sportsHeadlines: action.payload };
    case GET_TECHNOLOGY_HEADLINES:
      return { ...state, technologyHeadlines: action.payload };
    case SET_CATEGORY_LOADING:
      return { ...state, categoryLoading: false };
    default:
      return state;
  }
};

export default newsReducer;
