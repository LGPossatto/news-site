import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./big-news-with-img.style.scss";
import placeholderImg from "../../assets/images/news-header-placeholder.jpg";

const BigNewsWithImg = ({ headline, category, id }) => {
  return (
    <Link to={`/${category}/noticia/${id}`} className="big-news-with-img">
      <span className="fs-med fc-primary">{headline.source.name}</span>
      <div className="img-box">
        <img
          src={headline.urlToImage || placeholderImg}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://lh3.googleusercontent.com/proxy/_aBh3AoSLUIgy8Vh8xG0Y9kvwJeDEJEramPxZW6Czmd80h80ckTYWSCdFM9K7uVh-vfhb21Nh-Y0AY6wxgLbqJG-qz2cuGZd8Q";
          }}
          alt="imagem da notícia"
        />
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
