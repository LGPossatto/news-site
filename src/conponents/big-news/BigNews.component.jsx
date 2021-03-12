import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./big-news.style.scss";

const BigNews = ({ headline, category, id }) => {
  return (
    <Link to={`/${category}/noticia/${id}`} className="header-big-news">
      <span className="fs-med fc-primary">{headline.source.name}</span>
      <h2 className="fs-biger fc-dark">{headline.title}</h2>
      {headline.description ? (
        <p className="fs-big fc-dark">{headline.description}</p>
      ) : null}
    </Link>
  );
};

BigNews.propTypes = {
  headline: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BigNews;
