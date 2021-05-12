import React from "react";

const CandidatesProfile = () => {
  return (
    <div class="col-lg-9 column">
      <div class="padding-left">
        <div class="profile-title">
          <h3>My Profile</h3>
          <div class="upload-img-bar">
            <span class="round">
              <img src="images/resource/mpf1.jpg" alt="" />
              <i>x</i>
            </span>
            <div class="upload-info">
              <a href="#" title="">
                Browse
              </a>
              <span>
                Max file size is 1MB, Minimum dimension: 270x210 And Suitable
                files are .jpg & .png
              </span>
            </div>
          </div>
          {/* <div class="upload-img-bar">
            <span class="round">
              <img src="images/resource/mpf1.jpg" alt="" />
              <i>x</i>
            </span>
            <div class="upload-info">
              <a href="#" title="">
                Browse
              </a>
              <span>
                Max file size is 1MB, Minimum dimension: 270x210 And Suitable
                files are .jpg & .png
              </span>
            </div>
          </div> */}
        </div>
        <div class="profile-form-edit">
          <form>
            <div class="row">
              <div class="col-lg-6">
                <span class="pf-title">Name</span>
                <div class="pf-field">
                  <input type="text" placeholder="Sample Name" />
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Email</span>
                <div class="pf-field">
                  <input type="text" placeholder="Sample Email" />
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Contact Number</span>
                <div class="pf-field">
                  <input type="text" placeholder="Sample Contact Number" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3" style={{ marginLeft: "-50px" }}>
                <button type="submit">Submit</button>
              </div>
              <div class="col-lg-3" style={{ marginLeft: "-80px" }}>
                <button type="submit">Cancel</button>
              </div>
            </div>
          </form>
        </div>
        {/* <div class="social-edit">
          <h3>Social Edit</h3>
          <form>
            <div class="row">
              <div class="col-lg-6">
                <span class="pf-title">Facebook</span>
                <div class="pf-field">
                  <input
                    type="text"
                    placeholder="www.facebook.com/TeraPlaner"
                  />
                  <i class="fa fa-facebook"></i>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Twitter</span>
                <div class="pf-field">
                  <input type="text" placeholder="www.twitter.com/TeraPlaner" />
                  <i class="fa fa-twitter"></i>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Google</span>
                <div class="pf-field">
                  <input
                    type="text"
                    placeholder="www.google-plus.com/TeraPlaner"
                  />
                  <i class="la la-google"></i>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Linkedin</span>
                <div class="pf-field">
                  <input
                    type="text"
                    placeholder="www.Linkedin.com/TeraPlaner"
                  />
                  <i class="fa fa-linkedin"></i>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="contact-edit">
          <h3>Contact</h3>
          <form>
            <div class="row">
              <div class="col-lg-4">
                <span class="pf-title">Phone Number</span>
                <div class="pf-field">
                  <input type="text" placeholder="+90 538 963 58 96" />
                </div>
              </div>
              <div class="col-lg-4">
                <span class="pf-title">Email</span>
                <div class="pf-field">
                  <input type="text" placeholder="demo@jobhunt.com" />
                </div>
              </div>
              <div class="col-lg-4">
                <span class="pf-title">Website</span>
                <div class="pf-field">
                  <input type="text" placeholder="www.jobhun.com" />
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Country</span>
                <div class="pf-field">
                  <select
                    data-placeholder="Please Select Specialism"
                    class="chosen"
                  >
                    <option>Web Development</option>
                    <option>Web Designing</option>
                    <option>Art & Culture</option>
                    <option>Reading & Writing</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">City</span>
                <div class="pf-field">
                  <select
                    data-placeholder="Please Select Specialism"
                    class="chosen"
                  >
                    <option>Web Development</option>
                    <option>Web Designing</option>
                    <option>Art & Culture</option>
                    <option>Reading & Writing</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Find On Map</span>
                <div class="pf-field">
                  <input
                    type="text"
                    placeholder="Collins Street West, Victoria 8007, Australia."
                  />
                </div>
              </div>
              <div class="col-lg-3">
                <span class="pf-title">Latitude</span>
                <div class="pf-field">
                  <input type="text" placeholder="41.1589654" />
                </div>
              </div>
              <div class="col-lg-3">
                <span class="pf-title">Longitude</span>
                <div class="pf-field">
                  <input type="text" placeholder="21.1589654" />
                </div>
              </div>
              <div class="col-lg-12">
                <a href="#" title="" class="srch-lctn">
                  Search Location
                </a>
              </div>
              <div class="col-lg-12">
                <span class="pf-title">Maps</span>
                <div class="pf-map">
                  <div id="map_div"></div>
                </div>
              </div>
              <div class="col-lg-12">
                <button type="submit">Update</button>
              </div>
            </div>
          </form>
        </div>
       */}
      </div>
    </div>
  );
};

export default CandidatesProfile;
