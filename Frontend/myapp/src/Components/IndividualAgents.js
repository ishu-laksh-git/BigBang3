import React, { useState, useEffect } from "react";
import './IndividualAgents.css'

function IndividualAgents(props){

    const [agent, setAgent] = useState([props.user]);

    useEffect(() => {
        if (agent[0]) {
          localStorage.setItem("agentId", agent[0].agentId);
        }
      }, [agent]);
      
      const UpdateStatus = (agentEmail, isApproved) => {
        const newStatus = isApproved === "Yes" ? "No" : "Yes";
          
            fetch("http://localhost:5013/api/User/UpdateAgentStatus", {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //Authorization: "Bearer " + localStorage.getItem("token")
              },
              body: JSON.stringify({ agentEmail, status: newStatus })
            })
              .then(async (response) => {
                if (response.status === 200) {
                  const data = await response.json();
                  setAgent([data]); // Update the doc state with the new data
                }
              })
              .catch((err) => {
                console.log(err);
              });
          };


    return(
        <div>
        <div className="card card-body IndividualDoctor card text-white bg-primary mb-3 shadow p-3 mb-5 rounded">
        <h5 className="card-title">{agent[0].name}</h5>
        <br />
        <p className="card-text">
          <b>Email - </b>
          {agent[0].email}
        </p>
        <p className="card-text">
          <b>DOB - </b>
          {agent[0].dateOfBirth}
        </p>
        <p className="card-text">
          <b>Gender - </b>
          {agent[0].gender}
        </p>
        <p className="card-text">
          <b>Agency - </b>
          {agent[0].agencyName}
        </p>
        <p className="card-text">
          <b>Phone - </b>
          {agent[0].phone}
        </p>
        <p className="card-text">
          <b>City - </b>
          {agent[0].address}
        </p>
        <p className="card-text">
          <b>Approved - </b>
          {agent[0].isApproved}
        </p>
        <button
          onClick={() => UpdateStatus(agent[0].email, agent[0].isApproved)}
          className="card-link btn btn-secondary"
        >
          Change Status
        </button>
        
      </div>
        </div>
    )

}

export default IndividualAgents;