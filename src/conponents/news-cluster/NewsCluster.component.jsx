import PropTypes from "prop-types";

import "./news-cluster.style.scss";
import NewsWithImg from "../news-with-img/NewsWithImg.component";

const NewsCluster = ({ headline1, headline2, headline3 }) => {
  return (
    <div className="news-cluster grid grid-g-2">
      <NewsWithImg headline={headline1}></NewsWithImg>
      <NewsWithImg headline={headline2}></NewsWithImg>
      <NewsWithImg headline={headline3}></NewsWithImg>
    </div>
  );
};

NewsCluster.propTypes = {
  headline1: PropTypes.object.isRequired,
  headline2: PropTypes.object.isRequired,
  headline3: PropTypes.object.isRequired,
};

export default NewsCluster;
