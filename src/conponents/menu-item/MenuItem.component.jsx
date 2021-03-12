import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./menu-item.style.scss";

const MenuItem = ({ text, category }) => {
  return (
    <Link to={`/${category}/0`} className="menu-item">
      <p className="fs-med fc-light">{text.toUpperCase()}</p>
    </Link>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default MenuItem;
