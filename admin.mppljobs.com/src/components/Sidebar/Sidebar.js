import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Sidebar = () => {
  const [role, setRole] = useState([]);
  const history = useHistory();
  const getDetails = async () => {
    try {
      const config = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };
      const res = await axios.get(
        "http://api.mppljobs.com/api/admin/me",
        config
      );
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("adminRole", JSON.stringify(res.data.role));
      setRole(res.data.role);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/home">
              <i class="mdi mdi-view-quilt menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          {role.includes("All") || role.includes("Jobs") ? (
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#ui-basic"
                aria-expanded="false"
                aria-controls="ui-basic"
              >
                <i class="mdi mdi-palette menu-icon"></i>
                <span class="menu-title">Jobs</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="ui-basic">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/add-jobs">
                      Add Jobs
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/pending-jobs">
                      Pending Jobs
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/posted-jobs">
                      Posted Jobs
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/old-jobs">
                      Old Jobs
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/categories">
                      Categories
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <></>
          )}

          {role.includes("All") || role.includes("Candidates") ? (
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#ui-advanced"
                aria-expanded="false"
                aria-controls="ui-advanced"
              >
                <i class="mdi mdi-layers menu-icon"></i>
                <span class="menu-title">Candidates</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="ui-advanced">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/add-candidates">
                      Add Candidates
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/candidates">
                      Candidates
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/blocked-candidates">
                      Blocked Candidates
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <></>
          )}
          {role.includes("All") || role.includes("Employers") ? (
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#form-elements"
                aria-expanded="false"
                aria-controls="form-elements"
              >
                <i class="mdi mdi-view-headline menu-icon"></i>
                <span class="menu-title">Employers</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="form-elements">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="/add-employer">
                      Add Employers
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/employers">
                      Employers
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/inactive-employers">
                      Inactive Employers
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <></>
          )}

          {role.includes("All") || role.includes("Notes") ? (
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#editors"
                aria-expanded="false"
                aria-controls="editors"
              >
                <i class="mdi mdi-pencil-box-outline menu-icon"></i>
                <span class="menu-title">Notes</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="editors">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="/add-notes">
                      Add Notes
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/notes">
                      Notes
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <></>
          )}
          {role.includes("All") || role.includes("Webinars") ? (
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#charts"
                aria-expanded="false"
                aria-controls="charts"
              >
                <i class="mdi mdi-chart-pie menu-icon"></i>
                <span class="menu-title">Webinars</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="charts">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/add-webinar">
                      Add Webinars
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/webinars">
                      Webinars
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/past-webinars">
                      Past Webinars
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <></>
          )}
          {role.includes("All") || role.includes("MockTests") ? (
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#maps"
                aria-expanded="false"
                aria-controls="maps"
              >
                <i class="mdi mdi-map menu-icon"></i>
                <span class="menu-title">Mock Tests</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="maps">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/add-mock-test">
                      Add Mock Test
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/active-mock-test">
                      Active Mock Test
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/past-mock-test">
                      Past Mock Tests
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <></>
          )}
          {role.includes("All") || role.includes("Consultants") ? (
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#tables"
                aria-expanded="false"
                aria-controls="tables"
              >
                <i class="mdi mdi-grid-large menu-icon"></i>
                <span class="menu-title">Consultants</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="tables">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/add-consultant">
                      Add Consultant
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/consultants">
                      Consultants
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/blocked-consultants">
                      Blocked Consultants
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <></>
          )}
          {role.includes("All") || role.includes("Subscription") ? (
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#icons"
                aria-expanded="false"
                aria-controls="icons"
              >
                <i class="mdi mdi-emoticon menu-icon"></i>
                <span class="menu-title">Subscription</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="icons">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/subscription-plan">
                      Subscription Plans
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/transactions">
                      Transaction
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <></>
          )}
          {role.includes("All") || role.includes("Admins") ? (
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <i class="mdi mdi-account menu-icon"></i>
                <span class="menu-title">Admins</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="auth">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/add-admin">
                      {" "}
                      Add Admin
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/admins">
                      {" "}
                      Admins
                    </a>
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="/blocked-admins">
                      {" "}
                      Blocked Admins
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <></>
          )}

          <li class="nav-item">
            <a class="nav-link" href="/profile">
              <i class="mdi mdi-file-document-box-outline menu-icon"></i>
              <span class="menu-title">Profile</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              onClick={() => {
                localStorage.removeItem("token");
                history.push("/");
              }}
            >
              <i class="mdi mdi-file-document-box-outline menu-icon"></i>
              <span class="menu-title">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
