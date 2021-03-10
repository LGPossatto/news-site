import { useContext } from "react";

import NewsContext from "../../context/news/newsContext";

import "./main-content.style.scss";
import BigNews from "../big-news/BigNews.component";
import NewsCluster from "../news-cluster/NewsCluster.component";
import SmallNews from "../small-news/SmallNews.component";
import Spinner from "../spinner/Spinner.component";

const MainContent = () => {
  const { topLoading, topHeadlines } = useContext(NewsContext);

  return null;

  if (topLoading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div className="container">
        <div className="main-content">
          <BigNews headline={topHeadlines[3]}></BigNews>
          <div className="main-content__with-img grid grid-g-2 grid-gtc-2">
            <NewsCluster
              headline1={topHeadlines[4]}
              headline2={topHeadlines[5]}
              headline3={topHeadlines[6]}
            ></NewsCluster>
            <NewsCluster
              headline1={topHeadlines[7]}
              headline2={topHeadlines[8]}
              headline3={topHeadlines[9]}
            ></NewsCluster>
          </div>
          <div className="main-content__without-img grid grid-g-2 grid-gtc-4">
            <SmallNews headline={topHeadlines[10]}></SmallNews>
            <SmallNews headline={topHeadlines[11]}></SmallNews>
            <SmallNews headline={topHeadlines[12]}></SmallNews>
            <SmallNews headline={topHeadlines[13]}></SmallNews>
            <SmallNews headline={topHeadlines[14]}></SmallNews>
            <SmallNews headline={topHeadlines[15]}></SmallNews>
            <SmallNews headline={topHeadlines[16]}></SmallNews>
            <SmallNews headline={topHeadlines[17]}></SmallNews>
          </div>
        </div>
      </div>
    );
  }
};

export default MainContent;
