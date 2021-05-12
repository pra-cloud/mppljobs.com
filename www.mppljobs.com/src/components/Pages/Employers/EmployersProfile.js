import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import ResponsiveHeader from "../../Navbar/ResponsiveHeader";
import StickTop from "../../Navbar/StickTop";
import EmployerChangePassword from "./EmployerChangePassword";
import EmployerJobAlert from "./EmployerJobAlert";
import EmployerManageJobs from "./EmployerManageJobs";
import EmployerPackages from "./EmployerPackages";
import EmployerPostNew from "./EmployerPostNew";
import EmployerProfile from "./CompanyProfile";
import EmployerResume from "./EmployerResume";
import EmployerTransactions from "./EmployerTransactions";
import Subscription from "./Subscription";
import CompanyProfile from "./CompanyProfile";
import Login from "../../Models/Login";
import Signup from "../../Models/Signup";
import { Helmet } from "react-helmet";
const Title = "Employers";

const EmployersProfile = () => {
  const [component, setComponent] = useState(<EmployerProfile />);
  return (
    <div>
      <Helmet>
        <title>{Title}</title>
      </Helmet>
      <div class="theme-layout" id="scrollup">
        <ResponsiveHeader />
        <StickTop />
        <section class="overlape">
          <div class="block no-padding">
            <div
              data-velocity="-.1"
              style={{
                background:
                  "url(images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent",
              }}
              class="parallax scrolly-invisible no-parallax"
            ></div>
            <div class="container fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="inner-header">
                    <h3>Employers</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="block no-padding">
            <div class="container">
              <div class="row no-gape">
                <aside class="col-lg-3 column border-right">
                  <div class="widget">
                    <div class="tree_widget-sec">
                      <ul>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<CompanyProfile />);
                            }}
                            title=""
                          >
                            <i class="la la-file-text"></i>Company Profile
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<EmployerManageJobs />);
                            }}
                            title=""
                          >
                            <i class="la la-briefcase"></i>Manage Jobs
                          </a>
                        </li>
                        {/* <li>
                        <a
                          onClick={() => {
                            setComponent(<EmployerTransactions />);
                          }}
                          title=""
                        >
                          <i class="la la-money"></i>Transactions
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setComponent(<EmployerResume />);
                          }}
                          title=""
                        >
                          <i class="la la-paper-plane"></i>Resumes
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            setComponent(<EmployerPackages />);
                          }}
                          title=""
                        >
                          <i class="la la-user"></i>Packages
                        </a>
                      </li> */}
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<EmployerPostNew />);
                            }}
                            title=""
                          >
                            <i class="la la-file-text"></i>Post a New Job
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<EmployerJobAlert />);
                            }}
                            title=""
                          >
                            <i class="la la-flash"></i>Job Alerts
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<EmployerChangePassword />);
                            }}
                            title=""
                          >
                            <i class="la la-lock"></i>Change Password
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<Subscription />);
                            }}
                            title=""
                          >
                            <i class="la la-lock"></i>Subscription
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i class="la la-unlink"></i>Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
                {component}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      <Login />
      <Signup />
    </div>
  );
};

export default EmployersProfile;
