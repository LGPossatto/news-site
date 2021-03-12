import { useContext } from "react";

import NewsContext from "../../context/news/newsContext";

import "./category-cluster.style.scss";
import CategoryNews from "../category-news/CategoryNews.componente";
import Spinner from "../spinner/Spinner.component";

import { categoryNames } from "../../utils/utils";

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
            category={categoryNames.NEGOCIO}
            categoryTitle="negócio"
            categoryHeadline={businessHeadlines}
          ></CategoryNews>
          <CategoryNews
            category={categoryNames.ENTRETENIMENTO}
            categoryTitle="entretenimento"
            categoryHeadline={entertainmentHeadlines}
          ></CategoryNews>
          <CategoryNews
            category={categoryNames.SAUDE}
            categoryTitle="saúde"
            categoryHeadline={healthHeadlines}
          ></CategoryNews>
          <CategoryNews
            category={categoryNames.CIENCIA}
            categoryTitle="ciência"
            categoryHeadline={scienceHeadlines}
          ></CategoryNews>
          <CategoryNews
            category={categoryNames.ESPORTE}
            categoryTitle="esporte"
            categoryHeadline={sportsHeadlines}
          ></CategoryNews>
          <CategoryNews
            category={categoryNames.TECNOLOGIA}
            categoryTitle="tecnologia"
            categoryHeadline={technologyHeadlines}
          ></CategoryNews>
        </div>
      </div>
    );
  }
};

export default CategoryCluster;
