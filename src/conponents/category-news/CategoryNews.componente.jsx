import { toTitleCase } from "../../utils/utils";

import "./category-news.style.scss";
import placeholderImg from "../../assets/images/news-header-placeholder.jpg";
import BigNewsWithImg from "../big-news-with-img/BigNewsWithImg.component";
import SmallNews from "../small-news/SmallNews.component";

const CategoryNews = () => {
  const category = "categoria";
  const newsImg = {
    img: placeholderImg,
    cetegory: "categoria",
    title: "titulo",
  };
  const news0 = {
    cetegory: "categoria",
    title: "titulo",
  };
  const news1 = {
    cetegory: "categoria",
    title: "titulo",
  };
  const news2 = {
    cetegory: "categoria",
    title: "titulo",
  };

  return (
    <div className="category-news">
      <h3 className="fs-biger fc-primary">{toTitleCase(category)}</h3>
      <BigNewsWithImg></BigNewsWithImg>
      <div className="category-news__pad">
        <SmallNews></SmallNews>
      </div>
      <div className="category-news__pad">
        <SmallNews></SmallNews>
      </div>
      <div className="category-news__pad">
        <SmallNews></SmallNews>
      </div>
    </div>
  );
};

export default CategoryNews;
