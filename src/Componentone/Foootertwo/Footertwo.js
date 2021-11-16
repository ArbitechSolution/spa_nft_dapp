import React from "react";
import "./Footertwo.css";
import image1 from "../../asset/imge1.png";
function Footertwo() {
  return (
    <div className="footertwo ">
      <div className="container container10">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            className="col-lg-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <h3 className="footertwoh3">
              <b>JOIN THE</b>
            </h3>
            <h3 className="footertwoh4">
              <b>TROOPER COMMUNITY</b>
            </h3>
            <button className="btn btn-secondary buttonbtn">
              <b>JOIN THE DISCORD</b>
            </button>
          </div>
          <div className="col-lg-4" style={{ alignSelf: "end" }}>
            <img src={image1} className="footertwoimage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footertwo;
