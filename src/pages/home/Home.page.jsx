import "./home.style.scss";
import TopNews from "../../conponents/top-news/TopNews.component";
import MainContent from "../../conponents/main-content/MainContent.component";

const Home = () => {
  return (
    <header className="header container">
      <TopNews></TopNews>
      <MainContent></MainContent>
    </header>
  );
};

export default Home;
