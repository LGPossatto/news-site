import "./category-cluster.style.scss";
import CategoryNews from "../category-news/CategoryNews.componente";

const CategoryCluster = () => {
  return (
    <div className="container">
      <div className="category-cluster grid grid-g-2 grid-gtc-3">
        <CategoryNews></CategoryNews>
        <CategoryNews></CategoryNews>
        <CategoryNews></CategoryNews>
        <CategoryNews></CategoryNews>
        <CategoryNews></CategoryNews>
        <CategoryNews></CategoryNews>
      </div>
    </div>
  );
};

export default CategoryCluster;
