import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./menu-item.style.scss";

const MenuItem = ({ text }) => {
  return (
    <Link to="/" className="menu-item">
      <p className="fs-med fc-light">{text.toUpperCase()}</p>
    </Link>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MenuItem;
