import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import { toTitleCase } from "../../utils/utils";

import "./category-news.style.scss";
import BigNewsWithImg from "../big-news-with-img/BigNewsWithImg.component";
import SmallNews from "../small-news/SmallNews.component";

const CategoryNews = ({ category, categoryId }) => {
  return (
    <div className="category-news">
      <h3 className="fs-biger fc-primary">{toTitleCase(categoryTitle)}</h3>
      {}
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
  category: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
};

export default CategoryNews;
