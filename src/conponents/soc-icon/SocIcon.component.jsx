import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./soc-icon.style.scss";

const SocIcon = ({ size, color, icon, link }) => {
  return (
    <div className="soc-icon">
      <Link to={link}>
        <i className={`${size} ${color} ${icon}`}></i>
      </Link>
    </div>
  );
};

SocIcon.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocIcon;
