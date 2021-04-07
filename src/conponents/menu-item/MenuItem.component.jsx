import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./menu-item.style.scss";

const MenuItem = ({ text, category, setShowMenu }) => {
  return (
    <Link
      to={`/${category}/0`}
      className="menu-item"
      onClick={() => {
        if (setShowMenu) {
          setShowMenu(false);
        }
      }}
    >
      <p className="fs-med fc-light">{text.toUpperCase()}</p>
    </Link>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setShowMenu: PropTypes.func,
};

export default MenuItem;
