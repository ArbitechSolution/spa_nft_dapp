import React from "react";
import "./Membership.css";
import { Card, Button } from "react-bootstrap";
import design from "../../asset/design1.png";
import GroupOne from "../../asset/Group 2572.png";
import Grouptwo from "../../asset/Group 2573.png";
import Groupthree from "../../asset/Group 2574.png";
import Groupfour from "../../asset/Group 2577.png";
import Groupfive from "../../asset/Group 2576.png";
import Groupsix from "../../asset/Group 2575.png";
import Rectangle21 from "../../asset/Rectangle21.png";
function Membership() {
  return (
    // <div className="container" style={{ color: "white" }}>
    <div className="backroundColor">
      {/* <div className="row" id="memebership">
        <div className="col">
          <h2 className="memebershiph1">
            <b>MEMBERSHIP BENEFITS</b>
          </h2>
          <img src={Rectangle21} className="membershipimage1" />
        </div>
      </div> */}
      <div className="container conatiner3">
        <div className="row" style={{ justifyContent: "center" }}>
          <Card
            style={{
              width: "18rem",
              background: "#0e0e0e",
              border: "1px solid #0e0e0e",
            }}
            lg="dark"
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src={GroupOne} width="70px" />
            </span>
            <Card.Body>
              <h4 className="membershiph4">
                <b>GIVE BACK</b>
              </h4>
              <p className="membershipp">
                <b>
                  We are spoiled apes; we love to give back to children and
                  youth charities to help the younger generation who need it.
                </b>
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
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src={Grouptwo} width="70px" />
            </span>
            <Card.Body>
              <h4 className="membershiph4">
                <b>COMMUNITY</b>
              </h4>
              <p className="membershipp">
                <b>
                  We will hold both digital and real-life exclusive events only
                  accessible by our members to enjoy.
                </b>
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
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src={Groupthree} width="70px" />
            </span>
            <Card.Body>
              <h4 className="membershiph4">
                <b>MINING REVENUE</b>
              </h4>
              <p className="membershipp">
                <b>
                  Our ape mining farm will generate a sustainable income to
                  serve our members better. Increase your income by holding on
                  to our NFTs.
                </b>
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
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src={Groupfour} width="70px" />
            </span>
            <Card.Body>
              <h4 className="membershiph4">
                <b>COMMERCIAL RIGHTS</b>
              </h4>
              <p className="membershipp">
                <b>
                  Our members will be given full ownership of their NFTs so you
                  can brag about them on social media!
                </b>
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
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src={Groupfive} width="70px" />
            </span>
            <Card.Body>
              <h4 className="membershiph4">
                <b>EXCLUSIVE MERCHANDISE</b>
              </h4>
              <p className="membershipp">
                <b>
                  Limited edition merchandise will be released. Don’t miss your
                  chance to grab one!
                </b>
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
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img src={Groupsix} width="70px" />
            </span>
            <Card.Body>
              <h4 className="membershiph4">
                <b>MORE</b>
              </h4>
              <p className="membershipp">
                <b>More and more benefits will be revealed!</b>
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Membership;
