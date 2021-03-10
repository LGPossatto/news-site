import { useContext } from "react";

import NewsContext from "../../context/news/newsContext";

import "./category-cluster.style.scss";
import CategoryNews from "../category-news/CategoryNews.componente";
import Spinner from "../spinner/Spinner.component";

const CategoryCluster = () => {
  const {
    categoryLoading,
    businessHeadlines,
    entertainmentHeadlines,
    healthHeadlines,
    scienceHeadlines,
    sportsHeadlines,
    technologyHeadlines,
  } = useContext(NewsContext);

  //return null;

  if (categoryLoading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div className="container">
        <div className="category-cluster grid grid-g-2 grid-gtc-3">
          <CategoryNews
            category="Negócio"
            categoryHeadline={businessHeadlines}
          ></CategoryNews>
          <CategoryNews
            category="Entretenimento"
            categoryHeadline={entertainmentHeadlines}
          ></CategoryNews>
          <CategoryNews
            category="Saúde"
            categoryHeadline={healthHeadlines}
          ></CategoryNews>
          <CategoryNews
            category="Ciência"
            categoryHeadline={scienceHeadlines}
          ></CategoryNews>
          <CategoryNews
            category="Esporte"
            categoryHeadline={sportsHeadlines}
          ></CategoryNews>
          <CategoryNews
            category="Tecnologia"
            categoryHeadline={technologyHeadlines}
          ></CategoryNews>
        </div>
      </div>
    );
  }
};

export default CategoryCluster;
