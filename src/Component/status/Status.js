import React from "react";
import "./Status.css";
import { useHistory } from "react-router-dom";
import circle from "../../asset/circle1.png";
import { Link } from "react-router-dom";
function Status({ changeRouteFalse }) {
  let historys = useHistory();

  // function handleClick() {
  //   historys.push("/mint");
  //   window.scrollTo(0, 0);
  //   changeRouteFalse();
  // }
  return (
    <div className="fluid1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/* <Link to="/"> */}
            <img
              src={circle}
              className="circleimage"
              onClick={() => {
                window.scrollTo(0, 0);
                // historys.push("/mint");

                changeRouteFalse();
              }}
            />
            {/* </Link> */}
          </div>
          <div className="col-md-7 statuscol">
            <h2 className="statush2">
              <b>BUY NOW</b>
            </h2>
            <p className="statusp">
              <b>
                Buy a SYAC to be a collector of a unique Spoiled Young Ape,
                watch them cause trouble and be a part of this club.
              </b>
            </p>
            <p className="statusp">
              <b>
                Buying a Spoiled Young Ape costs 0.08 ETH(price exclude gas
                fees). There are no price tiers; SYAC costs the same for
                everyone.
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
