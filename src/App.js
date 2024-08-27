import React, { useState } from "react";
import data from "./data";   
import Tours from "./Components/Tours";


const App = () => {
  const[tours,settours]=useState(data)// data ui paer dekhadava usestate vaparu

  function removetour(id){
  const newtours=tours.filter(tour =>tour.id !==id);
  settours(newtours);
  }
   // when all tours are clicked not interested then reinitializing all data to tours array
   if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>AMENDS 😔.... <br/>No More Tours Left</h2>
        <button onClick={() => settours(data)} className="btn-white">Refresh</button>
      </div>
    )
  }
  return(
  <div>
  
  <Tours tours={tours} removetour={removetour}></Tours>
  </div>
  )
};

export default App;
