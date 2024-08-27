//tour ma card hase
import Card from "./Card";

  function Tours({tours,removetour}){
return(
  <div>
    <div>
      <h2>TravelHeart</h2>
    </div>
    <div>
      {
        tours.map((tour)=>{
          return <Card  {...tour} removetour={removetour}></Card>
        })//seven city data map karavi lidho indivitual lakhavana badale map use kari lidhu 
      }
    </div>
  </div>
)
  }
  export default Tours;
  {/* here instead of writing different cards for different cities in tours array we use map function */}
        {/* key={tour.id} => it is a good practice to pass key while using map function */}