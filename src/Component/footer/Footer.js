import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import logo from "../../asset/logo.png";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <hr
        style={{
          border: "2px solid white",
          color: "white",
          marginTop: "90px",
        }}
      />
      <div className="container container11">
        <div className="row footerrow ">
          <div className="col-md-4 footercol">
            <span>
              <b>© 2021 SYAC is Proudly Powered by</b>
              <a
                href=""
                style={{
                  color: "#0085f4",
                  textDecoration: "none",
                }}
              >
                <b>SYAC.</b>
              </a>
            </span>
          </div>
          <div
            className="col-1"
            style={{
              //   border: "2px solid red",
              justifyContent: "left",
              display: "flex",
            }}
          >
            <img src={logo} className="footerimage" />
          </div>
          <div className="col-2 footerlink">
            <a href="" width="40px" style={{ color: "white" }}>
              <FaTwitter size={30} />
            </a>
            <a href="" width="40px" style={{ color: "white" }}>
              <FaDiscord size={30} />
            </a>
            <a href="" width="40px" style={{ color: "white" }}>
              <AiFillInstagram size={30} />
            </a>
            {/* <a href="" width="40px" style={{ color: "white" }}>
              <FaYoutube size={30} />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
