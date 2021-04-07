import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

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
  const topHeadlines = useSelector((state) => state.topNews.topHeadlines);
  const businessHeadlines = useSelector(
    (state) => state.businessNews.businessHeadlines
  );
  const entertainmentHeadlines = useSelector(
    (state) => state.entertainmentNews.entertainmentHeadlines
  );
  const healthHeadlines = useSelector(
    (state) => state.healthNews.healthHeadlines
  );
  const scienceHeadlines = useSelector(
    (state) => state.scienceNews.scienceHeadlines
  );
  const sportsHeadlines = useSelector(
    (state) => state.sportsNews.sportsHeadlines
  );
  const technologyHeadlines = useSelector(
    (state) => state.technologyNews.technologyHeadlines
  );
  const specificHeadlines = useSelector(
    (state) => state.specificNews.specificHeadlines
  );

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

  let categoryList = getNews(category);

  if (categoryList === null || categoryList === undefined) {
    return <Spinner></Spinner>;
  } else {
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
