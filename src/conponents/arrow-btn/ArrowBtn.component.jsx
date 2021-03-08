import { useState } from "react";
import PropTypes from "prop-types";

import "./arrow-btn.style.scss";

const ArrowBtn = ({ dir, moveCarousel }) => {
  const [canMove, setCanMove] = useState(true);

  return (
    <button
      className={`btn-${dir}`}
      onClick={() => {
        if (canMove) {
          moveCarousel(dir);
          setCanMove(false);

          setInterval(() => {
            setCanMove(true);
          }, 250);
        }
      }}
    ></button>
  );
};

ArrowBtn.propTypes = {
  dir: PropTypes.string.isRequired,
  moveCarousel: PropTypes.func.isRequired,
};

export default ArrowBtn;
