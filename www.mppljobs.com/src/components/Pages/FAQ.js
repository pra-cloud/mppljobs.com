import React from "react";
import Footer from "../Footer/Footer";
import Login from "../Models/Login";
import Signup from "../Models/Signup";
import Gradient from "../Navbar/Gradient";
import ResponsiveHeader from "../Navbar/ResponsiveHeader";
import { Helmet } from "react-helmet";
const Title = "FAQ's";

const FAQ = () => {
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
                      <h3>Faq</h3>
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
                            Faq
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
                  <div class="faqs">
                    <div class="faq-box">
                      <h2>
                        What is a dummy text? <i class="la la-minus"></i>
                      </h2>
                      <div class="contentbox">
                        <p>
                          Designer at work who don???t have any content for their
                          product yet have the possibility to insert a dummy
                          text into their design to judge on the arrangement of
                          text on their site, on readability or on fonts and
                          sizes. A dummy text is also helpful to present a
                          design without content to a client to show how the
                          text is going to look like without irritating the
                          client by real texts.
                        </p>
                      </div>
                    </div>
                    <div class="faq-box">
                      <h2>
                        Why another dummy text generator?{" "}
                        <i class="la la-minus"></i>
                      </h2>
                      <div class="contentbox">
                        <p>
                          Designer at work who don???t have any content for their
                          product yet have the possibility to insert a dummy
                          text into their design to judge on the arrangement of
                          text on their site, on readability or on fonts and
                          sizes. A dummy text is also helpful to present a
                          design without content to a client to show how the
                          text is going to look like without irritating the
                          client by real texts.
                        </p>
                      </div>
                    </div>
                    <div class="faq-box">
                      <h2>
                        Why doesn???t the generator put as many characters as I
                        told him? <i class="la la-minus"></i>
                      </h2>
                      <div class="contentbox">
                        <p>
                          Designer at work who don???t have any content for their
                          product yet have the possibility to insert a dummy
                          text into their design to judge on the arrangement of
                          text on their site, on readability or on fonts and
                          sizes. A dummy text is also helpful to present a
                          design without content to a client to show how the
                          text is going to look like without irritating the
                          client by real texts.
                        </p>
                      </div>
                    </div>
                    <div class="faq-box">
                      <h2>
                        What means ???Print special chars as HTML entities????{" "}
                        <i class="la la-minus"></i>
                      </h2>
                      <div class="contentbox">
                        <p>
                          Designer at work who don???t have any content for their
                          product yet have the possibility to insert a dummy
                          text into their design to judge on the arrangement of
                          text on their site, on readability or on fonts and
                          sizes. A dummy text is also helpful to present a
                          design without content to a client to show how the
                          text is going to look like without irritating the
                          client by real texts.
                        </p>
                      </div>
                    </div>
                    <div class="faq-box">
                      <h2>
                        Why is a template text recommended to be as long as
                        possible? <i class="la la-minus"></i>
                      </h2>
                      <div class="contentbox">
                        <p>
                          Designer at work who don???t have any content for their
                          product yet have the possibility to insert a dummy
                          text into their design to judge on the arrangement of
                          text on their site, on readability or on fonts and
                          sizes. A dummy text is also helpful to present a
                          design without content to a client to show how the
                          text is going to look like without irritating the
                          client by real texts.
                        </p>
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

export default FAQ;
