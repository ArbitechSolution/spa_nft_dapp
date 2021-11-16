import React from "react";
import "./Teamone.css";
function Teamone() {
  return (
    <div className="conatiner10" id="story">
      <div>{/* <h2>STORY</h2> */}</div>
      <div
        className="container "
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <div className="teamboxboxes">
          <p className="teamonep">
            <b>
              It all started with three friends with inspiration from Apes.
              Tarzan is heavily involved with business as an entrepreneur, who
              love to collect classic cars and NFTs. Achila is an artist who
              brings art to life with her amazing talents on designing. Karry is
              a blockchain expert who writes gibberish codes on his computer, we
              don’t understand it, even a tiny byte but it somehow magically
              works. All greatly interested in NFTs and their lore. They
              combined their powers to bring this collection to life.
            </b>
          </p>
          <p className="teamonep">
            <b>
              {" "}
              Nowadays the crypto and mining market is in the hands of big
              whales, so we wanted to go back to the times where everyone was
              able to do mining and earn money without big investments. That is
              why we plan to include mining utility to our NFT project so our
              community members can continue to earn money while they benefit
              from our community’s perks.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Teamone;
