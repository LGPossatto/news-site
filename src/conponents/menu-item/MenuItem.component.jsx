import PropTypes from "prop-types";

import "./menu-item.style.scss";

const MenuItem = ({ text }) => {
  return (
    <div className="menu-item">
      <p className="fs-med fc-light">{text}</p>
    </div>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MenuItem;
