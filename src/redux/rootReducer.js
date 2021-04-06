import { combineReducers } from "redux";

import topNewsReducer from "./top-news/topNewsReducer";
import businessNewsReducer from "./business-news/businessNewsReducer";
import entertainmentNewsReducer from "./entertainment-news/entertainmentNewsReducer";
import healthNewsReducer from "./health-news/healthNewsReducer";
import scienceNewsReducer from "./science-news/scienceNewsReducer";
import sportsNewsReducer from "./sports-news/sportsNewsReducer";
import technologyNewsReducer from "./technology-news/technologyNewsReducer";

export default combineReducers({
  topNews: topNewsReducer,
  BusinessNews: businessNewsReducer,
  entertainmentNews: entertainmentNewsReducer,
  healthNews: healthNewsReducer,
  scienceNews: scienceNewsReducer,
  sportsNews: sportsNewsReducer,
  technologyNews: technologyNewsReducer,
});
