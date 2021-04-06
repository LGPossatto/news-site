import "./category-cluster.style.scss";
import CategoryNews from "../category-news/CategoryNews.componente";
import Spinner from "../spinner/Spinner.component";

const CategoryCluster = () => {
  /* const {
    categoryLoading,
    businessHeadlines,
    entertainmentHeadlines,
    healthHeadlines,
    scienceHeadlines,
    sportsHeadlines,
    technologyHeadlines,
  } = useContext(NewsContext); */

  return null;

  if (categoryLoading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div className="container">
        <div className="category-cluster grid grid-g-2 grid-gtc-3">
          <CategoryNews categoryTitle="negócio" categoryId={0}></CategoryNews>
          <CategoryNews
            categoryTitle="entretenimento"
            categoryId={1}
          ></CategoryNews>
          <CategoryNews categoryTitle="saúde" categoryId={2}></CategoryNews>
          <CategoryNews categoryTitle="ciência" categoryId={3}></CategoryNews>
          <CategoryNews categoryTitle="esporte" categoryId={4}></CategoryNews>
          <CategoryNews
            categoryTitle="tecnologia"
            categoryId={5}
          ></CategoryNews>
        </div>
      </div>
    );
  }
};

export default CategoryCluster;
