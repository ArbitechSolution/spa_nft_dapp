import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
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
import { Route, Switch } from "react-router-dom";
function AppTwo() {
  const [isChangeRoute, setIsChangeRoute] = useState(true);
  const changeRouteFalse = () => {
    setIsChangeRoute(false);
  };
  const changeRouteTrue = () => {
    setIsChangeRoute(true);
  };
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      {/* <Navbar /> */}
      <Navbar
        changeRouteFalse={changeRouteFalse}
        changeRouteTrue={changeRouteTrue}
      />
      {isChangeRoute ? (
        <>
          <Menu />
          <Menudown />
          <Menudownone />
          <Status changeRouteFalse={changeRouteFalse} />
          <Statusone />
          <Roadmap />
          <Membership />
          <Team />
          <Teamone />
          {/* <Footer /> */}
        </>
      ) : (
        <>
          <AppOne />
        </>
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default AppTwo;
