import React, { useState, useEffect } from "react";
import './IndividualAgents.css'
import { Link } from "react-router-dom";

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

function IndividualPackages(props){

    const [pack, setPack] = useState([props.user]);
    useEffect(() => {
        if (pack[0]) {
          localStorage.setItem("packageId", pack[0].packageId);
        }
      }, [pack]);



    return(
        <div>
            <div className="card card-body IndividualDoctor card text-white bg-dark mb-3 shadow p-3 mb-5 rounded">
        <h5 className="card-title">{pack[0].destination}</h5>
        <br />
        <p className="card-text">
          <b>Description</b>
          {pack[0].description}
        </p>
        <p className="card-text">
          <b>Price - Rs. </b>
          {pack[0].price}
        </p>
        <p className="card-text">
          <b>From -  </b>
          {formatDate(pack[0].fromDate)}
        </p>
        <p className="card-text">
          <b>To -  </b>
          {formatDate(pack[0].toDate)}
        </p>
        <p className="card-text">
          <b> Days - </b>
          {pack[0].no_Days}
        </p>     
        <p className="card-text">
          <b>Nights - </b>
          {pack[0].no_Nights}
        </p>   
        <p className="card-text">
          <Link>More detatils </Link>
          
        </p>
        </div>
        </div>
    )
}
export default IndividualPackages;