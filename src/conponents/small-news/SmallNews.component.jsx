import { Link } from "react-router-dom";
import { toTitleCase } from "../../utils/utils";

import "./small-news.style.scss";

const SmallNews = () => {
  const category = "categoria";
  const title = "título da matéria";

  return (
    <Link to="/" className="small-news">
      <span className="fs-med fc-primary">{toTitleCase(category)}</span>
      <h2 className="fs-med fc-dark">{toTitleCase(title)}</h2>
    </Link>
  );
};

export default SmallNews;
