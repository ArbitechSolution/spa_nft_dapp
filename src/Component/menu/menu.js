import React from "react";
import imge1 from "../../asset/imge1.png";
import "./menu.css";
function Menu() {
  return (
    <div className="fluid-container">
      <div className="container menucontainer">
        <h2>
          <b>
            {" "}
            Welcome to the
            <br /> Spoiled Young Ape Club (SYAC)
          </b>
        </h2>
        <img src={imge1} className="menuimage" />
      </div>
    </div>
  );
}

export default Menu;
