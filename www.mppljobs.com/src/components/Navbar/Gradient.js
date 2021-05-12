import React from "react";
import Logo from "../../assets/logo.png";

const Gradient = () => {
  return (
    <header class="gradient">
      <div class="menu-sec">
        <div class="container">
          <div class="logo">
            <a href="/" title="">
              <img height="55px" src={Logo} style={{ marginLeft: "100px" }} />
            </a>
          </div>
          <div class="btn-extars">
            <a href="#" title="" class="post-job-btn">
              <i class="la la-plus"></i>Post Jobs
            </a>
            <ul class="account-btns">
              <li class="signup-popup">
                <a title="">
                  <i class="la la-key"></i> Sign Up
                </a>
              </li>
              <li class="signin-popup">
                <a title="">
                  <i class="la la-external-link-square"></i> Login
                </a>
              </li>
            </ul>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/jobs-list-classic" title="">
                  Jobs
                </a>
                {/* <ul>
                  <li>
                    <a href="index-2.html" title="">
                      Home Layout 1
                    </a>
                  </li>
                  <li>
                    <a href="index2.html" title="">
                      Home Layout 2
                    </a>
                  </li>
                  <li>
                    <a href="index3.html" title="">
                      Home Layout 3
                    </a>
                  </li>
                  <li>
                    <a href="index4.html" title="">
                      Home Layout 4
                    </a>
                  </li>
                  <li>
                    <a href="index5.html" title="">
                      Home Layout 5
                    </a>
                  </li>
                  <li>
                    <a href="index6.html" title="">
                      Home Layout 6
                    </a>
                  </li>
                  <li>
                    <a href="index7.html" title="">
                      Home Layout 7
                    </a>
                  </li>
                  <li>
                    <a href="index8.html" title="">
                      Home Layout 8
                    </a>
                  </li>
                </ul>
               */}
              </li>
              <li>
                <a href="/employer-list" title="">
                  Employers
                </a>
                {/* <ul>
                  <li>
                    <a href="employer_list1.html" title="">
                      {" "}
                      Employer List 1
                    </a>
                  </li>
                  <li>
                    <a href="employer_list2.html" title="">
                      Employer List 2
                    </a>
                  </li>
                  <li>
                    <a href="employer_list3.html" title="">
                      Employer List 3
                    </a>
                  </li>
                  <li>
                    <a href="employer_list4.html" title="">
                      Employer List 4
                    </a>
                  </li>
                  <li>
                    <a href="employer_single1.html" title="">
                      Employer Single 1
                    </a>
                  </li>
                  <li>
                    <a href="employer_single2.html" title="">
                      Employer Single 2
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Employer Dashboard
                    </a>
                    <ul>
                      <li>
                        <a href="employer_manage_jobs.html" title="">
                          Employer Job Manager
                        </a>
                      </li>
                      <li>
                        <a href="employer_packages.html" title="">
                          Employer Packages
                        </a>
                      </li>
                      <li>
                        <a href="employer_post_new.html" title="">
                          Employer Post New
                        </a>
                      </li>
                      <li>
                        <a href="employer_profile.html" title="">
                          Employer Profile
                        </a>
                      </li>
                      <li>
                        <a href="employer_resume.html" title="">
                          Employer Resume
                        </a>
                      </li>
                      <li>
                        <a href="employer_transactions.html" title="">
                          Employer Transaction
                        </a>
                      </li>
                      <li>
                        <a href="employer_job_alert.html" title="">
                          Employer Job Alert
                        </a>
                      </li>
                      <li>
                        <a href="employer_change_password.html" title="">
                          Employer Change Password
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
               */}
              </li>
              <li>
                <a href="/candidate-list" title="">
                  Candidates
                </a>
                {/* <ul>
                  <li>
                    <a href="candidates_list.html" title="">
                      Candidates List 1
                    </a>
                  </li>
                  <li>
                    <a href="candidates_list2.html" title="">
                      Candidates List 2
                    </a>
                  </li>
                  <li>
                    <a href="candidates_list3.html" title="">
                      Candidates List 3
                    </a>
                  </li>
                  <li>
                    <a href="candidates_single.html" title="">
                      Candidates Single 1
                    </a>
                  </li>
                  <li>
                    <a href="candidates_single2.html" title="">
                      Candidates Single 2
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Candidates Dashboard
                    </a>
                    <ul>
                      <li>
                        <a href="candidates_my_resume.html" title="">
                          Candidates Resume
                        </a>
                      </li>
                      <li>
                        <a href="candidates_my_resume_add_new.html" title="">
                          Candidates Resume new
                        </a>
                      </li>
                      <li>
                        <a href="candidates_profile.html" title="">
                          Candidates Profile
                        </a>
                      </li>
                      <li>
                        <a href="candidates_shortlist.html" title="">
                          Candidates Shortlist
                        </a>
                      </li>
                      <li>
                        <a href="candidates_job_alert.html" title="">
                          Candidates Job Alert
                        </a>
                      </li>
                      <li>
                        <a href="candidates_dashboard.html" title="">
                          Candidates Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="candidates_cv_cover_letter.html" title="">
                          CV Cover Letter
                        </a>
                      </li>
                      <li>
                        <a href="candidates_change_password.html" title="">
                          Change Password
                        </a>
                      </li>
                      <li>
                        <a href="candidates_applied_jobs.html" title="">
                          Candidates Applied Jobs
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
               */}
              </li>
              <li>
                <a href="/webinars-list" title="">
                  Webinars
                </a>
                {/* <ul>
                  <li>
                    <a href="blog_list.html"> Blog List 1</a>
                  </li>
                  <li>
                    <a href="blog_list2.html">Blog List 2</a>
                  </li>
                  <li>
                    <a href="blog_list3.html">Blog List 3</a>
                  </li>
                  <li>
                    <a href="blog_single.html">Blog Single</a>
                  </li>
                </ul>
               */}
              </li>
              <li>
                <a href="/notes-list" title="">
                  Notes
                </a>
                {/* <ul>
                  <li>
                    <a href="job_list_classic.html">Job List Classic</a>
                  </li>
                  <li>
                    <a href="job_list_grid.html">Job List Grid</a>
                  </li>
                  <li>
                    <a href="job_list_modern.html">Job List Modern</a>
                  </li>
                  <li>
                    <a href="job_single1.html">Job Single 1</a>
                  </li>
                  <li>
                    <a href="job_single2.html">Job Single 2</a>
                  </li>
                  <li>
                    <a href="job-single3.html">Job Single 3</a>
                  </li>
                </ul>
               */}
              </li>
              <li>
                <a href="/about-us" title="">
                  About Us
                </a>
                {/* <ul>
                  <li>
                    <a href="about.html" title="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="404.html" title="">
                      404 Error
                    </a>
                  </li>
                  <li>
                    <a href="contact.html" title="">
                      Contact Us 1
                    </a>
                  </li>
                  <li>
                    <a href="contact2.html" title="">
                      Contact Us 2
                    </a>
                  </li>
                  <li>
                    <a href="faq.html" title="">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="how_it_works.html" title="">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="login.html" title="">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="pricing.html" title="">
                      Pricing Plans
                    </a>
                  </li>
                  <li>
                    <a href="register.html" title="">
                      Register
                    </a>
                  </li>
                  <li>
                    <a href="terms_and_condition.html" title="">
                      Terms & Condition
                    </a>
                  </li>
                </ul>
               */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Gradient;
