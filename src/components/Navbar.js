import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Navbar.css';

/*
 * Navbar to display in the PageFrame when the user is logged in.
 */
class Navbar extends Component {

    constructor() {
      super();
      this.state = {
        searchText: "",
      }
      this.onSearchPressed = this.onSearchPressed.bind(this);
      this.onTextChanged = this.onTextChanged.bind(this);
    }

    onSearchPressed(event) {
      event.preventDefault();
      this.props.history.push('/search?g=' + this.state.searchText);
    }

    onTextChanged(event) {
      this.setState({ searchText: event.target.value });
    }

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
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/articles"}>Articles</Link>
                            </li>
                        </ul>

                        <form className="form-inline" onSubmit={this.onSearchPressed}>
                          <div className="input-group">
                            <input type="search" placeholder="Search" className="form-control border-left-0" onChange={this.onTextChanged} />
                            <div className="input-group-append">
                              <button className="btn btn-outline-secondary search-button" type="button" onClick={this.onSearchPressed}><i className="fa fa-search search-icon"></i></button>
                            </div>
                          </div>
                        </form>
                    </div>

                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);
