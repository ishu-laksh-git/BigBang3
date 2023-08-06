import React from "react";
import "./Home.css";
import logo from "../Assets/logo.png";
import {BsInstagram,BsFacebook,BsMap,BsTelephone,BsEnvelope,BsPinMap,BsLinkedin,BsYoutube,BsTwitter} from "react-icons/bs";
import { BsPersonFill } from 'react-icons/bs';
import ListPackages from './ListPackages';
import './Travellerpackages.css';
import './TravellerLand.css';
function BookingForm(){
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
             {/* Content */}
      <div className="content-container">
      <div className="container py-5">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Booking Form<br/><br/>Package name</h3>

                <form>

                  
                  <div className="row">
                  <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="Address" className="form-control form-control-md" placeholder="Email"/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <select id="Type" className="form-control form-control-md">
                          <option value="">Type</option>
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                          
                        </select>
                      </div>
                    </div>
                  </div>
                    
                  

                  

                 

                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="Address" className="form-control form-control-md" placeholder="Pickup"/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="Experience" className="form-control form-control-md" placeholder="Drop"/>
                      </div>
                    </div>
                  </div>

                                 
                    
                      <div className="form-outline">
                        <input type="number" id="Password" className="form-control form-control-md" placeholder="No of passengers"/>
                      </div><br/>
                   <div id="display">
                    <h4>Total:</h4>
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
      <div>

      <div className="container py-5">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Passengers</h3>
                <form>
                  <div className="row">
                    
                      
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input type="text" id="DateOfBirth" className="form-control form-control-md" placeholder="Name"/>
                      </div>
                    </div>
                  

                  <div className="col-md-6 mb-2">
                <div className="form-outline">
                <input type="number" id="DateOfBirth" className="form-control form-control-md" placeholder="Age"/>                </div>
              
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

      

      
            <footer className="footer bg-white text-center ">
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

export default BookingForm;