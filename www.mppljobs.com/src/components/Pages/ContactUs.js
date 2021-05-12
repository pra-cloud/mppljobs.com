import React from "react";
import Footer from "../Footer/Footer";
import Login from "../Models/Login";
import Signup from "../Models/Signup";
import Gradient from "../Navbar/Gradient";
import ResponsiveHeader from "../Navbar/ResponsiveHeader";
import { Helmet } from "react-helmet";
const Title = "Contact Us";

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
        <Gradient />
        <section>
          <div class="block no-padding  gray">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div>
                    <div class="inner-title2">
                      <h3>Contact Us</h3>
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
                            Contact
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
                <div class="col-lg-6 column">
                  <div class="contact-form">
                    {/* <h3>Contact Us</h3> */}
                    <form>
                      <div class="row">
                        <div class="col-lg-12">
                          <span class="pf-title">Full Name</span>
                          <div class="pf-field">
                            <input type="text" placeholder="ALi TUFAN" />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <span class="pf-title">Email</span>
                          <div class="pf-field">
                            <input type="text" placeholder="ALi TUFAN" />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <span class="pf-title">Subject</span>
                          <div class="pf-field">
                            <input type="text" placeholder="ALi TUFAN" />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <span class="pf-title">Message</span>
                          <div class="pf-field">
                            <textarea></textarea>
                          </div>
                        </div>
                        <div class="col-lg-12 contact-textinfo">
                          <a class="fill" href="#" title="">
                            Send
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-6 column">
                  <div class="contact-textinfo">
                    <h3>MPPL Office</h3>
                    <ul>
                      <li>
                        <i class="la la-map-marker"></i>
                        <span>
                          Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan,
                          New York 10282{" "}
                        </span>
                      </li>
                      <li>
                        <i class="la la-phone"></i>
                        <span>Call Us : 0934 343 343</span>
                      </li>
                      {/* <li>
                        <i class="la la-fax"></i>
                        <span>Fax : 0934 343 343</span>
                      </li> */}
                      <li>
                        <i class="la la-envelope-o"></i>
                        <span>
                          Email :{" "}
                          <a
                            href="https://grandetest.com/cdn-cgi/l/email-protection"
                            class="__cf_email__"
                            data-cfemail="94fdfaf2fbd4fefbf6fce1fae0baf7fbf9"
                          >
                            [email&#160;protected]
                          </a>
                        </span>
                      </li>
                    </ul>
                    <a class="fill" href="#" title="">
                      See on Map
                    </a>
                    <a href="#" title="">
                      Directions
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

export default ContactUs;
