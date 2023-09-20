import React, { useState, useEffect } from "react";
function IndividualItenary(props){
    const[itenary,setItenary]=useState([props.plan]);
    useEffect(() => {
        if (itenary[0]) {
          localStorage.setItem("packageId", itenary[0].packageId);
        }
      }, [itenary]);

      return(
        <div>
            <h3>{itenary[0].destination}</h3>
            <p><b>Day:</b> {itenary[0].day}</p>
            <p><b>Activity - </b> {itenary[0].activity}</p>
   

         </div>
      )
}
export default IndividualItenary;