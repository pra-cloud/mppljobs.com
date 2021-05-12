/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { createWebinars } from "../../../actions/adminActions";

// import Timekeeper from "react-timekeeper";
import makeToast from "../../../Toaster";
import "react-datepicker/dist/react-datepicker.css";
import { setDate } from "date-fns";

const AddWebinar = (props) => {
  const history = useHistory();
  const [saved, setSaved] = useState();
  const [startDate, setStartDate] = useState(new Date());
  // const [title, setTitle] = useState("");
  // const [time, setTime] = useState(new Date());
  // const [date, setDate] = useState(new Date());
  const [webinarLink, setWebinarLink] = useState("");
  // const [category, setCategory] = useState("");
  const [instructorDesignation, setInstructorDesignation] = useState("");
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

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      webinarTitle === "" ||
      webinarType === "" ||
      webinarDate === "" ||
      webinarDescription === "" ||
      webinarAudience === "" ||
      webinarLink === "" ||
      instructorName === "" ||
      instructorDesignation === "" ||
      aboutInstructor === "" ||
      designation === ""
    ) {
      return makeToast("error", "Please add all the fields");
    }

    var webinarInstructor = {
      instructorName: instructorName,
      designation: designation,
      aboutInstructor: aboutInstructor,
    };
    setSaved(
      await createWebinars({
        webinarAudience,
        webinarDate,
        webinarDescription,
        webinarInstructor,
        webinarLink,
        webinarType,
        webinarTitle,
        webinarTime,
      })
    );
    if (saved) {
      history.push("/webinars");
    } else {
      history.push("/webinars");
    }
  };

  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='row'>
            <div className='col-12 grid-margin'>
              <div className='card'>
                <div className='card-body'>
                  <h4 className='card-title'>ADD WEBINARS</h4>
                  <form className='form-sample'>
                    <hr />
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Title
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={webinarTitle}
                              onChange={(e) => {
                                setWebinarTitle(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            for='exampleFormControlSelect2'
                            style={{ alignSelf: "center" }}>
                            Company Name
                          </label>
                          <select
                            className='form-control col-sm-9'
                            id='exampleFormControlSelect2'>
                            <option>Sample Company</option>
                          </select>
                        </div>
                            </div> */}
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Category
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={webinarType}
                              onChange={(e) => {
                                setWebinarType(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Date
                          </label>
                          <div
                            id='datepicker-popup'
                            className='input-group date datepicker col-sm-9'>
                            <input
                              type='date'
                              className='form-control'
                              value={webinarDate}
                              onChange={(e) => {
                                setWebinarDate(e.target.value);
                              }}
                            />
                            {/* <span className="input-group-addon input-group-append border-left">
                                    <span className="mdi mdi-calendar input-group-text"></span>
                                  </span> */}
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Time
                          </label>
                          <div className='input-group  col-sm-9'>
                            <input
                              type='time'
                              className='form-control'
                              value={webinarTime}
                              onChange={(e) => {
                                setWebinarTime(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Description
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              className='form-control'
                              rows='4'
                              value={webinarDescription}
                              onChange={(e) => {
                                setWebinarDescription(e.target.value);
                              }}></textarea>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Audience
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              className='form-control'
                              rows='4'
                              value={webinarAudience}
                              onChange={(e) => {
                                setWebinarAudience(e.target.value);
                              }}></textarea>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Event Link
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={webinarLink}
                              onChange={(e) => {
                                setWebinarLink(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "inline-table",
                          width: "100%",
                          height: "10px",
                          paddingbottom: "20px",
                        }}>
                        <hr
                          style={{
                            clear: "both",
                            display: "block",
                            width: "96%",
                            color: "#FFFF00",
                            height: "10px",
                            paddingBottom: "10px",
                          }}
                        />
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Instructor Name
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={instructorName}
                              onChange={(e) => {
                                setInstructorName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Instructor Profile
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              value={designation}
                              onChange={(e) => {
                                setDesignation(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Instructor Designation
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={instructorDesignation}
                              onChange={(e) => {
                                setInstructorDesignation(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            About Instructor
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              className='form-control'
                              value={aboutInstructor}
                              onChange={(e) => {
                                setaboutInstructor(e.target.value);
                              }}
                              rows='4'></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type='submit'
                      onClick={submitHandler}
                      className='btn btn-primary mr-2'>
                      Submit
                    </button>
                    <button
                      className='btn btn-light'
                      type='button'
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("/webinars");
                      }}>
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className='footer'>
          <div className='d-sm-flex justify-content-center justify-content-sm-between'>
            <span className='text-muted text-center text-sm-left d-block d-sm-inline-block'>
              Copyright © 2021{" "}
              <a
                href='https://www.toodecimal.com'
                rel='noreferrer'
                target='_blank'>
                Too Decimal
              </a>
              . All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default connect(null, {
  // createWebinars,
})(AddWebinar);
