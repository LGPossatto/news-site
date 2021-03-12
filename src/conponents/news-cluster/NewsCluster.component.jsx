import PropTypes from "prop-types";

import "./news-cluster.style.scss";
import NewsWithImg from "../news-with-img/NewsWithImg.component";

const NewsCluster = ({
  headline1,
  id1,
  category1,
  headline2,
  category2,
  id2,
  headline3,
  category3,
  id3,
}) => {
  return (
    <div className="news-cluster grid grid-g-2">
      <NewsWithImg
        headline={headline1}
        category={category1}
        id={id1}
      ></NewsWithImg>
      <NewsWithImg
        headline={headline2}
        category={category2}
        id={id2}
      ></NewsWithImg>
      <NewsWithImg
        headline={headline3}
        category={category3}
        id={id3}
      ></NewsWithImg>
    </div>
  );
};

NewsCluster.propTypes = {
  headline1: PropTypes.object.isRequired,
  category1: PropTypes.string.isRequired,
  id1: PropTypes.number.isRequired,
  headline2: PropTypes.object.isRequired,
  category2: PropTypes.string.isRequired,
  id2: PropTypes.number.isRequired,
  headline3: PropTypes.object.isRequired,
  category3: PropTypes.string.isRequired,
  id3: PropTypes.number.isRequired,
};

export default NewsCluster;
