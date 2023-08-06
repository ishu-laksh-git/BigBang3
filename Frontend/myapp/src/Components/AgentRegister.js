import React, { useState } from "react";
import "./Register.css";
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BsInstagram,BsFacebook,BsMap,BsTelephone,BsEnvelope,BsPinMap,BsLinkedin,BsYoutube,BsTwitter} from "react-icons/bs";


function AgentRegister(){
  const navigate = useNavigate();
  const [agent, setAgent] = useState({
    
      "agentId": 0,
      "users": {
        "userId": 0,
        "email": "",
        "role": "",
        "passwordHash": "",
        "passwordKey": ""
      },
      "name": "string",
      "dateOfBirth": "2023-08-06T19:09:41.879Z",
      "gender": "string",
      "phone": "string",
      "agencyID": 0,
      "agencyName": "string",
      "email": "string",
      "address": "string",
      "isApproved": "string",
      "gsTnumber": "string",
      "passwordClear": "string"
    
  });

  const AgentRegister = (event) => {
    event.preventDefault(); // Prevent form submission

    console.log(agent);

    fetch("http://localhost:5013/api/User/RegisterAgent", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(agent)
    })
      .then(async (response) => {
        if (response.status === 201) {
          const data = await response.json();
          console.log(data);
          toast.success("Registration successful! :)", {
            position: toast.POSITION.TOP_CENTER
          });
          setTimeout(() => {
            navigate("/Login");
          }, 3000);
          
        } else {
          toast.error("Bad credentials", {
            position: toast.POSITION.TOP_CENTER
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return(
        <div>
            <section className="vh-100 gradient-custom">
            <ToastContainer />
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
            </nav>
      <div className="container py-5">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Agent Registration Form</h3>
                <form onSubmit={AgentRegister}>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="Name" className="form-control form-control-md" placeholder="Name" onChange={(event) => {
                          setAgent({ ...agent, name: event.target.value })
                        }} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="number" id="Speciality" className="form-control form-control-md" placeholder="AgencyId" onChange={(event) => {
                          setAgent({ ...agent,agencyID : event.target.value })
                        }} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="date" id="DateOfBirth" className="form-control form-control-md" placeholder="Date of Birth" onChange={(event) => {
                          setAgent({ ...agent, dateOfBirth: event.target.value })
                        }} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <select id="Gender" className="form-control form-control-md" onChange={(event) => {
                          setAgent({ ...agent, gender: event.target.value })
                        }} >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="email" id="Email" className="form-control form-control-md" placeholder="Email" onChange={(event) => {
                          setAgent({ ...agent, email: event.target.value })
                        }} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="tel" id="Phone" className="form-control form-control-md" placeholder="Phone" onChange={(event) => {
                          setAgent({ ...agent, phone: event.target.value })
                        }} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="Address" className="form-control form-control-md" placeholder="Address" onChange={(event) => {
                          setAgent({ ...agent, address: event.target.value })
                        }} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="Experience" className="form-control form-control-md" placeholder="Agency Name" onChange={(event) => {
                          setAgent({ ...agent, agencyName: event.target.value })
                        }} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="password" id="Password" className="form-control form-control-md" placeholder="Password" onChange={(event) => {
                          setAgent({ ...agent, passwordClear: event.target.value })
                        }} />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="password" id="ConfirmPassword" className="form-control form-control-md" placeholder="Confirm Password" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <input className="btn btn-primary btn-md" type="submit" value="Register" />
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
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
        </div>
    )
}

export default AgentRegister;