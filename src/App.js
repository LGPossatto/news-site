import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NewsContext from "./context/news/newsContext";

import Navbar from "./conponents/navbar/Navbar.component";
import Footer from "./conponents/footer/Footer.component";
import NotFound from "./pages/not-found/NotFound.page";
import Home from "./pages/home/Home.page";
import NewsDetails from "./pages/news-details/NewsDetails.page";
import Category from "./pages/category/Category.page";

function App() {
  const { getAllHeadlines } = useContext(NewsContext);

  useEffect(() => {
    // getAllHeadlines();
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
