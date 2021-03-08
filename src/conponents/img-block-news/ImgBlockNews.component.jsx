import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./img-block-news.style.scss";
import placeholderImg from "../../assets/images/news-header-placeholder.jpg";

const ImgBlockNews = ({ title, body }) => {
  return (
    <Link to="/" className="img-block-news">
      <div className="img-box">
        <img src={placeholderImg} alt="placeholder" />
      </div>
      <div className="img-block-news_text-box">
        <h2 className="fs-big fc-primary">{title}</h2>
        <p className="fs-med fc-light">{body}</p>
      </div>
    </Link>
  );
};

ImgBlockNews.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ImgBlockNews;
