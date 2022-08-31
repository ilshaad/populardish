import React, { useEffect } from "react";
import { menuObject } from "../scripts/menuObject";
import "../styles/Dishes.css";

export default function Dishes() {
  useEffect(() => {
    console.log(menuObject);
  }, []);

  const eachDish = () => {
    return menuObject.map((ele) => {
      return (
        <div className="dish" style={{ backgroundColor: "white" }}>
          <div style={{ width: "150px" }}>
            <img src={ele.image} alt={ele.title} style={{ width: "100%" }} />
          </div>

          <h3>{ele.title}</h3>

          <div>{ele.stars}</div>

          <div>
            {ele.keywords[0]}, {ele.keywords[1]}
          </div>
        </div>
      );
    });
  };

  return <div id="dishContainer">{eachDish()}</div>;
}
