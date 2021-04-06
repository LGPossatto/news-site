import { useSelector } from "react-redux";

import "./main-content.style.scss";
import BigNews from "../big-news/BigNews.component";
import NewsCluster from "../news-cluster/NewsCluster.component";
import SmallNews from "../small-news/SmallNews.component";
import Spinner from "../spinner/Spinner.component";

const MainContent = () => {
  const topNews = useSelector((state) => state.topNews);
  const { topHeadlines } = topNews;

  return null;

  if (topHeadlines === null || topHeadlines === undefined) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div className="container">
        <div className="main-content">
          <BigNews headline={topHeadlines[3]} category="geral" id={3}></BigNews>
          <div className="main-content__with-img grid grid-g-2 grid-gtc-2">
            <NewsCluster
              headline1={topHeadlines[4]}
              category1="geral"
              id1={4}
              headline2={topHeadlines[5]}
              category2="geral"
              id2={5}
              headline3={topHeadlines[6]}
              category3="geral"
              id3={6}
            ></NewsCluster>
            <NewsCluster
              headline1={topHeadlines[7]}
              category1="geral"
              id1={7}
              headline2={topHeadlines[8]}
              category2="geral"
              id2={8}
              headline3={topHeadlines[9]}
              category3="geral"
              id3={9}
            ></NewsCluster>
          </div>
          <div className="main-content__without-img grid grid-g-2 grid-gtc-4">
            <SmallNews
              headline={topHeadlines[10]}
              category="geral"
              id={10}
            ></SmallNews>
            <SmallNews
              headline={topHeadlines[11]}
              category="geral"
              id={11}
            ></SmallNews>
            <SmallNews
              headline={topHeadlines[12]}
              category="geral"
              id={12}
            ></SmallNews>
            <SmallNews
              headline={topHeadlines[13]}
              category="geral"
              id={13}
            ></SmallNews>
            <SmallNews
              headline={topHeadlines[14]}
              category="geral"
              id={14}
            ></SmallNews>
            <SmallNews
              headline={topHeadlines[15]}
              category="geral"
              id={15}
            ></SmallNews>
            <SmallNews
              headline={topHeadlines[16]}
              category="geral"
              id={16}
            ></SmallNews>
            <SmallNews
              headline={topHeadlines[17]}
              category="geral"
              id={17}
            ></SmallNews>
          </div>
        </div>
      </div>
    );
  }
};

export default MainContent;
