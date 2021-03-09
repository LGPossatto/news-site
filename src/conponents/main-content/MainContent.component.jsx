import "./main-content.style.scss";
import BigNews from "../big-news/BigNews.component";
import NewsCluster from "../news-cluster/NewsCluster.component";
import SmallNews from "../small-news/SmallNews.component";

const MainContent = () => {
  return (
    <div className="container">
      <div className="main-content">
        <BigNews></BigNews>
        <div className="main-content__with-img grid grid-g-2 grid-gtc-2">
          <NewsCluster></NewsCluster>
          <NewsCluster></NewsCluster>
        </div>
        <div className="main-content__without-img grid grid-g-2 grid-gtc-4">
          <SmallNews></SmallNews>
          <SmallNews></SmallNews>
          <SmallNews></SmallNews>
          <SmallNews></SmallNews>
          <SmallNews></SmallNews>
          <SmallNews></SmallNews>
          <SmallNews></SmallNews>
          <SmallNews></SmallNews>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
