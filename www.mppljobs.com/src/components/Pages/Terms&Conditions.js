import React from "react";
import Footer from "../Footer/Footer";
import Login from "../Models/Login";
import Signup from "../Models/Signup";
import Gradient from "../Navbar/Gradient";
import ResponsiveHeader from "../Navbar/ResponsiveHeader";
import { Helmet } from "react-helmet";
const Title = "Terms & Conditions";

const TermsConditions = () => {
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
                      <h3>Terms and Conditions</h3>
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
                    </div> */}
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
                  <div class="terms-conditions">
                    <div class="terms">
                      <h2>1. Terms</h2>
                      <p>
                        Lorem ipsum Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut labore et dolore
                        magnam aliquam quaerat voluptatem. Ut enim ad minima
                        veniam.
                      </p>
                    </div>
                    <div class="terms">
                      <h2>2. Limitations</h2>
                      <p>
                        Lorem ipsum Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut labore et dolore
                        magnam aliquam quaerat voluptatem. Ut enim ad minima
                        veniam.
                      </p>
                    </div>
                    <div class="terms">
                      <h2>3. Revisions and Errata</h2>
                      <p>
                        Lorem ipsum Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut labore et dolore
                        magnam aliquam quaerat voluptatem. Ut enim ad minima
                        veniam.
                      </p>
                    </div>
                    <div class="terms">
                      <h2>4. Site Terms of Use Modifications</h2>
                      <p>
                        Lorem ipsum Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut labore et dolore
                        magnam aliquam quaerat voluptatem. Ut enim ad minima
                        veniam.{" "}
                      </p>
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

export default TermsConditions;
