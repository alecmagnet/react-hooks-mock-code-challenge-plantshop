import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantsArr, setPlantsArr, stateChange, setStateChange, }) {
  return (
    <main>
      <NewPlantForm stateChange={stateChange} setStateChange={setStateChange} />
      <Search plantsArr={plantsArr} setPlantsArr={setPlantsArr} stateChange={stateChange} setStateChange={setStateChange} />
      <PlantList plantsArr={plantsArr} />
    </main>
  );
}

export default PlantPage;
