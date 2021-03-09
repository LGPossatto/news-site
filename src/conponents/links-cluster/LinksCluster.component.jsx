import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./links-cluster.style.scss";

const LinksCluster = ({ links }) => {
  return (
    <div className="links-cluster">
      {links.map((link) => {
        return (
          <Link key={link.id} to={link.url}>
            <span className="fs-med fc-light">{link.text}</span>
          </Link>
        );
      })}
    </div>
  );
};

LinksCluster.propTypes = {
  links: PropTypes.array.isRequired,
};

export default LinksCluster;
