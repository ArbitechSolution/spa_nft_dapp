import React from "react";
import "./Header.css";
import tato from "../../asset/tato.png";
import { Button } from "react-bootstrap";
import vector9 from "../../asset/Vector 9.png";
function Header() {
  return (
    <div className="container78">
      <div className="container ">
        <div className="row">
          <h2 className="headerh2">
            HOW MANY{" "}
            <span style={{ color: "#009EFF" }}>
              <b>APES</b>
            </span>{" "}
            <b>DO YOU WANT TO</b>
            <span style={{ color: "#009EFF" }}>
              <b>MINT</b>
            </span>
            ?
          </h2>
        </div>
        {/* <div className="headbox"> */}
        <div className="row headerbox">
          {/* <div
            className="col-md-4"
            style={{
              alignSelf: "center",
            }}
          > */}
          <img src={tato} className="headerimg" />
          {/* </div> */}
          <div className="col-4 headerboxes">
            {/* <div className="headerboxes"> */}
            <h3 className="headerh3">
              <b>SALE IS OPEN</b>
            </h3>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="col-8 headerboxxxxx"
                // style={{
                //   display: "flex",
                //   flexDirection: "row",
                //   justifyContent: "space-between",
                // }}
              >
                <h4 className="headerh44">
                  <b>Amount</b>
                </h4>
                <div className="divvvv">
                  <button class="astext">-</button>
                  <span className="astex1">1</span>
                  <button class="astext">+</button>
                </div>
              </div>
            </div>
            <img src={vector9} className="headerimage21121" />
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                // border: "2px solid red",
              }}
            >
              <div
                className="col-8"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <h4 className="headerh444">
                  <b>Cost</b>
                </h4>
                <span className="headerh444">
                  <b>0.12 ETH</b>
                </span>
                {/* <div className="divvvv">
                  
                </div> */}
              </div>
            </div>
            <img
              src={vector9}
              className="headerimage21121"
              // width="240px"
              // style={{ paddingBottom: "49px" }}
            />
            <div>
              <p className="headerp">
                <b>SYAC Minted: 4398/6999</b>
              </p>
              <p className="headerp">
                <b>Connect your wallet to see</b>
                <br /> <b>the accurate count</b>
              </p>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                // border: "2px solid red",
              }}
            >
              <div className=" gap-2 my-2">
                <Button variant="secondary">XCEF22CE_3881BA</Button>
              </div>
              <div className=" gap-2">
                <Button variant="secondary" style={{ padding: "4px 67px" }}>
                  <b>MINT</b>
                </Button>
              </div>
              <div className="col-7 headerbutton"></div>
            </div>
            {/* </div> */}
          </div>
          {/* <div
            className="col-md-4"
            style={{
              alignSelf: "center",}}
          > */}
          <img src={tato} className="headerimgesss" />
          {/* </div> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Header;
