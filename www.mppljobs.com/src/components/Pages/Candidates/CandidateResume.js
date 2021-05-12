import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import ResponsiveHeader from "../../Navbar/ResponsiveHeader";
import StickTop from "../../Navbar/StickTop";
import CandidateProfile from "./CandidatesProfile";
import CandidateMyResume from "./CandidateMyResume";
import CandidatesAppliedJobs from "./CandidatesAppliedJobs";
import CandidatesShortlist from "./CandidatesShortlist";
import CandidateChangePassword from "./CandidateChangePassword";
import CandidatesCVCoverLetter from "./CandidatesCVCoverLetter";
import CandidatesJobAlert from "./CandidatesJobAlert";
import Subscription from "./Subscription";
import Login from "../../Models/Login";
import Signup from "../../Models/Signup";
import { Helmet } from "react-helmet";
const Title = "Candidates";

const CandidateResume = () => {
  const [component, setComponent] = useState(<CandidateProfile />);
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
                    <h3>Candidates</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="block remove-top">
            <div class="container">
              <div class="row no-gape">
                <aside class="col-lg-3 column border-right">
                  <div class="widget">
                    <div class="tree_widget-sec">
                      <ul>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<CandidateProfile />);
                            }}
                            title=""
                          >
                            <i class="la la-file-text"></i>My Profile
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<CandidateMyResume />);
                            }}
                          >
                            <i class="la la-briefcase"></i>My Resume
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<CandidatesShortlist />);
                            }}
                          >
                            <i class="la la-money"></i>Bookmarked Job
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<CandidatesAppliedJobs />);
                            }}
                            title=""
                          >
                            <i class="la la-paper-plane"></i>Applied Job
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<CandidatesJobAlert />);
                            }}
                          >
                            <i class="la la-user"></i>Job Alerts
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<CandidatesCVCoverLetter />);
                            }}
                          >
                            <i class="la la-file-text"></i>Cv & Cover Letter
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<CandidateChangePassword />);
                            }}
                          >
                            <i class="la la-flash"></i>Change Password
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setComponent(<Subscription />);
                            }}
                          >
                            <i class="la la-flash"></i>Subscription Plans
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
                  <div class="widget">
                    <div class="skill-perc">
                      <h3>Skills Percentage </h3>
                      <p>
                        Put value for "Cover Image" field to increase your skill
                        up to "15%"
                      </p>
                      <div class="skills-bar">
                        <span>85%</span>
                        <div
                          class="second circle"
                          data-size="155"
                          data-thickness="60"
                        ></div>
                      </div>
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

export default CandidateResume;
