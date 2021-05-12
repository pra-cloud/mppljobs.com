import React from "react";
import Footer from "../Footer/Footer";
import Login from "../Models/Login";
import Signup from "../Models/Signup";
import ResponsiveHeader from "../Navbar/ResponsiveHeader";
import StickTop from "../Navbar/StickTop";

const JobSingle = () => {
  return (
    <div>
      {/* <div class="page-loading">
        <img src="./images/loader.gif" alt="" />
      </div> */}
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
                    <h3>Senior Web Designer</h3>
                    <div class="job-statistic">
                      <span>PART TIME</span>
                      <p>
                        <i class="la la-map-marker"></i> Ajax, Ontario
                      </p>
                      <p>
                        <i class="la la-calendar-o"></i>Posted 1 month ago
                      </p>
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
                <div class="col-lg-8 column">
                  <div class="job-single-sec">
                    <div class="job-single-head2">
                      <div class="job-title2">
                        <h3>Senior Web Designer</h3>
                        <span class="job-is ft">Full time</span>
                        <i class="la la-heart-o"></i>
                      </div>
                      <ul class="tags-jobs">
                        <li>
                          <i class="la la-map-marker"></i> Sacramento,
                          California
                        </li>
                        <li>
                          <i class="la la-money"></i> Monthly Salary :{" "}
                          <span>$</span>
                        </li>
                        <li>
                          <i class="la la-calendar-o"></i> Post Date: January
                          29, 2021
                        </li>
                      </ul>
                      <span>
                        <strong>Roles</strong> : UX/UI Designer, Web Designer,
                        Graphic Designer
                      </span>
                    </div>
                    <div class="job-details">
                      <h3>Job Description</h3>
                      <p>
                        Lorem ipsum Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit.
                      </p>
                      <p>
                        Lorem ipsum Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit.
                      </p>
                      <h3>Required Knowledge, Skills, and Abilities</h3>
                      <p>
                        Lorem ipsum Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit.
                      </p>
                      <h3>Education + Experience</h3>
                      <p>
                        Lorem ipsum Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit.
                      </p>
                    </div>
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
                          <h3>Location</h3>
                          <span>Mumbai</span>
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
                    {/* <div class="share-bar">
                      <span>Share</span>
                      <a href="#" title="" class="share-fb">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#" title="" class="share-twitter">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
                <div class="col-lg-4 column">
                  <div class="job-single-head style2">
                    <div>
                      {" "}
                      <img src="images/resource/sjs.png" alt="" />{" "}
                    </div>
                    <div class="job-head-info">
                      <h4>Two Decimal</h4>
                      <span>274 Seven Sisters Road, London, N4 2HY</span>
                      <p>
                        <i class="la la-unlink"></i> www.jobhunt.com
                      </p>
                      <p>
                        <i class="la la-phone"></i> +90 538 963 54 87
                      </p>
                      <p>
                        <i class="la la-envelope-o"></i>{" "}
                        <a
                          href="https://grandetest.com/cdn-cgi/l/email-protection"
                          class="__cf_email__"
                          data-cfemail="7415181d5a000112151a341e1b161c011a005a171b19"
                        >
                          [email&#160;protected]
                        </a>
                      </p>
                    </div>
                    <a href="#" title="" class="apply-job-btn">
                      <i class="la la-paper-plane"></i>Apply for job
                    </a>
                    {/* <a href="#" title="" class="apply-job-linkedin">
                      <i class="fa fa-linkedin"></i>Apply with Linkedin
                    </a> */}
                    <a href="#" title="" class="viewall-jobs">
                      View all Jobs
                    </a>
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

export default JobSingle;
