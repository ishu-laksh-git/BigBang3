import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import "./Home.css";
import TravellerPacks from "./TravellerPacks";
import {BsInstagram,BsFacebook,BsMap,BsTelephone,BsPersonFill,BsEnvelope,BsPinMap,BsLinkedin,BsYoutube,BsTwitter} from "react-icons/bs";

function SearchPacks(){

    const[packages,setpackages]=useState([]);
    const[PPack,setPPack]=useState([]);
    const [searchInput, setSearchInput] = useState('');



    useEffect(()=>{
        getpackages();
        
      },[]);

      const handleSearchInputChange = (value) => {
        setSearchInput(value);
      };
      

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

      const getPackage=()=>{
        var destination = localStorage.getItem("dest");
        fetch(`http://localhost:5017/api/Package/GetPackageByDestination?dest=${searchInput}`, {
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
          setPPack(myData);
          localStorage.setItem("agent name",myData.name);
          localStorage.setItem("agencyId",myData.agencyID);
          console.log(PPack);
          
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
                            <a className="nav-link" href="#logout">AGENCIES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#logout">REVIEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#logout">GALLERY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#logout">ABOUT US</a>
                        </li>
                    </ul>
                    
                </div>
                <div className="user-img-container">
                    <span className="navbar-brand home-navbar mb-0 h1">
                    <a className="nav-link" href="#logout"><BsPersonFill size={50}/></a>
                    </span>
                </div>
            </nav>
             {/* Doctor List */}
             <div classname="vh-100 d-flex flex-column align-items-center justify-content-center">
             <div className="row justify-content-center"><br/>
                   <b className="row justify-content-center">Search for packages!</b><br/><br/>
                    <div className="col-md-6">
                        <form className="input-group search-bar">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Where to...?"
                                value={searchInput}
                                onChange={(e) => handleSearchInputChange(e.target.value)}                         
                            />
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                    <div className="GetAll">
                            {packages.map((packages, index) => {
                                return <TravellerPacks key={index} user={packages} />;
                            })}
                        </div>
                </div>
              
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

export default SearchPacks;