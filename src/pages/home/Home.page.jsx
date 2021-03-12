import { useContext, useEffect } from "react";

import "./home.style.scss";
import TopNews from "../../conponents/top-news/TopNews.component";
import MainContent from "../../conponents/main-content/MainContent.component";
import VideosStripe from "../../conponents/videos-stripe/VideosStripe.component";
import CategoryCluster from "../../conponents/category-cluster/CategoryCluster.component";

import NewsContext from "../../context/news/newsContext";

const Home = () => {
  const { getAllHeadlines } = useContext(NewsContext);

  useEffect(() => {
    //getAllHeadlines();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <TopNews></TopNews>
      <MainContent></MainContent>
      <VideosStripe></VideosStripe>
      <CategoryCluster></CategoryCluster>
    </>
  );
};

export default Home;
