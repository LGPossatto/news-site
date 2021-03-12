import PropTypes from "prop-types";

import { toTitleCase } from "../../utils/utils";

import "./category-news.style.scss";
import BigNewsWithImg from "../big-news-with-img/BigNewsWithImg.component";
import SmallNews from "../small-news/SmallNews.component";

const CategoryNews = ({ categoryHeadline, category, categoryTitle }) => {
  return (
    <div className="category-news">
      <h3 className="fs-biger fc-primary">{toTitleCase(categoryTitle)}</h3>
      <BigNewsWithImg
        headline={categoryHeadline[0]}
        category={category}
        id={0}
      ></BigNewsWithImg>
      <div className="category-news__pad">
        <SmallNews
          headline={categoryHeadline[1]}
          category={category}
          id={1}
        ></SmallNews>
      </div>
      <div className="category-news__pad">
        <SmallNews
          headline={categoryHeadline[2]}
          category={category}
          id={2}
        ></SmallNews>
      </div>
      <div className="category-news__pad">
        <SmallNews
          headline={categoryHeadline[3]}
          category={category}
          id={3}
        ></SmallNews>
      </div>
    </div>
  );
};

CategoryNews.propTypes = {
  categoryHeadline: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  categoryTitle: PropTypes.string.isRequired,
};

export default CategoryNews;
