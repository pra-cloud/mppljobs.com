import React from "react";
import Footer from "../../Footer/Footer";
import Login from "../../Models/Login";
import Signup from "../../Models/Signup";
import ResponsiveHeader from "../../Navbar/ResponsiveHeader";
import StickTop from "../../Navbar/StickTop";
import { Helmet } from "react-helmet";
const Title = "Consultants";

const Consultant = () => {
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
              // style={{
              //   background: URL("images/resource/mslider1.jpg"),
              // }}
              class="parallax scrolly-invisible no-parallax"
            ></div>
            <div class="container fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="inner-header">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="skills-btn">
                            <a href="#" title="">
                              Photoshop
                            </a>
                            <a href="#" title="">
                              Designers
                            </a>
                            <a href="#" title="">
                              Illustrator
                            </a>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="action-inner">
                            <a href="#" title="">
                              <i class="la la-paper-plane"></i>Save Resume
                            </a>
                            <a href="#" title="">
                              <i class="la la-envelope-o"></i>Contact David
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="overlape">
          <div class="block remove-top">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="cand-single-user">
                    <div class="share-bar circle">
                      <a href="#" title="" class="share-google">
                        <i class="la la-google"></i>
                      </a>
                      <a href="#" title="" class="share-fb">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#" title="" class="share-twitter">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
                    <div class="can-detail-s">
                      <div class="cst">
                        <img src="images/resource/es1.jpg" alt="" />
                      </div>
                      <h3>David CARLOS</h3>
                      <span>
                        <i>UX / UI Designer</i> at Atract Solutions
                      </span>
                      <p>
                        <a
                          href="https://grandetest.com/cdn-cgi/l/email-protection"
                          class="__cf_email__"
                          data-cfemail="c0a3b2a5a1b4a9b6a5aca1b9a5b2b3f0f8f880a7ada1a9aceea3afad"
                        >
                          [email&#160;protected]
                        </a>
                      </p>
                      <p>Member Since, 2017</p>
                      <p>
                        <i class="la la-map-marker"></i>Istanbul / Turkey
                      </p>
                    </div>
                    <div class="download-cv">
                      <a href="#" title="">
                        Download CV <i class="la la-download"></i>
                      </a>
                    </div>
                  </div>
                  <ul class="cand-extralink">
                    <li>
                      <a href="#about" title="">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#education" title="">
                        Education
                      </a>
                    </li>
                    <li>
                      <a href="#experience" title="">
                        Work Experience
                      </a>
                    </li>
                    <li>
                      <a href="#portfolio" title="">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#skills" title="">
                        Professional Skills
                      </a>
                    </li>
                    <li>
                      <a href="#awards" title="">
                        Awards
                      </a>
                    </li>
                  </ul>
                  <div class="cand-details-sec">
                    <div class="row">
                      <div class="col-lg-8 column">
                        <div class="cand-details" id="about">
                          <h2>Candidates About</h2>
                          <p>
                            Hello my name is Mark William Connor and I’m a Web
                            Designer & Web Developer from Melbourne, Australia.
                            In pharetra orci dignissim, blandit mi semper,
                            ultricies diam. Suspendisse malesuada suscipit nunc
                            non volutpat. Sed porta nulla id orci laoreet tempor
                            non consequat enim. Sed vitae aliquam velit. Aliquam
                            ante erat, blandit at pretium et, accumsan ac est.
                            Integer vehicula rhoncus molestie. Morbi ornare
                            ipsum sed sem condimentum, et pulvinar tortor
                            luctus. Suspendisse condimentum lorem ut elementum
                            aliquam.{" "}
                          </p>
                          <p>
                            Mauris nec erat ut libero vulputate pulvinar.
                            Aliquam ante erat, blandit at pretium et, accumsan
                            ac est. Integer vehicula rhoncus molestie. Morbi
                            ornare ipsum sed sem condimentum, et pulvinar tortor
                            luctus. Suspendisse condimentum lorem ut elementum
                            aliquam. Mauris nec erat ut libero vulputate
                            pulvinar.
                          </p>
                          <div class="edu-history-sec" id="education">
                            <h2>Education</h2>
                            <div class="edu-history">
                              <i class="la la-graduation-cap"></i>
                              <div class="edu-hisinfo">
                                <h3>University</h3>
                                <i>2008 - 2012</i>
                                <span>
                                  Middle East Technical University{" "}
                                  <i>Computer Science</i>
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Proin a ipsum tellus.
                                  Interdum et malesuada fames ac ante ipsum
                                  primis in faucibus.
                                </p>
                              </div>
                            </div>
                            <div class="edu-history">
                              <i class="la la-graduation-cap"></i>
                              <div class="edu-hisinfo">
                                <h3>High School</h3>
                                <i>2008 - 2012</i>
                                <span>
                                  Tomms College <i>Bachlors in Fine Arts</i>
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Proin a ipsum tellus.
                                  Interdum et malesuada fames ac ante ipsum
                                  primis in faucibus.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="edu-history-sec" id="experience">
                            <h2>Work & Experience</h2>
                            <div class="edu-history style2">
                              <i></i>
                              <div class="edu-hisinfo">
                                <h3>
                                  Web Designer <span>Inwave Studio</span>
                                </h3>
                                <i>2008 - 2012</i>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Proin a ipsum tellus.
                                  Interdum et malesuada fames ac ante ipsum
                                  primis in faucibus.
                                </p>
                              </div>
                            </div>
                            <div class="edu-history style2">
                              <i></i>
                              <div class="edu-hisinfo">
                                <h3>
                                  CEO Founder <span>Inwave Studio</span>
                                </h3>
                                <i>2008 - 2012</i>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Proin a ipsum tellus.
                                  Interdum et malesuada fames ac ante ipsum
                                  primis in faucibus.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="mini-portfolio" id="portfolio">
                            <h2>Portfolio</h2>
                            <div class="mp-row">
                              <div class="mp-col">
                                <div class="mportolio">
                                  <img src="images/resource/p1.jpg" alt="" />
                                  <a href="#" title="">
                                    <i class="la la-search"></i>
                                  </a>
                                </div>
                              </div>
                              <div class="mp-col">
                                <div class="mportolio">
                                  <img src="images/resource/p2.jpg" alt="" />
                                  <a href="#" title="">
                                    <i class="la la-search"></i>
                                  </a>
                                </div>
                              </div>
                              <div class="mp-col">
                                <div class="mportolio">
                                  <img src="images/resource/p3.jpg" alt="" />
                                  <a href="#" title="">
                                    <i class="la la-search"></i>
                                  </a>
                                </div>
                              </div>
                              <div class="mp-col">
                                <div class="mportolio">
                                  <img src="images/resource/p4.jpg" alt="" />
                                  <a href="#" title="">
                                    <i class="la la-search"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="progress-sec" id="skills">
                            <h2>Professional Skills</h2>
                            <div class="progress-sec">
                              <span>Adobe Photoshop</span>
                              <div class="progressbar">
                                {" "}
                                <div class="progress" style={{ width: "80%" }}>
                                  <span>80%</span>
                                </div>{" "}
                              </div>
                            </div>
                            <div class="progress-sec">
                              <span>Production In Html</span>
                              <div class="progressbar">
                                {" "}
                                <div class="progress" style={{ width: "60%" }}>
                                  <span>60%</span>
                                </div>{" "}
                              </div>
                            </div>
                            <div class="progress-sec">
                              <span>Graphic Design</span>
                              <div class="progressbar">
                                {" "}
                                <div class="progress" style={{ width: "75%" }}>
                                  <span>75%</span>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="edu-history-sec" id="awards">
                            <h2>Awards</h2>
                            <div class="edu-history style2">
                              <i></i>
                              <div class="edu-hisinfo">
                                <h3>Perfect Attendance Programs</h3>
                                <i>2008 - 2012</i>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Proin a ipsum tellus.
                                  Interdum et malesuada fames ac ante ipsum
                                  primis in faucibus.
                                </p>
                              </div>
                            </div>
                            <div class="edu-history style2">
                              <i></i>
                              <div class="edu-hisinfo">
                                <h3>Top Performer Recognition</h3>
                                <i>2008 - 2012</i>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Proin a ipsum tellus.
                                  Interdum et malesuada fames ac ante ipsum
                                  primis in faucibus.
                                </p>
                              </div>
                            </div>
                            <div class="edu-history style2">
                              <i></i>
                              <div class="edu-hisinfo">
                                <h3>King LLC</h3>
                                <i>2008 - 2012</i>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Proin a ipsum tellus.
                                  Interdum et malesuada fames ac ante ipsum
                                  primis in faucibus.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="companyies-fol-sec">
                            <h2>Companies Followed By</h2>
                            <div class="cmp-follow">
                              <div class="row">
                                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                                  <a href="#" title="">
                                    <img src="images/resource/em1.jpg" alt="" />
                                    <span>King LLC</span>
                                  </a>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                                  <a href="#" title="">
                                    <img src="images/resource/em2.jpg" alt="" />
                                    <span>Telimed</span>
                                  </a>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                                  <a href="#" title="">
                                    <img src="images/resource/em3.jpg" alt="" />
                                    <span>Ucesas</span>
                                  </a>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                                  <a href="#" title="">
                                    <img src="images/resource/em4.jpg" alt="" />
                                    <span>TeraPlaner</span>
                                  </a>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                                  <a href="#" title="">
                                    <img src="images/resource/em5.jpg" alt="" />
                                    <span>Cubico</span>
                                  </a>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                                  <a href="#" title="">
                                    <img src="images/resource/em6.jpg" alt="" />
                                    <span>Airbnb</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 column">
                        <div class="job-overview">
                          <h3>Job Overview</h3>
                          <ul>
                            <li>
                              <i class="la la-money"></i>
                              <h3>Offerd Salary</h3>
                              <span>£15,000 - £20,000</span>
                            </li>
                            <li>
                              <i class="la la-mars-double"></i>
                              <h3>Gender</h3>
                              <span>Female</span>
                            </li>
                            <li>
                              <i class="la la-thumb-tack"></i>
                              <h3>Career Level</h3>
                              <span>Executive</span>
                            </li>
                            <li>
                              <i class="la la-puzzle-piece"></i>
                              <h3>Industry</h3>
                              <span>Management</span>
                            </li>
                            <li>
                              <i class="la la-shield"></i>
                              <h3>Experience</h3>
                              <span>2 Years</span>
                            </li>
                            <li>
                              <i class="la la-line-chart "></i>
                              <h3>Qualification</h3>
                              <span>Bachelor Degree</span>
                            </li>
                          </ul>
                        </div>
                        <div class="quick-form-job">
                          <h3>Contact</h3>
                          <form>
                            <input
                              type="text"
                              placeholder="Enter your Name *"
                            />
                            <input type="text" placeholder="Email Address*" />
                            <input type="text" placeholder="Phone Number" />
                            <textarea placeholder="Message should have more than 50 characters"></textarea>
                            <button class="submit">Send Email</button>
                            <span>
                              You accepts our{" "}
                              <a href="#" title="">
                                Terms and Conditions
                              </a>
                            </span>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Consultant;
