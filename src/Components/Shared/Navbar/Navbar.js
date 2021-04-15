import React from 'react';
import {
    Link
} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">Cake Shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-white" to="/about">About</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-white" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-white" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item ms-5">
                        <Link className="nav-link text-white " to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;