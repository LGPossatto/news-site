import { useSelector } from "react-redux";

import "./category-cluster.style.scss";
import CategoryNews from "../category-news/CategoryNews.componente";
import Spinner from "../spinner/Spinner.component";

const CategoryCluster = () => {
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

  // return null;

  return (
    <div className="container">
      <div className="category-cluster grid grid-g-2 grid-gtc-3">
        {businessHeadlines === null || businessHeadlines === undefined ? (
          <Spinner></Spinner>
        ) : (
          <CategoryNews
            categoryHeadline={businessHeadlines}
            categoryTitle="negócio"
            category="negocio"
          ></CategoryNews>
        )}
        {entertainmentHeadlines === null ||
        entertainmentHeadlines === undefined ? (
          <Spinner></Spinner>
        ) : (
          <CategoryNews
            categoryHeadline={entertainmentHeadlines}
            categoryTitle="entretenimento"
            category="entretenimento"
          ></CategoryNews>
        )}
        {healthHeadlines === null || healthHeadlines === undefined ? (
          <Spinner></Spinner>
        ) : (
          <CategoryNews
            categoryHeadline={healthHeadlines}
            categoryTitle="saúde"
            category="saude"
          ></CategoryNews>
        )}
        {scienceHeadlines === null || scienceHeadlines === undefined ? (
          <Spinner></Spinner>
        ) : (
          <CategoryNews
            categoryHeadline={scienceHeadlines}
            categoryTitle="ciência"
            category="ciencia"
          ></CategoryNews>
        )}
        {sportsHeadlines === null || sportsHeadlines === undefined ? (
          <Spinner></Spinner>
        ) : (
          <CategoryNews
            categoryHeadline={sportsHeadlines}
            categoryTitle="esporte"
            category="esporte"
          ></CategoryNews>
        )}
        {technologyHeadlines === null || technologyHeadlines === undefined ? (
          <Spinner></Spinner>
        ) : (
          <CategoryNews
            categoryHeadline={technologyHeadlines}
            categoryTitle="tecnologia"
            category="tecnologia"
          ></CategoryNews>
        )}
      </div>
    </div>
  );
};

export default CategoryCluster;
