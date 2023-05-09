import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
export function CareerHeader(){
    return (
        <header class="dashboard-header" id="header">
        <nav className="navbar" >
            <div className="container">
                <div className="navbar-header d-flex justify-content-lg-center justify-content-between w-100 align-items-center">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="logo" /> Perspectv
                    </Link>

                    <span className="ml-auto product_link">
                        <Link to="/our-platform" className="">our platform</Link>
                        <Link to="/vision-and-mission" className="">vision & mission</Link>
                        <Link to="/vision-and-mission" className="">launch app</Link>
                    </span>
                    <button className="navbar-toggler d-md-none d-block" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto mr-auto">
                        <li className="nav-item"><Link className="nav-link" to="/our-platform">our platform</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/vision-and-mission">vision & mission</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/vision-and-mission">launch app</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}