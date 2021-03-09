import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./conponents/navbar/Navbar.component";
import Footer from "./conponents/footer/Footer.component";
import Home from "./pages/home/Home.page";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
