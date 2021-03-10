import PropTypes from "prop-types";

import "./news-with-img.style.scss";
import placeholderImg from "../../assets/images/news-header-placeholder.jpg";

const NewsWithImg = ({ headline }) => {
  return (
    <div className="news-with-img grid grid-g-2 grid-gtc-3 grid-gar-150">
      <div className="img-box">
        <img src={headline.urlToImage || placeholderImg} alt="placeholder" />
      </div>
      <div className="news-with-img_text grid-c-s2">
        <span className="fs-med fc-primary">{headline.source.name}</span>
        <h2 className="fs-big">{headline.title}</h2>
      </div>
    </div>
  );
};

NewsWithImg.propTypes = {
  headline: PropTypes.object.isRequired,
};

export default NewsWithImg;
