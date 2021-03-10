import { BrowserRouter, Route, Switch } from "react-router-dom";

import NewsState from "./context/news/NewsState";

import Navbar from "./conponents/navbar/Navbar.component";
import Footer from "./conponents/footer/Footer.component";
import Home from "./pages/home/Home.page";

function App() {
  return (
    <NewsState>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </NewsState>
  );
}

export default App;
