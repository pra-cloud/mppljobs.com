import React from "react";
import Footer from "../Footer/Footer";
import Login from "../Models/Login";
import Signup from "../Models/Signup";
import ResponsiveHeader from "../Navbar/ResponsiveHeader";
import White from "../Navbar/White";
import { Helmet } from "react-helmet";
const Title = "About Us";
const ContactUs = () => {
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
        <White />
        <section>
          <div class="block no-padding  gray">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="inner2">
                    <div class="inner-title2">
                      <h3>About Us</h3>
                      {/* <span>Keep up to date with the latest news</span> */}
                    </div>
                    {/* <div class="page-breacrumbs">
                      <ul class="breadcrumbs">
                        <li>
                          <a href="#" title="">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Pages
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            About Us
                          </a>
                        </li>
                      </ul>
                    </div>
                   */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="block ">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="how-works">
                    <div class="how-workimg">
                      <img src="images/resource/hw1.jpg" alt="" />
                    </div>
                    <div class="how-work-detail">
                      <div class="how-work-box">
                        <span>1</span>
                        <i class="la la-user"></i>
                        <h3>Register an account</h3>
                        <p>
                          inJob is the leading and longest-running online
                          recruitment in Turkey. We understand that job-seekers
                          come to us not only for a job, but for an pportunity
                          to realize their professional.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="how-works flip">
                    <div class="how-workimg">
                      <img src="images/resource/hw2.jpg" alt="" />
                    </div>
                    <div class="how-work-detail">
                      <div class="how-work-box how-work-box-left">
                        <span>2</span>
                        <i class="la la-file-text"></i>
                        <h3>Specify & Search Your Job</h3>
                        <p style={{ textAlign: "left" }}>
                          You’ll receive applications via email. You can also
                          manage jobs and candidates from your Indeed dashboard.
                          Review applications, Schedule interviews and view
                          recommended candidates all from one place.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="how-works">
                    <div class="how-workimg">
                      <img src="images/resource/hw3.jpg" alt="" />
                    </div>
                    <div class="how-work-detail">
                      <div class="how-work-box">
                        <span>3</span>
                        <i class="la la-pencil"></i>
                        <h3>Apply For Job</h3>
                        <p>
                          inJob is the leading and longest-running online
                          recruitment in Turkey. We understand that job-seekers
                          come to us not only for a job, but for an pportunity
                          to realize their professional.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div class="block">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="about-us">
                    <div class="row">
                      <div class="col-lg-12">
                        <h3>About Job Hunt</h3>
                      </div>
                      <div class="col-lg-7">
                        <p>
                          Lorem ipsum Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                          Ut enim ad minima veniam.{" "}
                        </p>
                        <p>
                          Lorem ipsum Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                          Ut enim ad minima veniam.
                        </p>
                      </div>
                      <div class="col-lg-5">
                        <img src="images/resource/bsd1.jpg" alt="" />
                      </div>
                      <div class="col-lg-12">
                        <p>
                          Lorem ipsum Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                          Ut enim ad minima veniam.{" "}
                        </p>
                        <p>
                          Lorem ipsum Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                          Ut enim ad minima veniam.
                        </p>
                      </div>
                    </div>
                    <div class="tags-share">
                      <div class="share-bar">
                        <a href="#" title="" class="share-fb">
                          <i class="fa fa-facebook"></i>
                        </a>
                        <a href="#" title="" class="share-twitter">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#" title="" class="share-google">
                          <i class="la la-google"></i>
                        </a>
                        <span>Share</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section>
          <div class="block remove-top">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="our-services">
                    <div class="row">
                      <div class="col-lg-12">
                        <h2>Our Service</h2>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div class="service">
                          <i class="la la-clock-o"></i>
                          <div class="service-info">
                            <h3>Advertise A Job</h3>
                            <p>
                              Duis a tristique lacus. Donec vehicula ante id
                              lorem venenatis posuere. Morbi in lectus.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div class="service">
                          <i class="la la-search"></i>
                          <div class="service-info">
                            <h3>CV Search</h3>
                            <p>
                              Duis a tristique lacus. Donec vehicula ante id
                              lorem venenatis posuere. Morbi in lectus.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div class="service">
                          <i class="la la-user"></i>
                          <div class="service-info">
                            <h3>Recruiter Profiles</h3>
                            <p>
                              Duis a tristique lacus. Donec vehicula ante id
                              lorem venenatis posuere. Morbi in lectus.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div class="service">
                          <i class="la la-codepen"></i>
                          <div class="service-info">
                            <h3>Temp Search</h3>
                            <p>
                              Duis a tristique lacus. Donec vehicula ante id
                              lorem venenatis posuere. Morbi in lectus.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div class="service">
                          <i class="la la-tv"></i>
                          <div class="service-info">
                            <h3>Display Jobs</h3>
                            <p>
                              Duis a tristique lacus. Donec vehicula ante id
                              lorem venenatis posuere. Morbi in lectus.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div class="service">
                          <i class="la la-diamond"></i>
                          <div class="service-info">
                            <h3>For Agencies</h3>
                            <p>
                              Duis a tristique lacus. Donec vehicula ante id
                              lorem venenatis posuere. Morbi in lectus.
                            </p>
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

        <section>
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
        </section>

        <section>
          <div class="block">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="stats-sec style2">
                    <div class="row">
                      <div class="col-lg-3  col-md-3 col-sm-6 col-xs-6">
                        <div class="stats">
                          <span>18</span>
                          <h5>Jobs Posted</h5>
                        </div>
                      </div>
                      <div class="col-lg-3  col-md-3 col-sm-6 col-xs-6">
                        <div class="stats">
                          <span>38</span>
                          <h5>Jobs Filled</h5>
                        </div>
                      </div>
                      <div class="col-lg-3  col-md-3 col-sm-6 col-xs-6">
                        <div class="stats">
                          <span>67</span>
                          <h5>Companies</h5>
                        </div>
                      </div>
                      <div class="col-lg-3  col-md-3 col-sm-6 col-xs-6">
                        <div class="stats">
                          <span>92</span>
                          <h5>Members</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
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

        <Footer />
      </div>
      <Login />
      <Signup />
    </div>
  );
};

export default ContactUs;
