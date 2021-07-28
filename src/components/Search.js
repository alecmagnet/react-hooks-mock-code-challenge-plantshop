import React from "react";

function Search({ plantsArr, setPlantsArr, stateChange, setStateChange }) {
  const searchChange = (e) => {
    // console.log(e.target.value.length)
    if(e.target.value.length < 1) {
      setStateChange(!stateChange)
    } else {
      let filteredPlantsArr = plantsArr.filter((plant) => plant.name.includes(e.target.value))
      setPlantsArr(filteredPlantsArr)
    }
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => {
          searchChange(e)
          console.log("Searching...")
        }}
      />
    </div>
  );
}

export default Search;
