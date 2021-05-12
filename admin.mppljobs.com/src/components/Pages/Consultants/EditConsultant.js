/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useHistory } from "react-router";
import { updateConsultantByID } from "../../../actions/adminActions";

import makeToast from "../../../Toaster";

const EditConsultant = (props) => {
  const [edit, setEdit] = useState(false);

  const selectedConsultant = props.location.state && props.location.state;

  const [name, setName] = useState(selectedConsultant.name || "");
  const [sector, setSector] = useState(selectedConsultant.sector || "");
  const [about, setAbout] = useState(selectedConsultant.about || "");
  const [membershipDate, setMembershipDate] = useState(
    selectedConsultant.membershipDate || ""
  );
  const [educationInfo, setEducationInfo] = useState(
    selectedConsultant.educationInfo || ""
  );
  const [saved, setSaved] = useState();
  const [experience, setExperience] = useState(
    selectedConsultant.experience || ""
  );
  const history = useHistory();

  const submitHandler = async () => {
    const isUpdated = await updateConsultantByID(
      {
        name,
        sector,
        about,
        membershipDate,
        educationInfo,
        experience,
      },
      selectedConsultant._id
    );

    if (isUpdated) {
      makeToast("success", "Consultant Updated");
      return history.goBack();
    }

    makeToast("error", "Error");
  };

  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='row'>
            <div className='col-12 grid-margin'>
              <div className='card'>
                <div className='card-body'>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: "10px",
                    }}>
                    <h4 className='card-title'>EDIT CONSULTANT</h4>
                    <button
                      type='submit'
                      className='btn btn-primary mr-2'
                      style={{ padding: "10px" }}
                      onClick={() => {
                        if (!edit) {
                          setEdit(true);
                        } else {
                          setEdit(false);
                        }
                      }}>
                      {!edit ? "Edit" : "Cancel"}
                    </button>
                  </div>
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
                              disabled={!edit}
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
                              disabled={!edit}
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
                              }}
                              disabled={!edit}></textarea>
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
                              disabled={!edit}
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
                              }}
                              disabled={!edit}></textarea>
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
                              id='exampleTextarea1'
                              rows='4'
                              value={experience}
                              onChange={(e) => {
                                setExperience(e.target.value);
                              }}
                              disabled={!edit}></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        submitHandler();
                      }}
                      type='submit'
                      className='btn btn-primary mr-2'>
                      {!edit ? "Submit" : "Save"}
                    </button>
                    <button
                      button='button'
                      className='btn btn-light'
                      onClick={(e) => {
                        e.preventDefault();
                        history.goBack();
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
              Copyright © 2021
              <a
                href='https://www.code-e-python.com'
                rel='noreferrer'
                target='_blank'>
                Code-e-Python
              </a>
              . All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EditConsultant;
