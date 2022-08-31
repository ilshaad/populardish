import React from "react";
import Dishes from "../Dishes";

export default function PopularDish() {
  const dishes = () => {
    return <Dishes />;
  };

  return (
    <div>
      <h1>Popular dishes</h1>

      <div>{dishes()}</div>
    </div>
  );
}
