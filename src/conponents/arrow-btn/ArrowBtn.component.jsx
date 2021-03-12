import { useState } from "react";
import PropTypes from "prop-types";

import "./arrow-btn.style.scss";

const ArrowBtn = ({ dir, handleClick, light }) => {
  const [canMove, setCanMove] = useState(true);

  return (
    <button
      className={`btn-${dir} ${light && `btn-light btn-light-${dir}`}`}
      onClick={() => {
        if (canMove && handleClick) {
          handleClick(dir);
          setCanMove(false);

          setTimeout(() => {
            setCanMove(true);
          }, 250);
        }
      }}
    ></button>
  );
};

ArrowBtn.propTypes = {
  dir: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  light: PropTypes.string,
};

export default ArrowBtn;
