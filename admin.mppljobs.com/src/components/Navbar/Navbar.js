import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { getAdminDetails } from "../../actions/adminActions";
const Navbar = (props) => {
  const [name, setName] = useState(localStorage.getItem("name"));
  const history = useHistory();

  return (
    <div>
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-between">
          <ul className="navbar-nav mr-lg-2 d-none d-lg-flex">
            <li className="nav-item nav-toggler-item">
              <button
                className="navbar-toggler align-self-center"
                type="button"
                data-toggle="minimize"
              >
                <span className="mdi mdi-menu"></span>
              </button>
            </li>
            <li className="nav-item nav-search d-none d-lg-flex">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="search">
                    <i className="mdi mdi-magnify"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="search"
                  aria-describedby="search"
                />
              </div>
            </li>
          </ul>
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo" href="index.html">
              <img src="./MPPL_logo.png" alt="logo" height="100px" />
            </a>
            <a className="navbar-brand brand-logo-mini" href="index.html">
              <img src="./1.png" alt="logo" width="150px" />
            </a>
          </div>
          <ul className="navbar-nav navbar-nav-right">
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="mdi mdi-bell-outline mx-0"></i>
                <span className="count"></span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown"
              >
                <a className="dropdown-item">
                  <p className="mb-0 font-weight-normal float-left">
                    You have 4 new notifications
                  </p>
                  <span className="badge badge-pill badge-warning float-right">
                    View all
                  </span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="mdi mdi-information mx-0"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-medium">
                      Application Error
                    </h6>
                    <p className="font-weight-light small-text mb-0">Just now</p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="mdi mdi-settings mx-0"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-medium">Settings</h6>
                    <p className="font-weight-light small-text mb-0">
                      Private message
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="mdi mdi-account-box mx-0"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-medium">
                      New user registration
                    </h6>
                    <p className="font-weight-light small-text mb-0">2 days ago</p>
                  </div>
                </a>
              </div>
            </li>
             */}
            <li className="nav-item nav-profile dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                id="profileDropdown"
              >
                <img src="../../images/faces/face5.jpg" alt="profile" />
                <span className="nav-profile-name">{name}</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <a className="dropdown-item">
                  <i className="mdi mdi-settings text-primary"></i>
                  Visit Site
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">
                  <i className="mdi mdi-settings text-primary"></i>
                  View Profile
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item"
                  onClick={() => {
                    localStorage.removeItem("token");
                    history.push("/");
                  }}
                >
                  <i className="mdi mdi-logout text-primary"></i>
                  Logout
                </a>
              </div>
            </li>
            {/* <li className="nav-item nav-settings d-none d-lg-flex">
              <a className="nav-link" href="#">
                <i className="mdi mdi-dots-horizontal"></i>
              </a>
            </li> */}
            <li className="nav-item nav-toggler-item-right d-lg-none">
              <button
                className="navbar-toggler align-self-center"
                type="button"
                data-toggle="offcanvas"
              >
                <span className="mdi mdi-menu"></span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  admin: state.admin.admin,
});

export default connect(mapStateToProps, {
  getAdminDetails,
})(Navbar);
