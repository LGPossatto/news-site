import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./img-block-news.style.scss";
import placeholderImg from "../../assets/images/news-header-placeholder.jpg";

const ImgBlockNews = ({ headline, category, id, className }) => {
  return (
    <Link to={`/${category}/${id}`} className={`img-block-news ${className}`}>
      <div className="img-box">
        <img src={headline.urlToImage || placeholderImg} alt="placeholder" />
      </div>
      <div className="img-block-news_text-box">
        <h2 className="fs-big fc-primary">{headline.title}</h2>
        {headline.description ? (
          <p className="fs-med fc-light">{headline.description}</p>
        ) : null}
      </div>
    </Link>
  );
};

ImgBlockNews.propTypes = {
  headline: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ImgBlockNews;
