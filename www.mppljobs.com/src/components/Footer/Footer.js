import React from "react";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="block">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 column">
                <div class="widget">
                  <div class="about_widget">
                    <div class="logo">
                      <a href="/" title="">
                        <img src={Logo} alt="" height="60px" />
                      </a>
                    </div>
                    <span>
                      201-206, Shiv Smriti, 2nd Floor, 49A, Dr. Annie Besant
                      Road, Above Corporation Bank, Worli, Mumbai, Maharashtra
                      400018
                    </span>
                    <span>022 6611 9696</span>
                    <span>
                      <a
                        href="https://grandetest.com/cdn-cgi/l/email-protection"
                        class="__cf_email__"
                        data-cfemail="e68f888089a68c89848e938892c885898b"
                      >
                        [email&#160;protected]
                      </a>
                    </span>
                    <div class="social">
                      <a href="#" title="">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#" title="">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#" title="">
                        <i class="fa fa-linkedin"></i>
                      </a>
                      <a href="#" title="">
                        <i class="fa fa-pinterest"></i>
                      </a>
                      <a href="#" title="">
                        <i class="fa fa-behance"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 column">
                <div class="widget">
                  <h3 class="footer-title">MPPL Zone</h3>
                  <div class="link_widgets">
                    <div class="row">
                      <div class="col-lg-6">
                        <a href="#" title="">
                          Jobs{" "}
                        </a>
                        <a href="#" title="">
                          Webinars
                        </a>
                        <a href="#" title="">
                          Notes{" "}
                        </a>
                        <a href="#" title="">
                          Consulants{" "}
                        </a>
                        <a href="#" title="">
                          About Us{" "}
                        </a>
                        <a href="#" title="">
                          Contact Us{" "}
                        </a>
                      </div>
                      <div class="col-lg-6">
                        <a href="#" title="">
                          Terms & Conditions{" "}
                        </a>
                        <a href="#" title="">
                          Privacy Policy{" "}
                        </a>
                        <a href="#" title="">
                          Subscription Plans{" "}
                        </a>
                        <a href="#" title="">
                          FAQ's{" "}
                        </a>
                        <a href="#" title="">
                          Brochure{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="col-lg-2 column">
                <div class="widget">
                  <h3 class="footer-title">Find Jobs</h3>
                  <div class="link_widgets">
                    <div class="row">
                      <div class="col-lg-12">
                        <a href="#" title=""></a>
                        <a href="#" title="">
                          Canada Jobs
                        </a>
                        <a href="#" title="">
                          UK Jobs
                        </a>
                        <a href="#" title="">
                          Emplois en Fnce
                        </a>
                        <a href="#" title="">
                          Jobs in Deuts
                        </a>
                        <a href="#" title="">
                          Vacatures China
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               */}
              <div class="col-lg-3 column">
                <div class="widget">
                  <div class="download_widget">
                    <a href="#" title="">
                      <img src="images/resource/dw1.png" alt="" />
                    </a>
                    <a href="#" title="">
                      <img src="images/resource/dw2.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-line">
          <span>© 2021 Mangalam Placement Pvt. Ltd. All rights reserved</span>
          <a href="#scrollup" class="scrollup" title="">
            <i class="la la-arrow-up"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
