import React, { useState } from "react";
import "./Login.css";
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BsInstagram,BsFacebook,BsMap,BsTelephone,BsEnvelope,BsPinMap,BsLinkedin,BsYoutube,BsTwitter} from "react-icons/bs";


function Login(){
    const navigate = useNavigate();
  const [user, setUser] = useState({
    
      "userId": 0,
      "email": "string",
      "password": "string",
      "role": "string",
      "token": "string"
    
  });

  const handleSubmit = (event) => {
    event.preventDefault();

  fetch("http://localhost:5013/api/User/Login", {
      method: "POST",
      headers: {
        "Accept": "text/plain",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...user, user: {} })
    })
      .then(async (data) => {
        if (data.status === 200) {
          var myData = await data.json();
          localStorage.setItem("token", myData.token.toString());
          localStorage.setItem("email",myData.email.toString());
          localStorage.setItem("userId",myData.userId);
        
          
          if (myData.role === "Admin") {
            toast.success("Login successful!", {
              position: toast.POSITION.TOP_RIGHT, // Adjust the position here
              autoClose: 3000,
              hideProgressBar: true,
              transition: Slide
              });
              setTimeout(() => {
                navigate("/adminAgents");
              }, 3000);
          } else if (myData.role === "Agent") {
            toast.success("Login successful!", {
              position: toast.POSITION.TOP_RIGHT, // Adjust the position here
              autoClose: 3000,
              
              transition: Slide
              });
              setTimeout(() => {
                navigate("/agentPacks");
              }, 3000);
          } else if (myData.role === "traveller") {
            toast.success("Login successful!", {
              position: toast.POSITION.TOP_RIGHT, // Adjust the position here
              autoClose: 3000,
             
              transition: Slide
              });
              setTimeout(() => {
                navigate("/Travellerhome");
              }, 3000);
            
          }
        }
        else{
            toast.error("Bad credentials", {
                position: toast.POSITION.TOP_CENTER
              });
        }
      })
      .catch((err) => {
        console.log(err.error);
        
      });
  };

 
    
    return(
        <section className=" gradient-custom">
            <ToastContainer transition={Slide} />
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
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline form-white mb-3">
                      <label className="form-label text-start" htmlFor="userid">User Email</label>
                      <input type="text" id="userid" className="form-control form-control-lg" placeholder="example@gmail.com" onChange={(event) => {
                        setUser({ ...user,email: event.target.value });
                        console.log(event.target.value)
                      }} />
                      
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label text-start" htmlFor="typePasswordX">Password</label>
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="*******" onChange={(event) => {
                        setUser({ ...user, password: event.target.value });
                      }} />
                    </div>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                  </form>

                </div>

                <div>
                  <p className="mb-0">Don't have an account?
                    <Link to="/AgentReg" className="text-white-50 fw-bold"><br />Sign up as a Agent</Link><br />
                    <Link to="/TravellerReg" className="text-white-50 fw-bold"><br />Sign up as a Traveller</Link><br /></p>
                </div>
                

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
    )
}

export default Login;