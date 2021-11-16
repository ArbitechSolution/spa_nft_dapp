import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./Component/navbar/navbar";
import Menu from "./Component/menu/menu";
import Menudown from "./Component/menudown/Menudown";
import Menudownone from "./Component/menudownone/Menudownone";
import Status from "./Component/status/Status";
import Statusone from "./Component/statusone/Statusone";
import Roadmap from "./Component/roadmap/Roadmap";
import Membership from "./Component/memberShip/Membership";
import Team from "./Component/team/Team";
import Teamone from "./Component/teamone/Teamone";
import Footer from "./Component/footer/Footer";
import Header from "./Componentone/Header/Header";
import Headerdown from "./Componentone/headerdown/Headerdown";
import Rarity from "./Componentone/RARITY/Rarity";
import Faq from "./Componentone/FAQ/Faq";
import Slider from "./Componentone/silder/Slider";
import Footertwo from "./Componentone/Foootertwo/Footertwo";
import { SliderData } from "./Componentone/silder/sliderimage";
import AppOne from "./AppOne";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AppTwo from "./AppTwo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar />
    //  
      <Menu />
      <Menudown />
      <Menudownone />
      <Status />
      <Statusone />
      <Roadmap />
      <Membership />
      <Team />
      <Teamone />
      <Footer /> */}
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={AppTwo} />
          <Route exact path="/mint" component={AppOne} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
