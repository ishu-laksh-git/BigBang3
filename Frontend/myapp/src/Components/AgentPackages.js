import React, { useEffect, useState } from "react";
import "./Home.css";
import IndividualPackages from "./IndividualPackages";
import logo from "../Assets/logo.png";
import AddPackageForm from "./AddPackageForm";
import {BsInstagram,BsFacebook,BsMap,BsTelephone,BsEnvelope,BsPinMap,BsLinkedin,BsYoutube,BsTwitter} from "react-icons/bs";
import { BsPersonFill,BsPlusCircle } from 'react-icons/bs';
import "./AgentPackages.css";
import { Link } from "react-router-dom";

function AgentPackages(){

    var logOut=()=>{localStorage.clear()};
    const[packages,setpackages]=useState([]);
    const[agent,setagent]=useState([]);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const filteredPackages = packages.filter(packages => packages.agencyId === agent.agencyID);



    useEffect(()=>{
        getpackages();
        getDoc();
      },[]);

      const getDoc = async (doctorId) => {
        const Agentemail = encodeURIComponent(localStorage.getItem("email")); // Encode the email
        const url = `http://localhost:5013/api/User/GetAgent?email=${Agentemail}`;
        fetch(`http://localhost:5013/api/User/GetAgent?email=${Agentemail}`, {
          method: "GET",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
            //Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(async (response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const myData = await response.json();
          console.log(myData);
          setagent(myData);
          localStorage.setItem("agency status", myData.isApproved);
          localStorage.setItem("agent name",myData.name);
          localStorage.setItem("agencyId",myData.agencyID);
          localStorage.setItem("agentId",myData.agentId);
          console.log(agent);
          setIsButtonClicked(true);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
      }

      const getpackages = () => {
        fetch("http://localhost:5017/api/Package/GetAllPakages", {
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
        setpackages(myData);
        console.log(packages);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      }

    return(
        <section className="gradient-custom">
      {/* Navbar */}
      <nav className="navbar home-navbar navbar-expand-lg navbar-light bg-white" id="home-navbar">
                <div className="logo-img-container">
                    <span className="navbar-brand home-navbar mb-0 h1">
                        <img src={logo} alt="Logo" className="logo-image" />
                    </span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#manage-doctors">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#add-doctors">PACKAGES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#logout">LOGOUT</a>
                        </li>
                        
                    </ul>
                </div>
                <div className="user-img-container">
                    <span className="navbar-brand home-navbar mb-0 h1">
                    <a className="nav-link" href="#logout"><BsPersonFill size={50}/></a>
                    </span>
                </div>
            </nav>
            <div className="content vh-100">
                <b className="text-center">Name: {localStorage.getItem("agent name")}</b>
                <br/>
                <b className="text-center">Approved Status? : {localStorage.getItem("agency status")}</b>
                <br/>

                {/* Conditionally render content based on agency status */}
                {localStorage.getItem("agency status") === "Yes" ? (
                    <>
                        <div className="Packs">
                            <b>Packages:</b>
                        </div>

                        <div className="GetAll">
                            {filteredPackages.map((packages, index) => {
                                return <IndividualPackages key={index} user={packages} />;
                            })}
                        </div>

                        <Link to="/addPack">
                            <BsPlusCircle size={30} />
                        </Link>
                    </>
                ) : (
                    <div className="text-center">
                        <p>You are not approved yet.</p>
                    </div>
                )}
            </div>

      
            <footer className="footer bg-white text-center">
            <div className="contact-section">
                    <div className="contact-details" id="contact-footer">
                        <h3>Contact us</h3>
                        <p>
                            <a href="https://kanini.com/"><BsMap size={20} /></a> Tower A, 1st Floor, 51, Ratha Tek Meadows Rd,
                            Chennai <br />
                            <a href="#"><BsTelephone size={20} /></a> +91 9208374673<br />
                            <a href="#"><BsEnvelope size={20} /></a> transformation@kanini.com
                        </p>
                        <p>
                        <a href="https://www.youtube.com/@Kanini_com"><BsYoutube size={20} /></a>&nbsp;&nbsp;
                        <a href="https://www.facebook.com/KANINIans/"><BsTwitter size={20} /></a>&nbsp;&nbsp;
                        <a href="https://in.linkedin.com/company/kanini"><BsLinkedin size={20}/></a>
                        </p>
                    </div>
                    <div className="copywrite-details" id="copywrites">
                        <p>&copy; 2023 KANINI Tourism Solutions.<br/> All rights reserved.</p>
                    </div>
                </div>
            </footer>
            </section>
    )
}

export default AgentPackages;