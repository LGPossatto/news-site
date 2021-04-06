import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getTopNews } from "./redux/top-news/topNewsActions";
import { getBusinessNews } from "./redux/business-news/businessNewsActions";
import { getEntertainmentsNews } from "./redux/entertainment-news/entertainmentNewsActions";
import { getHealthNews } from "./redux/health-news/healthNewsActions";
import { getScienceNews } from "./redux/science-news/scienceNewsActions";
import { getSportsNews } from "./redux/sports-news/sportsNewsActions";
import { getTechnologyNews } from "./redux/technology-news/technologyNewsActions";

import Navbar from "./conponents/navbar/Navbar.component";
import Footer from "./conponents/footer/Footer.component";
import NotFound from "./pages/not-found/NotFound.page";
import Home from "./pages/home/Home.page";
import NewsDetails from "./pages/news-details/NewsDetails.page";
import Category from "./pages/category/Category.page";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getTopNews);
    //dispatch(getBusinessNews);
    //dispatch(getEntertainmentsNews);
    //dispatch(getHealthNews);
    //dispatch(getScienceNews);
    //dispatch(getSportsNews);
    //dispatch(getTechnologyNews);
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route
          exact
          path="/:category/noticia/:id"
          component={NewsDetails}
        ></Route>
        <Route exact path="/:category/:page" component={Category}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
