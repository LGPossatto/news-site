import { useSelector } from "react-redux";
import { categoryNames } from "../../utils/utils";

import "./news-details.style.scss";
import placeholderImg from "../../assets/images/news-header-placeholder.jpg";
import CompleteInfoNews from "../../conponents/complete-info-news/CompleteInfoNews.component";
import Spinner from "../../conponents/spinner/Spinner.component";

const NewsDetails = ({
  match: {
    params: { category, id },
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
        return businessHeadlines[id];
      case categoryNames.ENTRETENIMENTO:
        return entertainmentHeadlines[id];
      case categoryNames.SAUDE:
        return healthHeadlines[id];
      case categoryNames.CIENCIA:
        return scienceHeadlines[id];
      case categoryNames.ESPORTE:
        return sportsHeadlines[id];
      case categoryNames.TECNOLOGIA:
        return technologyHeadlines[id];
      case categoryNames.ESPECIFICO:
        return specificHeadlines[id];
      default:
        return topHeadlines[id];
    }
  };

  let news = getNews(category);

  if (news === null || news === undefined) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div className="news-details container">
        <div className="news-details__top flex flex-jcc">
          <div className="img-box">
            <img
              src={news.urlToImage || placeholderImg}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholderImg;
              }}
              alt="placeholder"
            />
          </div>
          <CompleteInfoNews headline={news}></CompleteInfoNews>
        </div>
        {news.content && (
          <div className="news-details__content">
            <h2 className="fs-biger">
              Conteúdo: <p className="fs-big">{news.content}</p>
            </h2>
          </div>
        )}
      </div>
    );
  }
};

export default NewsDetails;
