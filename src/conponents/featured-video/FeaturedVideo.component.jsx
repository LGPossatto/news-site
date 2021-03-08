import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { toTitleCase } from "../../utils/utils";

import "./featured-video.style.scss";
import placeholderImg from "../../assets/images/news-header-placeholder.jpg";

const FeaturedVideo = ({ title, className }) => {
  return (
    <Link to="/" className={`featured-video ${className}`}>
      <div className="img-box">
        <img src={placeholderImg} alt="placeholder" />
      </div>
      <h2 className="fs-med fc-light">{toTitleCase(title)}</h2>
    </Link>
  );
};

FeaturedVideo.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default FeaturedVideo;
