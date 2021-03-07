import { toTitleCase } from "../../utils/utils";

import "./news-with-img.style.scss";
import placeholderImg from "../../assets/images/news-header-placeholder.jpg";

const NewsWithImg = () => {
  const category = "categoria";
  const title = "título da materia";

  return (
    <div className="news-with-img grid grid-g-2 grid-gtc-3 grid-gar-150">
      <div className="img-box">
        <img src={placeholderImg} alt="placeholder" />
      </div>
      <div className="news-with-img_text grid-c-s2">
        <span className="fs-med fc-primary">{toTitleCase(category)}</span>
        <h2 className="fs-big">{toTitleCase(title)}</h2>
      </div>
    </div>
  );
};

export default NewsWithImg;
