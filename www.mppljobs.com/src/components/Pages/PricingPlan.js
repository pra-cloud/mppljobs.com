import React from "react";
import ResponsiveHeader from "../Navbar/ResponsiveHeader";
import Footer from "../Footer/Footer";
import Gradient from "../Navbar/Gradient";
import Login from "../Models/Login";
import Signup from "../Models/Signup";
import { Helmet } from "react-helmet";
const Title = "Pricing Plans";
const PricingPlan = () => {
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
        <Gradient />
        <section>
          <div class="block no-padding  gray">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="inner2">
                    <div class="inner-title2">
                      <h3>Subscription Plans</h3>
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
                            Pricing
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
          <div class="block">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="heading">
                    <h2>Buy Our Plans And Packeges</h2>
                    <span>
                      Lore ipsum totam rem aperiam, eaque ipsa quae ab illo
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit, sed quia consequuntur.
                    </span>
                  </div>
                  <div class="plans-sec">
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="pricetable">
                          <div class="pricetable-head">
                            <h3>Basic Jobs</h3>
                            <h2>
                              <i>₹</i>500
                            </h2>
                            <span>30 Days</span>
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
                      <div class="col-lg-4">
                        <div class="pricetable active">
                          <div class="pricetable-head">
                            <h3>Standard Jobs</h3>
                            <h2>
                              <i>₹</i>
                            </h2>
                            <span>6 Months</span>
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
                      <div class="col-lg-4">
                        <div class="pricetable">
                          <div class="pricetable-head">
                            <h3>Golden Jobs</h3>
                            <h2>
                              <i>₹</i>
                            </h2>
                            <span>1 Year</span>
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
        </section>

        <Footer />
      </div>
      <Login />
      <Signup />
    </div>
  );
};

export default PricingPlan;
