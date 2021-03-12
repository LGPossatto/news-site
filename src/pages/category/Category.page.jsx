import { useContext } from "react";
import { Link } from "react-router-dom";

import NewsContext from "../../context/news/newsContext";
import { categoryNames } from "../../utils/utils";

import "./category.style.scss";
import Spinner from "../../conponents/spinner/Spinner.component";
import NewsWithImg from "../../conponents/news-with-img/NewsWithImg.component";
import ArrowBtn from "../../conponents/arrow-btn/ArrowBtn.component";

const Category = ({
  match: {
    params: { category, page },
  },
}) => {
  const {
    topLoading,
    topHeadlines,
    categoryLoading,
    businessHeadlines,
    entertainmentHeadlines,
    healthHeadlines,
    scienceHeadlines,
    sportsHeadlines,
    technologyHeadlines,
  } = useContext(NewsContext);

  const getNews = (newsCategory) => {
    switch (newsCategory) {
      case categoryNames.NEGOCIO:
        return businessHeadlines;
      case categoryNames.ENTRETENIMENTO:
        return entertainmentHeadlines;
      case categoryNames.SAUDE:
        return healthHeadlines;
      case categoryNames.CIENCIA:
        return scienceHeadlines;
      case categoryNames.ESPORTE:
        return sportsHeadlines;
      case categoryNames.TECNOLOGIA:
        return technologyHeadlines;
      default:
        return topHeadlines;
    }
  };

  let newsList = getNews(category);
  let endPage = Math.ceil(newsList.length / 10);
  let index = -1;

  const changePage = (dir) => {
    index = -1;
  };

  if (topLoading || categoryLoading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div className="category container">
        {newsList.map((news) => {
          while (index < 9) {
            index++;
            return (
              <NewsWithImg
                headline={news}
                category={category}
                id={index}
              ></NewsWithImg>
            );
          }
        })}
        <div className="category__page flex flex-jcc flex-aic">
          <Link
            to={
              page <= 0
                ? `/${category}/0`
                : `/${category}/${parseInt(page) - 1}`
            }
          >
            <ArrowBtn dir="left" light></ArrowBtn>
          </Link>
          <div className="page-number fs-big">{parseInt(page) + 1}</div>
          <Link
            to={
              page >= endPage
                ? `/${category}/${endPage}`
                : `/${category}/${parseInt(page) + 1}`
            }
          >
            <ArrowBtn dir="right" light></ArrowBtn>
          </Link>
        </div>
      </div>
    );
  }
};

export default Category;
