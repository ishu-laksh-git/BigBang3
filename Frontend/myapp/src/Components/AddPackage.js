import React from "react";
import "./Home.css";
import logo from "../Assets/logo.png";
import {BsInstagram,BsFacebook,BsMap,BsTelephone,BsEnvelope,BsPinMap,BsLinkedin,BsYoutube,BsTwitter} from "react-icons/bs";
import { BsPersonFill,BsPlusCircle } from 'react-icons/bs';
import "./AgentPackages.css";

function AgentPackages(){
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
              <br/>
              <b className="text-center" >Status:</b>
              <br/>

              <div className="Packs">
                <b>Packages:</b>
              </div>
              


              <div className="floating-button">
                <a href="#add-package">
                <BsPlusCircle size={30} />
                </a>
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

export default AgentPackages; 