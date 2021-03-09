import { toTitleCase } from "../../utils/utils";

import "./big-news-with-img.style.scss";
import placeholderImg from "../../assets/images/news-header-placeholder.jpg";

const BigNewsWithImg = () => {
  const category = "categoria";
  const title = "título da materia";

  return (
    <div className="big-news-with-img">
      <span className="fs-med fc-primary">{toTitleCase(category)}</span>
      <div className="img-box">
        <img src={placeholderImg} alt="placeholder" />
      </div>
      <h2 className="fs-big">{toTitleCase(title)}</h2>
    </div>
  );
};

export default BigNewsWithImg;
