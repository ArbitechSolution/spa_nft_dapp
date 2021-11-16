import React from "react";
import "./Roadmap.css";
import vector from "../../asset/Vector 7.png";
import polygen from "../../asset/Polygon 7.png";
import rectangle from "../../asset/Rectangle.png";
import Rectangle21 from "../../asset/Rectangle21.png";
function Roadmap() {
  return (
    <div className="container conatiner22" id="roadmap">
      <div className="row">
        <div className="col">
          <h2 className="roadmaph1">ROADMAP</h2>
        </div>
      </div>
      <div className="row roadmaprow">
        <div
          className="col-lg roadmaprow"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="boxex">Roadmap 1.0</div>
          <img src={vector} className="roadmapimage9" />
          <img src={polygen} className="roadmapimage10" />
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="boxes1">
            <p className="roadmapp">
              <b style={{ color: "#00CBBF" }}>●</b>{" "}
              <b>
                10% - We will donate one rare SYAC NFT to Save The Children,
                they deserve a place in our club! - https:// savethechildren.org{" "}
              </b>{" "}
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#00CBBF" }}>●</b>{" "}
              <b>
                25% - 5 Spoiled Young Apes will find a random “lucky” holder.
                Caution! They can brag about their nfts.
              </b>{" "}
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#00CBBF" }}>●</b>{" "}
              <b>
                50% - SYAC Merch Store will be unlocked, with 10 t-shirts mailed
                for free to active community members.
              </b>{" "}
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#00CBBF" }}>●</b>{" "}
              <b>
                75% -HOLD incentives package. 20 lucky Spoiled Young Ape owners
                that won't sell it will get free mint of 1 mystery items.
              </b>{" "}
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#00CBBF" }}>●</b>{" "}
              <b>
                100% - Spoiled Young Apes collaborate with major retail
                businesses in real life. SYAC NFT holders will benefit from
                additional discounts and cashbacks at these stores.{" "}
              </b>{" "}
            </p>
            <h4 className="roadmaph4">
              <b>Perks do not end here!</b>
            </h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg roadmaprow"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={vector} className="roadmapimage19" />
          <div className="boxex1">
            <b>Roadmap 2.0</b>
          </div>
          <img src={vector} className="roadmapimage91" />
          <img src={polygen} className="roadmapimage10" />
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="boxes1">
            <p className="roadmappup">
              <b>
                To serve our community better, we will have sustainable business
                development opportunities to give back to our community to spoil
                them more! We will be the first NFT Collection that will have a
                “Mining Utility”. There will be an Ape Mining Farm, after we
                reach 100% on our Roadmap.
              </b>
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#00CBBF" }}>●</b>{" "}
              <b>
                We will use the mining revenue to swap SYAC floor NFTs on a
                monthly basis.
              </b>
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#00CBBF" }}>●</b>{" "}
              <b>
                We will reinvest in Ape Mining Farm continuously to acquire more
                mining hash rates to benefit our community.
              </b>
            </p>
            <p className="roadmapp10">
              <b style={{ color: "#00CBBF" }}>●</b>{" "}
              <b>
                We will collaborate with famous talented artists to grow the
                SYAC collection even further.
              </b>
            </p>
            <h4 className="roadmaph4">
              <b>Are you ready, YOUNG APE ARMY?</b>
            </h4>
          </div>
        </div>
      </div>
      <div className="row" id="membership">
        <div className="col">
          <h2 className="memebershiph1">
            <b>MEMBERSHIP BENEFITS</b>
          </h2>
          <img src={Rectangle21} className="membershipimage1" />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
