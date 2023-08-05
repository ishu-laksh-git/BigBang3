import React from "react";
import "./Home.css";
import logo from "../Assets/logo.png";

function Home() {
    return (
        <div className="home-container">
            {/* Navbar */}
            <nav className="navbar home-navbar navbar-expand-lg navbar-light bg-white">
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
                            <a className="nav-link" href="#manage-doctors">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#add-doctors">Packages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#logout">Agencies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#logout">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#logout">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#logout">About Us</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <div className="bgIg-container">
                {/* Hero Section */}
                <div className="home-hero text-white body-text text-center">
                    <div className="container">
                        <h1 className="home-hero-title fst-normal">Health is indeed wealth</h1>
                        <p className="home-hero-subtitle fw-light">Get immense wealth with us</p>
                        <button className="home-sign-in btn btn-dark text-white btn-lg">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer bg-white text-center">
                <div className="footer-container">
                    <p>&copy; 2023 GoodHealth hospitals. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
