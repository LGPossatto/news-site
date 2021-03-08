import "./home.style.scss";
import TopNews from "../../conponents/top-news/TopNews.component";
import MainContent from "../../conponents/main-content/MainContent.component";
//import SocialStripe from "../../conponents/social-stripe/SocialStripe.component";
import VideosStripe from "../../conponents/videos-stripe/VideosStripe.component";

const Home = () => {
  return (
    <>
      <header className="header container">
        <TopNews></TopNews>
      </header>
      <main className="container">
        <MainContent></MainContent>
      </main>
      <section className="videos">
        <VideosStripe></VideosStripe>
      </section>
    </>
  );
};

export default Home;
