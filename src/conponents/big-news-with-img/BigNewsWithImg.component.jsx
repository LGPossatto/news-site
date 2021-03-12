import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./big-news-with-img.style.scss";
import placeholderImg from "../../assets/images/news-header-placeholder.jpg";

const BigNewsWithImg = ({ headline, category, id }) => {
  console.log(headline.urlToImage);

  return (
    <Link to={`/${category}/${id}`} className="big-news-with-img">
      <span className="fs-med fc-primary">{headline.source.name}</span>
      <div className="img-box">
        <img src={headline.urlToImage || placeholderImg} alt="placeholder" />
      </div>
      <h2 className="fs-big">{headline.title}</h2>
    </Link>
  );
};

BigNewsWithImg.propTypes = {
  headline: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BigNewsWithImg;
