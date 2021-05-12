import React, { useState } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { createCompany } from "../../../actions/adminActions";

import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import { useHistory } from "react-router";
import makeToast from "../../Toaster";

const AddEmployer = (props) => {
  const [CompanyName, setCompanyName] = useState("");
  const [CompanyEmail, setCompanyEmail] = useState("");
  const [CompanyContact, setCompanyContact] = useState("");
  const [Subscription, setSubscription] = useState("");
  const [PostedJobs, setPostedJobs] = useState("");

  let getDate = moment().format("DD/MM/YYYY");
  const [CompanyDescription, setCompanyDescription] = useState("");
  const [CIN, setCIN] = useState("");
  const [JoiningDate, setJoiningDate] = useState(getDate || "");
  const [HeadOffice, setHeadOffice] = useState("");
  const [Website, setWebsite] = useState("");
  const [Validity, setValidity] = useState("");
  const [Logo, setLogo] = useState(null);
  const uploadFile = (e) => {
    if (e.target.files[0] == null) {
      console.log("Logo Not Uploaded");
    } else {
      setLogo(e.target.files[0]);
    }
  };
  const [saved, setSaved] = useState();
  const history = useHistory();
  const dataSubmit = async () => {
    const formData = new FormData();
    formData.append("CompanyName", CompanyName);
    formData.append("CompanyDescription", CompanyDescription);
    formData.append("CIN", CIN);
    formData.append("JoiningDate", JoiningDate);
    formData.append("HeadOffice", HeadOffice);
    formData.append("Website", Website);
    formData.append("Validity", Validity);
    formData.append("Logo", Logo);
    setSaved(await props.createCompany(formData));
    if (saved) {
      history.push("/employers");
    } else {
      history.push("/employers");
    }
  };

  return (
    <div>
      <div class="sidebar-light">
        <div class="container-scroller">
          <Navbar />
          <div class="container-fluid page-body-wrapper">
            <Sidebar />
            <div class="main-panel">
              <div class="content-wrapper">
                <div class="row">
                  <div class="col-12 grid-margin">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-title">ADD EMPLOYER</h4>
                        <form class="form-sample">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Company Name
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    value={CompanyName}
                                    onChange={(e) => {
                                      setCompanyName(e.target.value);
                                    }}
                                    class="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Company Email
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    value={CompanyEmail}
                                    onChange={(e) => {
                                      setCompanyEmail(e.target.value);
                                    }}
                                    class="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Company Contact
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    value={CompanyContact}
                                    onChange={(e) => {
                                      setCompanyContact(e.target.value);
                                    }}
                                    class="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Company Description
                                </label>
                                <div class="col-sm-9">
                                  <textarea
                                    class="form-control"
                                    id="exampleTextarea1"
                                    value={CompanyDescription}
                                    onChange={(e) => {
                                      setCompanyDescription(e.target.value);
                                    }}
                                    rows="4"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Joining Date
                                </label>
                                <div
                                  id="datepicker-popup"
                                  class="input-group date datepicker col-sm-9"
                                >
                                  <input
                                    type="text"
                                    value={JoiningDate}
                                    onChange={(e) => {
                                      setJoiningDate(e.target.value);
                                    }}
                                    class="form-control"
                                  />
                                  <span class="input-group-addon input-group-append border-left">
                                    <span class="mdi mdi-calendar input-group-text"></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Head Office
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    class="form-control"
                                    value={HeadOffice}
                                    onChange={(e) => {
                                      setHeadOffice(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Subscription
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    class="form-control"
                                    value={Subscription}
                                    onChange={(e) => {
                                      setSubscription(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Posted Jobs
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    class="form-control"
                                    value={PostedJobs}
                                    onChange={(e) => {
                                      setPostedJobs(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Validity
                                </label>
                                <div
                                  id="datepicker-popup"
                                  class="input-group date datepicker col-sm-9"
                                >
                                  <input
                                    type="text"
                                    class="form-control"
                                    value={Validity}
                                    onChange={(e) => {
                                      setValidity(e.target.value);
                                    }}
                                  />
                                  <span class="input-group-addon input-group-append border-left">
                                    <span class="mdi mdi-calendar input-group-text"></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  CIN
                                </label>
                                <div
                                  id="datepicker-popup"
                                  class="input-group date datepicker col-sm-9"
                                >
                                  <input
                                    type="text"
                                    class="form-control"
                                    value={CIN}
                                    onChange={(e) => {
                                      setCIN(e.target.value);
                                    }}
                                  />
                                  <span class="input-group-addon input-group-append border-left">
                                    <span class="mdi mdi-calendar input-group-text"></span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label
                                  class="col-sm-3"
                                  for="exampleFormControlSelect2"
                                  style={{ alignSelf: "center" }}
                                >
                                  Website
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    class="form-control"
                                    value={Website}
                                    onChange={(e) => {
                                      setWebsite(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label
                                  class="col-sm-3"
                                  for="exampleFormControlSelect2"
                                  style={{ alignSelf: "center" }}
                                >
                                  Other Location
                                </label>
                                <div class="col-sm-9">
                                  <form class="form-inline repeater">
                                    <div data-repeater-list="group-a">
                                      <div
                                        data-repeater-item
                                        class="d-flex mb-2"
                                      >
                                        <label
                                          class="sr-only"
                                          for="inlineFormInputGroup1"
                                        >
                                          Users
                                        </label>
                                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                          <div class="input-group-prepend">
                                            <span class="input-group-text">
                                              @
                                            </span>
                                          </div>
                                          <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            id="inlineFormInputGroup1"
                                            placeholder="Add user"
                                          />
                                        </div>
                                        <button
                                          type="submit"
                                          class="btn btn-success btn-sm"
                                        >
                                          Submit
                                        </button>
                                        <button
                                          data-repeater-delete
                                          type="button"
                                          class="btn btn-danger btn-sm icon-btn ml-2"
                                        >
                                          <i class="mdi mdi-delete"></i>
                                        </button>
                                      </div>
                                    </div>
                                    <button
                                      data-repeater-create
                                      type="button"
                                      class="btn btn-info btn-sm icon-btn ml-2 mb-2"
                                    >
                                      <i class="mdi mdi-plus"></i>
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  File
                                </label>
                                <div class="col-sm-9 grid-margin stretch-card">
                                  <div class="card" style={{ width: "20px" }}>
                                    <div class="card-body">
                                      <h4 class="card-title">Dropzone</h4>
                                      {/* <form
                                        action="https://www.bootstrapdash.com/file-upload"
                                        class="dropzone"
                                        id="my-awesome-dropzone"
                                      ></form> */}
                                      <input
                                        className="dropzone"
                                        type="file"
                                        name="Logo"
                                        onChange={(e) => {
                                          uploadFile(e);
                                        }}
                                        style={{ width: "275px" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              dataSubmit();
                            }}
                            class="btn btn-primary mr-2"
                          >
                            Submit
                          </button>
                          <button class="btn btn-light">Cancel</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer class="footer">
                <div class="d-sm-flex justify-content-center justify-content-sm-between">
                  <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">
                    Copyright © 2021{" "}
                    <a href="https://www.toodecimal.com" target="_blank">
                      Too Decimal
                    </a>
                    . All rights reserved.
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  createCompany,
})(AddEmployer);
