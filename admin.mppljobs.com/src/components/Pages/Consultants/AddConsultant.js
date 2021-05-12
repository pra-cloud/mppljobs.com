import React, { useState } from "react";
import { createConsultant } from "../../../actions/adminActions";
import { useHistory } from "react-router";
import makeToast from "../../../Toaster";

const AddConsultant = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sector, setSector] = useState("");
  const [about, setAbout] = useState("");
  const [membershipDate, setMembershipDate] = useState("");
  const [educationInfo, setEducationInfo] = useState("");
  const [experience, setExperience] = useState("");
  const history = useHistory();

  const submitHandler = async () => {
    if (
      name === "" ||
      email === "" ||
      sector === "" ||
      about === "" ||
      membershipDate === "" ||
      educationInfo === "" ||
      experience === ""
    ) {
      return makeToast("error", "Please add all the fields");
    }

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return makeToast("error", "Please add a valid email");
    }

    const result = await createConsultant({
      name,
      email,
      sector,
      about,
      membershipDate,
      educationInfo,
      experience,
    });

    if (result) {
      makeToast("success", "Success");
      history.push("/consultants");
    } else {
      makeToast("error", "Error");
      history.push("/consultants");
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
                  <h4 className='card-title'>ADD CONSULTANT</h4>
                  <form className='form-sample'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            style={{ alignSelf: "center" }}>
                            Name
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            style={{ alignSelf: "center" }}>
                            Email
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Sector
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={sector}
                              onChange={(e) => {
                                setSector(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            About
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              className='form-control'
                              rows='4'
                              value={about}
                              onChange={(e) => {
                                setAbout(e.target.value);
                              }}></textarea>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Membership Date
                          </label>
                          <div
                            id='datepicker-popup'
                            className='input-group date datepicker col-sm-9'>
                            <input
                              type='date'
                              className='form-control'
                              value={membershipDate}
                              onChange={(e) => {
                                setMembershipDate(e.target.value);
                              }}
                            />
                            <span className='input-group-addon input-group-append border-left'>
                              {/* <span className="mdi mdi-calendar input-group-text"></span> */}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Education Info
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              className='form-control'
                              rows='4'
                              value={educationInfo}
                              onChange={(e) => {
                                setEducationInfo(e.target.value);
                              }}></textarea>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Experience
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              className='form-control'
                              rows='4'
                              value={experience}
                              onChange={(e) => {
                                setExperience(e.target.value);
                              }}></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type='submit'
                      onClick={(e) => {
                        e.preventDefault();
                        submitHandler();
                      }}
                      className='btn btn-primary mr-2'>
                      Submit
                    </button>
                    <button
                      className='btn btn-light'
                      type='button'
                      onClick={(e) => {
                        e.preventDefault();
                        setName("");
                        setEmail("");
                        setSector("");
                        setAbout("");
                        setMembershipDate("");
                        setEducationInfo("");
                        setExperience("");
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

export default AddConsultant;
