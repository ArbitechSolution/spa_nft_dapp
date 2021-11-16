import React from "react";
import "./Menudownone.css";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
function Menudownone() {
  return (
    <div className="container conatiner23">
      <div
        className="row"
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   padding: "10px 10px",
        // }}
      >
        <div className="col-lg-6">
          <h1 className="menudownhone1">
            <b>JOIN THE COMMUNITY</b>
          </h1>
          <p className="menudownonep">
            <b>
              Follow us on Twitter, Instagram and join our Discord channel to
              learn more about us.
            </b>
          </p>
        </div>
        <div className="col-lg-5 col-11  membershipbox1">
          <div className="membershipbox" style={{ color: "white", border: "" }}>
            <FaTwitter size={35} />
          </div>
          <div className="membershipbox" style={{ color: "white", border: "" }}>
            <AiFillInstagram size={35} />
          </div>
          <div className="membershipbox" style={{ color: "white", border: "" }}>
            <FaDiscord size={35} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Menudownone;
