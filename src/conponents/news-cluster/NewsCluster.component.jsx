import "./news-cluster.style.scss";
import NewsWithImg from "../news-with-img/NewsWithImg.component";

const NewsCluster = () => {
  return (
    <div className="news-cluster grid grid-g-2">
      <NewsWithImg></NewsWithImg>
      <NewsWithImg></NewsWithImg>
      <NewsWithImg></NewsWithImg>
    </div>
  );
};

export default NewsCluster;
