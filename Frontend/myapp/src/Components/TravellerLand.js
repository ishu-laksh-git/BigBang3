import React from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import around from "../Assets/around.jpg";
import city from "../Assets/city.jpg"
import city2 from "../Assets/city2.jpg";
import forest from "../Assets/forest.jpg";
import two from "../Assets/two.jpg";
import logo from "../Assets/logo.png";
import {BsInstagram,BsFacebook,BsMap,BsTelephone,BsPersonFill,BsEnvelope,BsPinMap,BsLinkedin,BsYoutube,BsTwitter} from "react-icons/bs";
import { Navigate } from "react-router-dom";

function TravellerLand() {
    const navigate=useNavigate();
    var find=()=>{navigate("/search");}
    return (
        
        <div className="home-container">
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
        
            <div className="bgIg-container">
                {/* Carousel with Quote */}
                <div className="carousel-container">
                    
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                                <img src={city} className="d-block w-100" alt="Image 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={city2} className="d-block w-100" alt="Image 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={around} className="d-block w-100" alt="Image 1" />
                            </div>
                            <div className="carousel-item">
                                <img src={two} className="d-block w-100" alt="Image 2" />
                            </div>
                            
                            
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="carousel-overlay"></div> {/* Transparent black layer */}
                    <div className="carousel-quote">
                        <p>
                            LOSE | YOURSELF <br />
                            DISCOVER | YOURSELF
                        </p>
                         {/* Sign In button */}
                         <button className="home-sign-in btn btn-dark text-white btn-lg" onClick={find}>Find destinations</button>
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
        </div>
        </div>
    );
}

export default TravellerLand;
