import "./main-content.style.scss";
import HeaderBigNews from "../header-big-news/HeaderBigNews.component";
import NewsCluster from "../news-cluster/NewsCluster.component";

const MainContent = () => {
  return (
    <div className="main-content">
      <HeaderBigNews></HeaderBigNews>
      <div className="grid grid-g-2 grid-gtc-2">
        <NewsCluster></NewsCluster>
        <NewsCluster></NewsCluster>
      </div>
    </div>
  );
};

export default MainContent;
