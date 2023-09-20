import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./travellerpack.css";
import IndividualItenary from "./IndividualItenary";
import BookingForm from "./BookingForm";


function formatDate(dateString) {

  
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  function TravellerPacks(props){
    
    const navigate = useNavigate();

    const handleBookNow = () => {
      // Perform any booking-related actions if needed
      navigate("/book"); // Navigate to the /book route
  }
    const[itenary,setItenary]=useState([]);
    const [pack, setPack] = useState([props.user]);
    useEffect(() => {
        if (pack[0]) {
          localStorage.setItem("packageId", pack[0].packageId);
          localStorage.setItem("dest",pack[0].destination);
          localStorage.setItem("packageCost",pack[0].price);
          localStorage.setItem("agencyid",pack[0].agencyId);
        }
      }, [pack]);

    useEffect(()=>{
        getItenary();
    })

    const getItenary = () => {
        const id = localStorage.getItem("packageId");
        fetch(`http://localhost:5017/api/Itenary/GetItenariesByPackage?id=${id}`, {
      method: 'GET',
      headers: {
        accept: 'text/plain',
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      
        })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const myData = await response.json();
        console.log(myData);
        setItenary(myData);
        console.log(itenary);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      }



    return(
        <div className="traveller-pack">
        <div className="traveller-pack-details">
            <h3>{pack[0].destination}</h3>
            <p><b>Description:</b> {pack[0].description}</p>
            <p><b>Price - Rs.:</b> {pack[0].price}</p>
            <p><b>From:</b> {formatDate(pack[0].fromDate)}</p>
            <p><b>To:</b> {formatDate(pack[0].toDate)}</p>
            <p><b>Days:</b> {pack[0].no_Days}</p>
            <p><b>Nights:</b> {pack[0].no_Nights}</p>
            <div className="getplan">
                {itenary.map((itenary,index)=>{
                    return <IndividualItenary key={index} plan={itenary}/>;
                })}
            </div>
            <button className="btn btn-success" onClick={handleBookNow}>Book now</button>

        </div>
    </div>
    )
    
  }

export default TravellerPacks;