import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { createWebinars } from "../../../actions/adminActions";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import makeToast from "../../Toaster";

const AddWebinar = (props) => {
  const history = useHistory();
  const [saved, setSaved] = useState();
  const [webinarLink, setWebinarLink] = useState("");
  const [webinarTitle, setWebinarTitle] = useState("");
  const [webinarType, setWebinarType] = useState("");
  const [webinarDate, setWebinarDate] = useState("");
  const [webinarTime, setWebinarTime] = useState("");
  const [webinarDescription, setWebinarDescription] = useState("");
  const [webinarKeywords, setWebinarKeywords] = useState([]);
  const [webinarAudience, setWebinarAudience] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [aboutInstructor, setaboutInstructor] = useState("");
  const [designation, setDesignation] = useState("");
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
                        <h4 class="card-title">ADD WEBINARS</h4>
                        <form class="form-sample">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Audience
                                </label>
                                <div class="col-sm-9">
                                  <textarea
                                    class="form-control"
                                    id="exampleTextarea1"
                                    rows="4"
                                    value={webinarAudience}
                                    onChange={(e) => {
                                      setWebinarAudience(e.target.value);
                                    }}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Description
                                </label>
                                <div class="col-sm-9">
                                  <textarea
                                    class="form-control"
                                    id="exampleTextarea1"
                                    rows="4"
                                    value={webinarDescription}
                                    onChange={(e) => {
                                      setWebinarDescription(e.target.value);
                                    }}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Title
                                </label>
                                <div class="col-sm-9">
                                  <input type="text" class="form-control" />
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
                                  Company Name
                                </label>
                                <select
                                  class="form-control col-sm-9"
                                  id="exampleFormControlSelect2"
                                >
                                  <option>Sample Company</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div
                                class="form-group"
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <label
                                  class="col-sm-3"
                                  for="exampleFormControlSelect2"
                                  style={{ alignSelf: "center" }}
                                >
                                  Date
                                </label>
                                <input
                                  class="form-control"
                                  data-inputmask="'alias': 'datetime'"
                                  data-inputmask-inputformat="dd/mm/yyyy HH:MM:ss"
                                  value={webinarDate}
                                  onChange={(e) => {
                                    setWebinarDate(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div
                                class="form-group"
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <label
                                  class="col-sm-3"
                                  for="exampleFormControlSelect2"
                                  style={{ alignSelf: "center" }}
                                >
                                  Time
                                </label>
                                <input
                                  class="form-control"
                                  data-inputmask="'alias': 'datetime'"
                                  data-inputmask-inputformat="dd/mm/yyyy HH:MM:ss"
                                  value={webinarTime}
                                  onChange={(e) => {
                                    setWebinarTime(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Instructor Name
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    class="form-control"
                                    value={instructorName}
                                    onChange={(e) => {
                                      setInstructorName(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Instructor Profile
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    value={designation}
                                    onChange={(e) => {
                                      setDesignation(e.target.value);
                                    }}
                                    class="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  About Instructor
                                </label>
                                <div class="col-sm-9">
                                  <textarea
                                    class="form-control"
                                    value={aboutInstructor}
                                    onChange={(e) => {
                                      setaboutInstructor(e.target.value);
                                    }}
                                    id="exampleTextarea1"
                                    rows="4"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Event Link
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    class="form-control"
                                    value={webinarLink}
                                    onChange={(e) => {
                                      setWebinarLink(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="card-body">
                                <h4 class="card-title">Input Tag</h4>
                                <p class="card-description">
                                  Type to add a new tag
                                </p>
                                <input
                                  name="tags"
                                  id="tags"
                                  value="London,Canada,Australia,Mexico"
                                />
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={async () => {
                              var webinarInstructor = {
                                instructorName: instructorName,
                                designation: designation,
                                aboutInstructor: aboutInstructor,
                              };
                              setSaved(
                                await props.createWebinars({
                                  webinarAudience,
                                  webinarDate,
                                  webinarDescription,
                                  webinarInstructor,
                                  webinarLink,
                                  webinarTitle,
                                  webinarTime,
                                })
                              );
                              if (saved) {
                                history.push("/webinars");
                              } else {
                                history.push("/webinars");
                              }
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
  createWebinars,
})(AddWebinar);
