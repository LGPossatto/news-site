import { Link } from "react-router-dom";
import { toTitleCase } from "../../utils/utils";

import "./header-big-news.style.scss";

const HeaderBigNews = () => {
  const category = "categoria";
  const title = "título da matéria";
  const body =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consectetur suscipit excepturi! Non explicabo doloribus quo repellat totam nemo veniam vitae consequatur dolore exercitationem est nam, rerum, suscipit voluptate molestiae!";

  return (
    <Link to="/" className="header-big-news">
      <span className="fs-med fc-primary">{toTitleCase(category)}</span>
      <h2 className="fs-biger fc-dark">{toTitleCase(title)}</h2>
      <p className="fs-big fc-dark">{body}</p>
    </Link>
  );
};

export default HeaderBigNews;
