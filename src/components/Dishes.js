import React, { useEffect } from "react";
import { menuObject } from "../scripts/menuObject";

export default function Dishes() {
  useEffect(() => {
    console.log(menuObject);
  }, []);

  const eachDish = () => {
    return menuObject.map((ele) => {
      return (
        <div>
          <img src={ele.image} alt={ele.title} />

          <h3>{ele.title}</h3>

          <div>{ele.stars}</div>

          <div>
            {ele.keywords[0]}, {ele.keywords[1]}
          </div>
        </div>
      );
    });
  };

  return <div>{eachDish()}</div>;
}
