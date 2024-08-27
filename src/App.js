import React, { useState } from "react";
import data from "./data";   
import Tours from "./Components/Tours";


const App = () => {
  const[tours,settours]=useState(data)// data ui paer dekhadava usestate vaparu

  function removetour(id){
  const newtours=tours.filter(tour =>tour.id !==id);
  settours(newtours);
  }
  return(
  <div>
  
  <Tours tours={tours} removetour={removetour}></Tours>
  </div>
  )
};

export default App;
