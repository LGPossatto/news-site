import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./small-news.style.scss";

const SmallNews = ({ headline, category, id }) => {
  return (
    <Link to={`/${category}/${id}`} className="small-news">
      <span className="fs-med fc-primary">{headline.source.name}</span>
      <h2 className="fs-med fc-dark">{headline.title}</h2>
    </Link>
  );
};

SmallNews.propTypes = {
  headline: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default SmallNews;
