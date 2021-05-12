import React from "react";

const CompanyProfile = () => {
  return (
    <div class="col-lg-9 column" style={{ marginBottom: "50px" }}>
      <div class="padding-left">
        <div class="profile-title" id="mp">
          <h3>My Profile</h3>
          <div class="upload-img-bar">
            <span>
              <img src="images/resource/up1.jpg" alt="" />
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
          <div class="upload-img-bar">
            <span>
              <img src="images/resource/up2.jpg" alt="" />
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
        </div>
        <div class="profile-form-edit">
          <form>
            <div class="row">
              <div class="col-lg-6">
                <span class="pf-title">Company Name</span>
                <div class="pf-field">
                  <input type="text" placeholder="Sample Company Name" />
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Company Description</span>
                <div class="pf-field">
                  <textarea>Sample Company Description</textarea>
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Joining Date</span>
                <div class="pf-field">
                  <input
                    type="text"
                    placeholder="01.11.207"
                    class="form-control datepicker"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Head Office</span>
                <div class="pf-field">
                  <input type="text" placeholder="Sample Company Name" />
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
              <div class="col-lg-6">
                <span class="pf-title">CIN</span>
                <div class="pf-field">
                  <input
                    type="text"
                    placeholder="01.11.207"
                    class="form-control datepicker"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <span class="pf-title">Website</span>
                <div class="pf-field">
                  <input type="text" placeholder="Sample Company Name" />
                </div>
              </div>
              <div class="col-lg-12">
                <span class="pf-title">Other Locations</span>
                <div class="pf-field no-margin">
                  <ul class="tags">
                    <li class="addedTag">
                      Delhi
                      <span
                        onclick="$(this).parent().remove();"
                        class="tagRemove"
                      >
                        x
                      </span>
                      <input type="hidden" name="tags[]" value="Web Deisgn" />
                    </li>
                    <li class="addedTag">
                      Mumbai
                      <span
                        onclick="$(this).parent().remove();"
                        class="tagRemove"
                      >
                        x
                      </span>
                      <input type="hidden" name="tags[]" value="Web Develop" />
                    </li>
                    <li class="addedTag">
                      Punjab
                      <span
                        onclick="$(this).parent().remove();"
                        class="tagRemove"
                      >
                        x
                      </span>
                      <input type="hidden" name="tags[]" value="SEO" />
                    </li>
                    <li class="tagAdd taglist">
                      <input type="text" id="search-field" />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4">
                <button type="submit">Cancel</button>
                <button
                  type="submit"
                  style={{ marginRight: "20px", marginLeft: "-40px" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
