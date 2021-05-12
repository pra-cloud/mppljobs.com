/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { updateUserById } from "../../../actions/adminActions";

import makeToast from "../../../Toaster";
import InputArray from "./InputArray";

const EditCandidate = (props) => {
  const [edit, setEdit] = useState(false);

  const selectedCandidated = props.location.state;

  const [name, setName] = useState(selectedCandidated.name || "");
  const [email, setEmail] = useState(selectedCandidated.email || "");
  const [number, setNumber] = useState(selectedCandidated.number || "");
  const [gender, setGender] = useState(selectedCandidated.gender || "");
  const [address, setAddress] = useState(selectedCandidated.address || "");

  const [workLocationArray, setLocationArray] = useState(
    selectedCandidated.preferedWorkLocation
  );
  const [workLocationVal, setWorkLocationVal] = useState("");

  const [skillArray, setSkillArray] = useState(selectedCandidated.skillSet);
  const [skillVal, setSkillVal] = useState("");

  const [languageArray, setLanguageArray] = useState(
    selectedCandidated.languages
  );
  const [langVal, setLangval] = useState("");
  const [password, setPassword] = useState("");

  const [about, setAbout] = useState(selectedCandidated.about || "");
  const [linkdin, setLinkdin] = useState(selectedCandidated.linkdin || "");
  const [dob, setDOB] = useState(selectedCandidated.dob || "");
  const [maritalStatus, setMaritalStatus] = useState(
    selectedCandidated.maritalStatus || ""
  );
  const [subscription, setSubscription] = useState(
    selectedCandidated.subscription || ""
  );
  const [resume, setResume] = useState(null);
  const [videoResume, setVideoResume] = useState(null);
  const history = useHistory();
  const uploadResumeFile = (e) => {
    if (e.target.files[0] == null) {
      console.log("Resume File Not Uploaded!");
    } else {
      setResume(e.target.files[0]);
    }
  };

  const uploadVideoResumeFile = (e) => {
    if (e.target.files[0] == null) {
      console.log("Resume File not Uploaded!");
    } else {
      setVideoResume(e.target.files[0]);
    }
  };

  function convert(date) {
    let formatted_date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    console.log(formatted_date);
    return formatted_date;
  }

  const dataSubmit = async () => {
    const locations = JSON.stringify(workLocationArray);
    const skills = JSON.stringify(skillArray);
    const languages = JSON.stringify(languageArray);

    if (email && !email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return makeToast("error", "Please add a valid email");
    }

    if (number.toString().length < 10) {
      return makeToast("error", "Contact Number should atleast have 10 digits");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("gender", gender);
    formData.append("address", address);
    formData.append("about", about);
    formData.append("linkdin", linkdin);
    formData.append("dob", dob);
    formData.append("maritalStatus", maritalStatus);
    formData.append("subscription", subscription);
    formData.append("preferedWorkLocation", locations);
    formData.append("skillSet", skills);
    formData.append("languages", languages);
    formData.append("videoResume", videoResume);
    formData.append("resume", resume);

    const isUserUpdated = await updateUserById(
      formData,
      selectedCandidated._id
    );

    if (isUserUpdated) {
      makeToast("success", "Updated");
      history.goBack();
    } else {
      makeToast("error", "Error");
    }
  };

  const deleteLocation = (location) => {
    setLocationArray((prevState) => {
      return prevState.filter((loc) => {
        return loc !== location;
      });
    });
  };

  const deleteSkill = (enteredSkill) => {
    setSkillArray((prevState) => {
      return prevState.filter((skill) => {
        return skill !== enteredSkill;
      });
    });
  };

  const deleteLanguage = (enteredLang) => {
    setLanguageArray((prevState) => {
      return prevState.filter((lang) => {
        return lang !== enteredLang;
      });
    });
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
                    <h4 className='card-title'>EDIT CANDIDATES</h4>

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
                          <label className='col-sm-3 col-form-label'>
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
                            Email ID
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Password
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Contact Number
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={number}
                              onChange={(e) => {
                                setNumber(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Gender
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={gender}
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Address
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              className='form-control'
                              rows='4'
                              value={address}
                              onChange={(e) => {
                                setAddress(e.target.value);
                              }}
                              disabled={!edit}></textarea>
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

                      {/* Later */}
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Upload Resume
                          </label>
                          <div className='col-sm-9 grid-margin stretch-card'>
                            <div className='card' style={{ width: "20px" }}>
                              <div className='card-body'>
                                <h4 className='card-title'>Drop resume here</h4>
                                <input
                                  style={{ width: "290px" }}
                                  type='file'
                                  disabled={!edit}
                                  onChange={(e) => {
                                    uploadResumeFile(e);
                                  }}
                                  // action="https://www.bootstrapdash.com/file-upload"
                                  className='dropzone'></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Video Resume
                          </label>
                          <div className='col-sm-9 grid-margin stretch-card'>
                            <div className='card' style={{ width: "20px" }}>
                              <div className='card-body'>
                                <h4 className='card-title'>
                                  Drop video resume here
                                </h4>
                                <input
                                  style={{ width: "290px" }}
                                  type='file'
                                  disabled={!edit}
                                  onChange={(e) => {
                                    uploadVideoResumeFile(e);
                                  }}
                                  // action="https://www.bootstrapdash.com/file-upload"
                                  className='dropzone'></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Linked In
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={linkdin}
                              onChange={(e) => {
                                setLinkdin(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>DOB</label>
                          <div className='input-group col-sm-9'>
                            <input
                              type='date'
                              className='form-control'
                              value={dob}
                              onChange={(e) => {
                                setDOB(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Marital Status
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={maritalStatus}
                              onChange={(e) => {
                                setMaritalStatus(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            style={{ alignSelf: "center" }}>
                            Subscription Status
                          </label>
                          <select
                            className='form-control col-sm-9'
                            id='exampleFormControlSelect2'
                            disabled={!edit}>
                            <option>Sample Company</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Subscription Info
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={subscription}
                              onChange={(e) => {
                                setSubscription(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            style={{ alignSelf: "center" }}>
                            Skill Set
                          </label>
                          <div className='col-sm-9'>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: "1rem",
                              }}>
                              <div className='input-group mb-2 mr-sm-2 mb-sm-0'>
                                <div className='input-group-prepend'>
                                  <span className='input-group-text'>@</span>
                                </div>
                                <input
                                  type='text'
                                  className='form-control form-control-sm'
                                  value={skillVal}
                                  onChange={(e) => {
                                    setSkillVal(e.target.value);
                                  }}
                                  placeholder='Add Skills'
                                  disabled={!edit}
                                />
                              </div>
                              <button
                                data-repeater-create
                                type='button'
                                style={{
                                  marginTop: "0.4rem",
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (skillVal === "") {
                                    return;
                                  }
                                  setSkillArray((prevState) => {
                                    return [...prevState, skillVal];
                                  });
                                  setSkillVal("");
                                }}
                                className='btn btn-info btn-sm icon-btn ml-2 mb-2'>
                                <i className='mdi mdi-plus'></i>
                              </button>
                            </div>
                            {skillArray &&
                              skillArray.map((skill) => (
                                <InputArray
                                  key={Math.random()}
                                  text={skill}
                                  onDelete={deleteSkill}
                                />
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            style={{ alignSelf: "center" }}>
                            Preffered Work Location
                          </label>
                          <div className='col-sm-9'>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: "1rem",
                              }}>
                              <div className='input-group mb-2 mr-sm-2 mb-sm-0'>
                                <div className='input-group-prepend'>
                                  <span className='input-group-text'>@</span>
                                </div>
                                <input
                                  type='text'
                                  className='form-control form-control-sm'
                                  onChange={(e) => {
                                    setWorkLocationVal(e.target.value);
                                  }}
                                  value={workLocationVal}
                                  placeholder='Add Locations'
                                  disabled={!edit}
                                />
                              </div>
                              <button
                                data-repeater-create
                                type='button'
                                style={{
                                  marginTop: "0.4rem",
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (workLocationVal === "") {
                                    return;
                                  }
                                  setLocationArray((prevState) => {
                                    return [...prevState, workLocationVal];
                                  });
                                  setWorkLocationVal("");
                                }}
                                className='btn btn-info btn-sm icon-btn ml-2 mb-2'>
                                <i className='mdi mdi-plus'></i>
                              </button>
                            </div>
                            {workLocationArray &&
                              workLocationArray.map((loc) => (
                                <InputArray
                                  key={Math.random()}
                                  text={loc}
                                  onDelete={deleteLocation}
                                />
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            style={{ alignSelf: "center" }}>
                            Languages
                          </label>
                          <div className='col-sm-9'>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: "1rem",
                              }}>
                              <div className='input-group mb-2 mr-sm-2 mb-sm-0'>
                                <div className='input-group-prepend'>
                                  <span className='input-group-text'>@</span>
                                </div>
                                <input
                                  type='text'
                                  className='form-control form-control-sm'
                                  id='inlineFormInputGroup1'
                                  value={langVal}
                                  placeholder='Add Languages'
                                  onChange={(e) => {
                                    setLangval(e.target.value);
                                  }}
                                />
                              </div>
                              <button
                                data-repeater-create
                                type='button'
                                style={{
                                  marginTop: "0.4rem",
                                }}
                                className='btn btn-info btn-sm icon-btn ml-2 mb-2'
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (langVal === "") {
                                    return;
                                  }
                                  setLanguageArray((prevState) => {
                                    return [...prevState, langVal];
                                  });
                                  setLangval("");
                                }}>
                                <i className='mdi mdi-plus'></i>
                              </button>
                            </div>
                            {languageArray &&
                              languageArray.map((lang) => (
                                <InputArray
                                  key={Math.random()}
                                  text={lang}
                                  onDelete={deleteLanguage}
                                />
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type='submit'
                      className='btn btn-primary mr-2'
                      onClick={(e) => {
                        e.preventDefault();
                        dataSubmit();
                      }}>
                      Submit
                    </button>
                    <button
                      type='buton'
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
  // updateUserById,
})(EditCandidate);
