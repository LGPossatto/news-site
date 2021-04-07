import { combineReducers } from "redux";

import topNewsReducer from "./top-news/topNewsReducer";
import businessNewsReducer from "./business-news/businessNewsReducer";
import entertainmentNewsReducer from "./entertainment-news/entertainmentNewsReducer";
import healthNewsReducer from "./health-news/healthNewsReducer";
import scienceNewsReducer from "./science-news/scienceNewsReducer";
import sportsNewsReducer from "./sports-news/sportsNewsReducer";
import technologyNewsReducer from "./technology-news/technologyNewsReducer";
import specificNewsReducer from "./specific-news/specificNewsReducer";

export default combineReducers({
  topNews: topNewsReducer,
  businessNews: businessNewsReducer,
  entertainmentNews: entertainmentNewsReducer,
  healthNews: healthNewsReducer,
  scienceNews: scienceNewsReducer,
  sportsNews: sportsNewsReducer,
  technologyNews: technologyNewsReducer,
  specificNews: specificNewsReducer,
});
