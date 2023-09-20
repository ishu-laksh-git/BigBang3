import React, { useState } from "react";
import "./Home.css";
import { ToastContainer, toast } from 'react-toastify';
import logo from "../Assets/logo.png";
import {BsInstagram,BsFacebook,BsMap,BsTelephone,BsEnvelope,BsPinMap,BsLinkedin,BsYoutube,BsTwitter} from "react-icons/bs";
import { BsPersonFill,BsPlusCircle } from 'react-icons/bs';
import "./AgentPackages.css";


function AddPackageForm(){
  var[packages,setpackages]=useState({
    
      "agencyId": 0,
      "destination": "",
      "departureCity": "",
      "fromDate": "",
      "toDate": "",
      "no_Days": 0,
      "no_Nights": 0,
      "foodIncluded": "",
      "accommodationIncluded": "",
      "tourType": "",
      "description": "",
      "available": 0,
      "price": 0
     
    
  });
  const[itenary,setItenary]=useState({
    
      "packageId": 0,
      "day": "",
      "activity": ""
    
  })
  const AddPackage = (event) => {
    event.preventDefault(); // Prevent form submission

    console.log(packages);

    fetch("http://localhost:5017/api/Package/AddPackage", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(packages)
    })
      .then(async (response) => {
        if (response.status === 201) {
          console.log(response.status);
          const data = await response.json();
          console.log(data);
          localStorage.setItem("packId",data.packageId);
          toast.success("Added! :)", {
            position: toast.POSITION.TOP_CENTER
          });
          
        } else {
          toast.error("Not added", {
            position: toast.POSITION.TOP_CENTER
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const AddItenary = (event) => {
    event.preventDefault(); // Prevent form submission
    console.log(localStorage.getItem("packId"));
    const packId = localStorage.getItem("packId");
    itenary.packageId = parseInt(packId);
    console.log(itenary.packageId);

    fetch("http://localhost:5017/api/Itenary/AddItenary", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itenary)
    })
      .then(async (response) => {
        if (response.status === 201) {
          console.log(response.status);
          const data = await response.json();
          console.log(data);
          toast.success("Added! :)", {
            position: toast.POSITION.TOP_CENTER
          });
          
        } else {
          toast.error("Not added", {
            position: toast.POSITION.TOP_CENTER
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


    return(
        <section className="gradient-custom">
          <ToastContainer/>
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
            <div className="content">
              <br/>
              <div className="container py-5">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add package Form</h3>
                <form onSubmit={AddPackage}>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="Name" className="form-control form-control-md" placeholder="Destination" onChange={(event) => {
                          setpackages({ ...packages,destination: event.target.value })
                        }} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="number" id="Speciality" className="form-control form-control-md" placeholder="AgencyId" onChange={(event) => {
                          setpackages({ ...packages,agencyId: event.target.value })
                        }} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="Name" className="form-control form-control-md" placeholder="DepartureCity" onChange={(event) => {
                          setpackages({ ...packages,departureCity: event.target.value })
                        }} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <select id="Type" className="form-control form-control-md" onChange={(event) => {
                          setpackages({ ...packages,type: event.target.value })
                        }} >
                          <option value="">Type</option>
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                          
                        </select>
                      </div>
                    </div>
                  </div>
                    
                  <div className="row">
                    <div className="col-md-6 mb-2">
                        From
                      <div className="form-outline">
                        <input type="date" id="DateOfBirth" className="form-control form-control-md" placeholder="FromDate" onChange={(event) => {
                          setpackages({ ...packages,fromDate: event.target.value })
                        }} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        To
                        <input type="date" id="DateOfBirth" className="form-control form-control-md" placeholder="ToDate" onChange={(event) => {
                          setpackages({ ...packages,toDate: event.target.value })
                        }} />
                      </div>
                    </div>
                  </div>

                  

                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="Email" className="form-control form-control-md" placeholder="no. of days" onChange={(event) => {
                          setpackages({ ...packages,no_Days: event.target.value })
                        }} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="Phone" className="form-control form-control-md" placeholder="no. of nights" onChange={(event) => {
                          setpackages({ ...packages,no_Nights: event.target.value })
                        }} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="Address" className="form-control form-control-md" placeholder="food incl/" onChange={(event) => {
                          setpackages({ ...packages,foodIncluded: event.target.value })
                        }} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="Experience" className="form-control form-control-md" placeholder="Accomodation incl/" onChange={(event) => {
                          setpackages({ ...packages,accommodationIncluded: event.target.value })
                        }} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="number" id="Password" className="form-control form-control-md" placeholder="available seats" onChange={(event) => {
                          setpackages({ ...packages,available: event.target.value })
                        }} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="ConfirmPassword" className="form-control form-control-md" placeholder="price"  onChange={(event) => {
                          setpackages({ ...packages,price: event.target.value })
                        }} />
                      </div>
                    </div>
                  </div>

                  
                      <div className="form-outline">
                      <textarea
                      id="Description"
                      className="form-control form-control-md"
                      placeholder="Description"
                      rows="4" // Adjust the number of rows as needed
                      onChange={(event) => {
                        setpackages({ ...packages,description: event.target.value })
                      }} ></textarea>                      </div>
                    <br/>

                  <div>
                    <input className="btn btn-primary btn-md" type="submit" value="Add" />
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Itenary</h3>
                <form onSubmit={AddItenary}>
                  <div className="row">
                    
                      <div className="form-outline">
                        <input type="text" id="DateOfBirth" className="form-control form-control-md" placeholder="Day" onChange={(event) => {
                          setItenary({ ...itenary,day: event.target.value })
                        }} />
                      
                    </div>
                  </div>
<br/>
                  <div className="row">
                    
                    
                    
                      <div className="form-outline">
                        <input type="text" id="Email" className="form-control form-control-md" placeholder="Activity" onChange={(event) => {
                          setItenary({ ...itenary,activity: event.target.value })
                        }} />
                     
                    </div>
                  </div>

                  <br/>
                  <div>
                    <input className="btn btn-primary btn-md" type="submit" value="Add" />
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Images</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="number" id="Name" className="form-control form-control-md" placeholder="packageId"/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="DateOfBirth" className="form-control form-control-md" placeholder="Name"/>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    
                    
                    
                  
                <div className="form-outline">
                  <input type="file" id="UploadFile" className="form-control form-control-md" />
                </div>
              
                  </div>

                  <br/>
                  <div>
                    <input className="btn btn-primary btn-md" type="submit" value="Add" />
                  </div>

                </form>
              </div>
            </div>
          </div>
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

export default AddPackageForm;