import React from "react";
import Footer from "./Footer/Footer";
import ResponsiveHeader from "./Navbar/ResponsiveHeader";
import Forsticky from "./Navbar/Forsticky";
import Login from "./Models/Login";
import Signup from "./Models/Signup";
import { Helmet } from "react-helmet";
const Title = "Home";

const Index = () => {
  return (
    <div>
      {/* <div class="page-loading">
        <img src="./images/loader.gif" alt="" />
      </div> */}
      <Helmet>
        <title>{Title}</title>
      </Helmet>
      <div class="theme-layout" id="scrollup">
        <ResponsiveHeader />
        <Forsticky />
        <section>
          <div class="block no-padding">
            <div class="container fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="main-featured-sec">
                    <div class="new-slide">
                      <img src="images/resource/vector-1.png" />
                    </div>
                    <div class="job-search-sec">
                      <div class="job-search">
                        <h3>The Easiest Way to Get Your New Job</h3>
                        <span>
                          Find Jobs, Employment & Career Opportunities
                        </span>
                        <form>
                          <div class="row">
                            <div class="col-lg-7 col-md-5 col-sm-12 col-xs-12">
                              <div class="job-field">
                                <input
                                  type="text"
                                  placeholder="Job title, keywords or company name"
                                />
                                <i class="la la-keyboard-o"></i>
                              </div>
                            </div>

                            <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                              <div class="job-field">
                                <select
                                  data-placeholder="City, province or region"
                                  class="chosen-city"
                                >
                                  <option>New York </option>
                                  <option>Istanbul</option>
                                  <option>London</option>
                                  <option>Russia</option>
                                </select>
                                <i class="la la-map-marker"></i>
                              </div>
                            </div>
                            <div class="col-lg-1 col-md-2 col-sm-12 col-xs-12">
                              <button type="submit">
                                <i class="la la-search"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                        <div class="or-browser">
                          <span>Browse job offers by</span>
                          <a href="#" title="">
                            Category
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="scroll-to">
                      <a href="#scroll-here" title="">
                        <i class="la la-arrow-down"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="scroll-here">
          <div class="block">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="heading">
                    <h2>Popular Categories</h2>
                    <span>37 jobs live - 0 added today.</span>
                  </div>
                  <div class="cat-sec">
                    <div class="row no-gape">
                      <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="p-category">
                          <a href="#" title="">
                            <i class="la la-bullhorn"></i>
                            <span>Design, Art & Multimedia</span>
                            <p>(22 open positions)</p>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="p-category">
                          <a href="#" title="">
                            <i class="la la-graduation-cap"></i>
                            <span>Education Training</span>
                            <p>(6 open positions)</p>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="p-category">
                          <a href="#" title="">
                            <i class="la la-line-chart "></i>
                            <span>Accounting / Finance</span>
                            <p>(3 open positions)</p>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="p-category">
                          <a href="#" title="">
                            <i class="la la-users"></i>
                            <span>Human Resource</span>
                            <p>(3 open positions)</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cat-sec">
                    <div class="row no-gape">
                      <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="p-category">
                          <a href="#" title="">
                            <i class="la la-phone"></i>
                            <span>Telecommunications</span>
                            <p>(22 open positions)</p>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="p-category">
                          <a href="#" title="">
                            <i class="la la-cutlery"></i>
                            <span>Restaurant / Food Service</span>
                            <p>(6 open positions)</p>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="p-category">
                          <a href="#" title="">
                            <i class="la la-building"></i>
                            <span>Construction / Facilities</span>
                            <p>(3 open positions)</p>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="p-category">
                          <a href="#" title="">
                            <i class="la la-user-md"></i>
                            <span>Health</span>
                            <p>(3 open positions)</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="col-lg-12">
                  <div class="browse-all-cat">
                    <a href="#" title="">
                      Browse All Categories
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="block double-gap-top double-gap-bottom">
            <div
              data-velocity="-.1"
              style={{
                background:
                  "url(./images/resource/parallax1.jpg) repeat scroll 50% 422.28px transparent",
              }}
              class="parallax scrolly-invisible layer color"
            ></div>
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="simple-text-block">
                    <h3>Make a Difference with Your Online Resume!</h3>
                    <span>
                      Your resume in minutes with JobHunt resume assistant is
                      ready!
                    </span>
                    <a href="#" title="">
                      Create an Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="block">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="heading">
                    <h2>Featured Jobs</h2>
                    <span>Leading Employers already using job and talent.</span>
                  </div>
                  <div class="job-listings-sec">
                    <div class="job-listing">
                      <div class="job-title-sec">
                        <div class="c-logo">
                          {" "}
                          <img src="images/resource/l1.png" alt="" />{" "}
                        </div>
                        <h3>
                          <a href="#" title="">
                            Web Designer / Developer
                          </a>
                        </h3>
                        <span>Massimo Artemisis</span>
                      </div>
                      <span class="job-lctn">
                        {/* <i class="la la-map-marker"></i>Sacramento, California */}
                      </span>
                      <span class="fav-job">
                        <i class="la la-heart-o"></i>
                      </span>
                      <span class="job-is ft">FULL TIME</span>
                    </div>
                    <div class="job-listing">
                      <div class="job-title-sec">
                        <div class="c-logo">
                          {" "}
                          <img src="images/resource/l2.png" alt="" />{" "}
                        </div>
                        <h3>
                          <a href="#" title="">
                            Marketing Director
                          </a>
                        </h3>
                        <span>Tix Dog</span>
                      </div>
                      <span class="job-lctn">
                        {/* <i class="la la-map-marker"></i>Rennes, France */}
                      </span>
                      <span class="fav-job">
                        <i class="la la-heart-o"></i>
                      </span>
                      <span class="job-is ft">PART TIME</span>
                    </div>
                    <div class="job-listing">
                      <div class="job-title-sec">
                        <div class="c-logo">
                          {" "}
                          <img src="images/resource/l3.png" alt="" />{" "}
                        </div>
                        <h3>
                          <a href="#" title="">
                            C Developer (Senior) C .Net
                          </a>
                        </h3>
                        <span>StarHealth</span>
                      </div>
                      <span class="job-lctn">
                        {/* <i class="la la-map-marker"></i>London, United Kingdom */}
                      </span>
                      <span class="fav-job">
                        <i class="la la-heart-o"></i>
                      </span>
                      <span class="job-is ft">FULL TIME</span>
                    </div>
                    <div class="job-listing">
                      <div class="job-title-sec">
                        <div class="c-logo">
                          {" "}
                          <img src="images/resource/l4.png" alt="" />{" "}
                        </div>
                        <h3>
                          <a href="#" title="">
                            Application Developer For Android
                          </a>
                        </h3>
                        <span>Altes Bank</span>
                      </div>
                      <span class="job-lctn">
                        {/* <i class="la la-map-marker"></i>Istanbul, Turkey */}
                      </span>
                      <span class="fav-job">
                        <i class="la la-heart-o"></i>
                      </span>
                      <span class="job-is ft">FREELANCE</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="browse-all-cat">
                    <a href="#" title="">
                      Load more listings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div class="block">
            <div
              data-velocity="-.1"
              style={{
                background:
                  "url(images/resource/parallax2.jpg) repeat scroll 50% 422.28px transparent",
              }}
              class="parallax scrolly-invisible layer color light"
            ></div>
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="heading light">
                    <h2>Kind Words From Happy Candidates</h2>
                    <span>
                      What other people thought about the service provided by
                      JobHunt
                    </span>
                  </div>
                  <div class="reviews-sec" id="reviews-carousel">
                    <div class="col-lg-6">
                      <div class="reviews">
                        <img src="images/resource/r1.jpg" alt="" />
                        <h3>
                          Augusta Silva <span>Web designer</span>
                        </h3>
                        <p>
                          Without JobHunt i’d be homeless, they found me a job
                          and got me sorted out quickly with everything! Can’t
                          quite believe the service
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="reviews">
                        <img src="images/resource/r2.jpg" alt="" />
                        <h3>
                          Ali Tufan <span>Web designer</span>
                        </h3>
                        <p>
                          Without JobHunt i’d be homeless, they found me a job
                          and got me sorted out quickly with everything! Can’t
                          quite believe the service
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="reviews">
                        <img src="images/resource/r1.jpg" alt="" />
                        <h3>
                          Augusta Silva <span>Web designer</span>
                        </h3>
                        <p>
                          Without JobHunt i’d be homeless, they found me a job
                          and got me sorted out quickly with everything! Can’t
                          quite believe the service
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="reviews">
                        <img src="images/resource/r2.jpg" alt="" />
                        <h3>
                          Ali Tufan <span>Web designer</span>
                        </h3>
                        <p>
                          Without JobHunt i’d be homeless, they found me a job
                          and got me sorted out quickly with everything! Can’t
                          quite believe the service
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section>
          <div class="block">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="heading">
                    <h2>Companies We've Helped</h2>
                    <span>
                      Some of the companies we've helped recruit excellent
                      applicants over the years.
                    </span>
                  </div>
                  <div class="comp-sec">
                    <div class="company-img">
                      <a href="#" title="">
                        <img src="images/resource/cc1.jpg" alt="" />
                      </a>
                    </div>
                    <div class="company-img">
                      <a href="#" title="">
                        <img src="images/resource/cc2.jpg" alt="" />
                      </a>
                    </div>
                    <div class="company-img">
                      <a href="#" title="">
                        <img src="images/resource/cc3.jpg" alt="" />
                      </a>
                    </div>
                    <div class="company-img">
                      <a href="#" title="">
                        <img src="images/resource/cc4.jpg" alt="" />
                      </a>
                    </div>
                    <div class="company-img">
                      <a href="#" title="">
                        <img src="images/resource/cc5.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div class="block">
            <div
              data-velocity="-.1"
              style={{
                background:
                  "url(images/resource/parallax3.jpg) repeat scroll 50% 422.28px transparent",
              }}
              class="parallax scrolly-invisible no-parallax"
            ></div>
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="heading">
                    <h2>Quick Career Tips</h2>
                    <span>
                      Found by employers communicate directly with hiring
                      managers and recruiters.
                    </span>
                  </div>
                  <div class="blog-sec">
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="my-blog">
                          <div class="blog-thumb">
                            <a href="#" title="">
                              <img src="images/resource/b1.jpg" alt="" />
                            </a>
                            <div class="blog-metas">
                              <a href="#" title="">
                                March 29, 2017
                              </a>
                              <a href="#" title="">
                                0 Comments
                              </a>
                            </div>
                          </div>
                          <div class="blog-details">
                            <h3>
                              <a href="#" title="">
                                Attract More Attention Sales And Profits
                              </a>
                            </h3>
                            <p>
                              A job is a regular activity performed in exchange
                              becoming an employee, volunteering,{" "}
                            </p>
                            <a href="#" title="">
                              Read More <i class="la la-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="my-blog">
                          <div class="blog-thumb">
                            <a href="#" title="">
                              <img src="images/resource/b2.jpg" alt="" />
                            </a>
                            <div class="blog-metas">
                              <a href="#" title="">
                                March 29, 2017
                              </a>
                              <a href="#" title="">
                                0 Comments
                              </a>
                            </div>
                          </div>
                          <div class="blog-details">
                            <h3>
                              <a href="#" title="">
                                11 Tips to Help You Get New Clients
                              </a>
                            </h3>
                            <p>
                              A job is a regular activity performed in exchange
                              becoming an employee, volunteering,{" "}
                            </p>
                            <a href="#" title="">
                              Read More <i class="la la-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="my-blog">
                          <div class="blog-thumb">
                            <a href="#" title="">
                              <img src="images/resource/b3.jpg" alt="" />
                            </a>
                            <div class="blog-metas">
                              <a href="#" title="">
                                March 29, 2017
                              </a>
                              <a href="#" title="">
                                0 Comments
                              </a>
                            </div>
                          </div>
                          <div class="blog-details">
                            <h3>
                              <a href="#" title="">
                                An Overworked Newspaper Editor
                              </a>
                            </h3>
                            <p>
                              A job is a regular activity performed in exchange
                              becoming an employee, volunteering,{" "}
                            </p>
                            <a href="#" title="">
                              Read More <i class="la la-long-arrow-right"></i>
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
        </section> */}

        {/* <section>
          <div class="block no-padding">
            <div class="container fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="simple-text">
                    <h3>Gat a question?</h3>
                    <span>
                      We're here to help. Check out our FAQs, send us an email
                      or call us at 022 6611 9696
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section style={{ marginTop: "40px" }}>
          <div class="block remove-top">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="heading">
                    <h2>How It Works</h2>
                    <span>
                      Each month, more than 7 million MPPL turn to website in
                      their search for work, making over <br />
                      160,000 applications every day.
                    </span>
                  </div>
                  <div class="how-to-sec style2">
                    <div class="how-to">
                      <span class="how-icon">
                        <i class="la la-user"></i>
                      </span>
                      <h3>Register an account</h3>
                      <p>
                        Post a job to tell us about your project. We'll quickly
                        match you with the right freelancers.
                      </p>
                    </div>
                    <div class="how-to">
                      <span class="how-icon">
                        <i class="la la-file-archive-o"></i>
                      </span>
                      <h3>Specify & search your job</h3>
                      <p>
                        Browse profiles, reviews, and proposals then interview
                        top candidates.{" "}
                      </p>
                    </div>
                    <div class="how-to">
                      <span class="how-icon">
                        <i class="la la-list"></i>
                      </span>
                      <h3>Apply for job</h3>
                      <p>
                        Use the MPPL platform to chat, share files, and
                        collaborate from your desktop or on the go.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="block no-padding">
            <div
              data-velocity="-.2"
              style={{
                background:
                  "url(images/resource/parallax7.jpg) repeat scroll 50% 422.28px transparent",
              }}
              class="parallax scrolly-invisible"
            ></div>
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="download-sec">
                    <div class="download-text">
                      <h3>Download & Enjoy</h3>
                      <p>
                        Search, find and apply for jobs directly on your mobile
                        device or desktop Manage all of the jobs you have
                        applied to from a convenience secure dashboard.
                      </p>
                      <ul>
                        <li>
                          <a href="#" title="">
                            <i class="la la-apple"></i>
                            <span>App Store</span>
                            <p>Available now on the</p>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i class="la la-android"></i>
                            <span>Google Play</span>
                            <p>Get in on</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="download-img">
                      <img src="./images/resource/mockup3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section style={{ marginBottom: "30px" }}>
          <div class="block remove-bottom">
            <div
              data-velocity="-.2"
              style={{
                background:
                  "url(images/resource/parallax5.jpg) repeat scroll 50% 422.28px transparent",
              }}
              class="parallax scrolly-invisible"
            ></div>
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="heading">
                    <h2>Buy Our Plans And Packeges</h2>
                    <span>
                      One of our jobs has some kind of flexibility option - such
                      as telecommuting, a part-time schedule or a flexible or
                      flextime schedule.
                    </span>
                  </div>
                  <div class="plans-sec">
                    <div class="row">
                      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="pricetable style2">
                          <div class="pricetable-head">
                            <h3>Basic Jobs</h3>
                            <h2>
                              <i>$</i>10
                            </h2>
                            <span>15 Days</span>
                          </div>
                          <ul>
                            <li>1 job posting</li>
                            <li>0 featured job</li>
                            <li>Job displayed for 20 days</li>
                            <li>Premium Support 24/7</li>
                          </ul>
                          <a href="#" title="">
                            BUY NOW
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="pricetable active style2">
                          <div class="pricetable-head">
                            <h3>Standard Jobs</h3>
                            <h2>
                              <i>$</i>45
                            </h2>
                            <span>20 Days</span>
                          </div>
                          <ul>
                            <li>11 job posting</li>
                            <li>12 featured job</li>
                            <li>Job displayed for 30 days</li>
                            <li>Premium Support 24/7</li>
                          </ul>
                          <a href="#" title="">
                            BUY NOW
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="pricetable style2">
                          <div class="pricetable-head">
                            <h3>Golden Jobs</h3>
                            <h2>
                              <i>$</i>80
                            </h2>
                            <span>2 Month</span>
                          </div>
                          <ul>
                            <li>44 job posting</li>
                            <li>56 featured job</li>
                            <li>Job displayed for 80 days</li>
                            <li>Premium Support 24/7</li>
                          </ul>
                          <a href="#" title="">
                            BUY NOW
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="pricetable style2">
                          <div class="pricetable-head">
                            <h3>Golden Jobs</h3>
                            <h2>
                              <i>$</i>80
                            </h2>
                            <span>2 Month</span>
                          </div>
                          <ul>
                            <li>44 job posting</li>
                            <li>56 featured job</li>
                            <li>Job displayed for 80 days</li>
                            <li>Premium Support 24/7</li>
                          </ul>
                          <a href="#" title="">
                            BUY NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <Footer />
      </div>
      <Login />
      <Signup />
    </div>
  );
};

export default Index;
