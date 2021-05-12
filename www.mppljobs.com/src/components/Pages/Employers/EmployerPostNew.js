import React from "react";

const EmployerPostNew = () => {
  return (
    <div class="col-lg-9 column">
      <div class="padding-left">
        <div class="profile-title">
          <h3>Post a New Job</h3>
          {/* <div class="steps-sec">
            <div class="step active">
              <p>
                <i class="la la-info"></i>
              </p>
              <span>Information</span>
            </div>
            <div class="step">
              <p>
                <i class="la la-cc-mastercard"></i>
              </p>
              <span>Package & Payments</span>
            </div>
            <div class="step">
              <p>
                <i class="la  la-check-circle"></i>
              </p>
              <span>Done</span>
            </div>
          </div>
         */}
        </div>
        <div class="profile-form-edit">
          <form>
            <div class="row" style={{ marginBottom: "50px" }}>
              {/* <div class="col-lg-12">
                <span class="pf-title">Job Title</span>
                <div class="pf-field">
                  <input type="text" placeholder="Designer" />
                </div>
              </div> */}
              {/* <div class="col-lg-12">
                <span class="pf-title">Description</span>
                <div class="pf-field">
                  <textarea>
                    Spent several years working on sheep on Wall Street. Had
                    moderate success investing in Yugos on Wall Street. Managed
                    a small team buying and selling pogo sticks for farmers.
                    Spent several years licensing licorice in West Palm Beach,
                    FL. Developed severalnew methods for working with banjos in
                    the aftermarket. Spent a weekend importing banjos in West
                    Palm Beach, FL.In this position, the Software Engineer
                    ollaborates with Evention's Development team to continuously
                    enhance our current software solutions as well as create new
                    solutions to eliminate the back-office operations and
                    management challenges present
                  </textarea>
                </div>
              </div> */}
              <div class="col-lg-6">
                <span class="pf-title">Company Name</span>
                <div class="pf-field">
                  <select
                    data-placeholder="Please Select Specialism"
                    class="chosen"
                  >
                    <option>Sample Company</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Job Title</span>
                <div class="pf-field">
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Job Type</span>
                <div class="pf-field">
                  <select
                    data-placeholder="Please Select Specialism"
                    class="chosen"
                  >
                    <option>Sample Job</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Salary Range</span>
                <div class="pf-field">
                  <select
                    data-placeholder="Please Select Specialism"
                    class="chosen"
                  >
                    <option>Lower Value</option>
                    <option>Upper Value</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Job Category</span>
                <div class="pf-field">
                  <select
                    data-placeholder="Please Select Specialism"
                    class="chosen"
                  >
                    <option>Sample Category</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Job Description</span>
                <div class="pf-field">
                  <textarea>Sample Job Description</textarea>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Starting</span>
                <div class="pf-field">
                  <select
                    data-placeholder="Please Select Specialism"
                    class="chosen"
                  >
                    <option>Immediately</option>
                    <option>1 Months</option>
                    <option>2 Months</option>
                    <option>3 Months</option>
                    <option>4 Months</option>
                    <option>5 Months</option>
                    <option>6 Months</option>
                    <option>7 Months</option>
                    <option>8 Months</option>
                    <option>9 Months</option>
                    <option>10 Months</option>
                    <option>11 Months</option>
                    <option>12 Months</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Location</span>
                <div class="pf-field">
                  <select
                    data-placeholder="Please Select Specialism"
                    class="chosen"
                  >
                    <option>Sample Location</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Skills & Requirements</span>
                <div class="pf-field">
                  <input type="text" />
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Publish Type</span>
                <div class="pf-field">
                  <select
                    data-placeholder="Please Select Specialism"
                    class="chosen"
                  >
                    <option>Sample Publish Type</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Previous Experience</span>
                <div class="pf-field">
                  <textarea>Sample Previous experience</textarea>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Validity</span>
                <div class="pf-field">
                  <input
                    type="text"
                    placeholder="01.11.207"
                    class="form-control datepicker"
                  />
                </div>
              </div>
              <div class="col-lg-3" style={{ marginLeft: "-50px" }}>
                <button type="submit">Submit</button>
              </div>
              <div class="col-lg-3" style={{ marginLeft: "-80px" }}>
                <button type="submit">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployerPostNew;
