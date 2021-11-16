import React from "react";
import "./Team.css";
import { Card, Button } from "react-bootstrap";
import GroupOne from "../../asset/Group 2572.png";
import Groupe from "../../asset/Rectangle 4452.png";
import five from "../../asset/Five.jpg";
import two from "../../asset/Four.jpg";
import three from "../../asset/Three.jpg";
function Team() {
  return (
    <div className="container conatiner1">
      <div className="row">
        <div className="col">
          <h2 className="teamh2">
            <b>THE TEAM</b>
          </h2>
        </div>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        {/* <img src={Groupe} className="teamiamge" /> */}
        <Card
          style={{
            width: "18rem",
            background: "#0e0e0e",
            border: "1px solid #0e0e0e",
            zIndex: "1",
          }}
          lg="dark"
          className="m-md-2"
          // className="teamcard"
        >
          <span style={{ display: "flex", justifyContent: "center" }}>
            <img src={five} id="image1" />
          </span>
          <Card.Body>
            <h4 className="membershiph4">
              <b>Tarzan</b>
            </h4>
            <p className="membershipp" style={{ textAlign: "center" }}>
              <b>Entrepreneur, Classic car collector. NFT Collector</b>
            </p>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            background: "#0e0e0e",
            border: "1px solid #0e0e0e",
          }}
          lg="dark"
          className="m-md-2"
        >
          <span style={{ display: "flex", justifyContent: "center" }}>
            <img src={two} id="image1" />
          </span>
          <Card.Body>
            <h4 className="membershiph4">
              <b>Achila</b>
            </h4>
            <p className="membershipp" style={{ textAlign: "center" }}>
              <b>Designer. Bringing art to life</b>
            </p>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            background: "#0e0e0e",
            border: "1px solid #0e0e0e",
            zIndex: "1",
          }}
          lg="dark"
          className="m-md-2"
          // className="teamcard"
        >
          <span style={{ display: "flex", justifyContent: "center" }}>
            <img src={three} id="image1" />
          </span>
          <Card.Body>
            <h4 className="membershiph4">
              <b>Karry</b>
            </h4>
            <p className="membershipp" style={{ textAlign: "center" }}>
              <b>Blockchain expert</b>
            </p>
          </Card.Body>
        </Card>
        {/* <img src={Groupe} className="teamiamge1" /> */}
      </div>
      {/* <div ></div> */}
    </div>
  );
}

export default Team;
