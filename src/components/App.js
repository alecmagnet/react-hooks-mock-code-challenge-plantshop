import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantsArr, setPlantsArr] = useState([])
  const [stateChange, setStateChange] = useState(false)
  // const [plantsFilter, setPlantsFilter] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => {
      console.log("useEffect data:", data)
      setPlantsArr(data)
    })
  }, [stateChange])

  return (
    <div className="app">
      <Header />
      <PlantPage plantsArr={plantsArr} stateChange={stateChange} setStateChange={setStateChange} setPlantsArr={setPlantsArr} />
    </div>
  );
}

export default App;
