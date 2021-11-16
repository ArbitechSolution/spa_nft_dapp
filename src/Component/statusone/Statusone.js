import React from "react";
import photos from "../../asset/Two.jpg";
import "./Statusone.css";
function Statusone() {
  return (
    <div className="container conatiner1">
      <div className="row">
        <div className="col-lg-7">
          <h2 className="menudownh1">SPECS</h2>
          <p className="menudownp">
            <b>
              Each Spoiled Young Ape is unique and programmatically generated
              from over 200 possible traits, including expression, headwear,
              clothing, and more. These apes are spoiled young apes, but some of
              them are troubling their bored fathers and desperate moms even
              more!
            </b>
          </p>
          <p className="menudownp">
            <b>
              The apes are stored as ERC-721 tokens on the Ethereum blockchain
              and hosted on IPFS. Minting spoiled Ape costs 0.08 ETH.
            </b>
          </p>
        </div>
        <div className="col-lg-4">
          <img src={photos} className="statusoneimage" />
        </div>
      </div>
    </div>
  );
}

export default Statusone;
