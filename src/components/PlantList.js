import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsArr }) {
  return (
    <ul className="cards">{plantsArr.map((plant) => <PlantCard plant={plant} />)}</ul>
  );
}

export default PlantList;
