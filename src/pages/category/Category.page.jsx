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
    specificHeadlines,
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
      case categoryNames.ESPECIFICO:
        return specificHeadlines;
      default:
        return topHeadlines;
    }
  };

  if (topLoading || categoryLoading) {
    return <Spinner></Spinner>;
  } else {
    let categoryList = getNews(category);
    const listLength = categoryList.length;
    let endPage = Math.ceil(listLength / 10);
    let newsList = [];

    for (
      let index = parseInt(page + `${0}`);
      index <= parseInt(page + `${9}`) && index < listLength;
      index++
    ) {
      newsList.push([categoryList[index], index]);
    }

    return (
      <div className="category container">
        {newsList.map((news) => {
          return (
            <NewsWithImg
              key={news[1]}
              headline={news[0]}
              category={category}
              id={news[1]}
            ></NewsWithImg>
          );
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
              page >= endPage - 1
                ? `/${category}/${endPage - 1}`
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
