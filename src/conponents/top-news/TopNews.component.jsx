import { useContext } from "react";

import NewsContext from "../../context/news/newsContext";

import "./top-news.style.scss";
import ImgBlockNews from "../img-block-news/ImgBlockNews.component";
import Spinner from "../spinner/Spinner.component";

const TopNews = () => {
  const { topLoading, topHeadlines } = useContext(NewsContext);

  //return null;

  if (topLoading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div className="container">
        <div className="top-news grid grid-g-2 grid-gtc-2 grid-gar-250">
          <ImgBlockNews
            className="grid-r-s2"
            headline={topHeadlines[0]}
            category="geral"
            id={0}
          ></ImgBlockNews>
          <ImgBlockNews
            headline={topHeadlines[1]}
            category="geral"
            id={1}
          ></ImgBlockNews>
          <ImgBlockNews
            headline={topHeadlines[2]}
            category="geral"
            id={2}
          ></ImgBlockNews>
        </div>
      </div>
    );
  }
};

export default TopNews;
