// import Slider from "react-slick";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Componentone/Header/Header";
import Headerdown from "./Componentone/headerdown/Headerdown";
import Rarity from "./Componentone/RARITY/Rarity";
import Faq from "./Componentone/FAQ/Faq";
import Footertwo from "./Componentone/Foootertwo/Footertwo";
import Slider from "./Componentone/silder/Slider";
import { SliderData } from "./Componentone/silder/sliderimage";
import Navbar from "./Component/navbar/navbar";
function AppOne() {
  return (
    <div className="AppOne" style={{ paddingTop: "90px" }}>
      {/* <Navbar /> */}
      <Header />
      <Headerdown />
      <Slider slides={SliderData} />
      <Rarity />
      <Faq />
      <Footertwo />
    </div>
  );
}

export default AppOne;
