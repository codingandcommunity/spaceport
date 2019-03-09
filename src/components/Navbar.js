import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

/*
 * Navbar to display in the PageFrame when the user is logged in.
 */
class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <span>
                            Spaceport
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/curriculums"}>Curriculums</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/projects"}>Projects</Link>
                            </li>
                        </ul>

                        <form className="form-inline">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-white"><i className="fa fa-search"></i></span>
                            </div>
                            <input type="search" placeholder="Search" className="form-control border-left-0"/>
                          </div>
                        </form>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Navbar;
