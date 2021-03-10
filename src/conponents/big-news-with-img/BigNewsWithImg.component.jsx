import PropTypes from "prop-types";

import "./big-news-with-img.style.scss";
import placeholderImg from "../../assets/images/news-header-placeholder.jpg";

const BigNewsWithImg = ({ headline }) => {
  console.log(headline.urlToImage);

  return (
    <div className="big-news-with-img">
      <span className="fs-med fc-primary">{headline.source.name}</span>
      <div className="img-box">
        <img src={headline.urlToImage || placeholderImg} alt="placeholder" />
      </div>
      <h2 className="fs-big">{headline.title}</h2>
    </div>
  );
};

BigNewsWithImg.propTypes = {
  headline: PropTypes.object.isRequired,
};

export default BigNewsWithImg;
