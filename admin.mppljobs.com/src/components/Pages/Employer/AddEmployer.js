import React, { useState } from "react";
import { createCompany } from "../../../actions/adminActions";
import { useHistory } from "react-router";
import makeToast from "../../../Toaster";
import InputArray from "../Candidates/InputArray";

const AddEmployer = (props) => {
  const [CompanyName, setCompanyName] = useState("");
  const [CompanyEmail, setCompanyEmail] = useState("");
  const [CompanyContact, setCompanyContact] = useState("");
  const [Subscription, setSubscription] = useState("");

  const [locationArray, setLocationArray] = useState([]);
  const [locationVal, setLocationVal] = useState("");

  const [CompanyDescription, setCompanyDescription] = useState("");
  const [CIN, setCIN] = useState("");
  const [JoiningDate, setJoiningDate] = useState("");
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
    const locations = JSON.stringify(locationArray);

    if (
      CompanyName === "" ||
      CompanyContact === "" ||
      CompanyEmail === "" ||
      CompanyDescription === "" ||
      CIN === "" ||
      JoiningDate === "" ||
      HeadOffice === "" ||
      Website === "" ||
      Validity === "" ||
      Logo === ""
    ) {
      return makeToast("error", "Please Fill all fields");
    }

    if (CompanyContact.toString().length < 10) {
      return makeToast("error", "Contact Number should atleast have 10 digits");
    }

    if (!CompanyEmail.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return makeToast("error", "Please add a valid email");
    }

    if (CIN.length < 21 || CIN.length > 21) {
      return makeToast("error", "CIN should be of 21 digits");
    }

    const formData = new FormData();
    formData.append("CompanyName", CompanyName);
    formData.append("CompanyDescription", CompanyDescription);
    formData.append("CIN", CIN);
    formData.append("JoiningDate", JoiningDate);
    formData.append("HeadOffice", HeadOffice);
    formData.append("Website", Website);
    formData.append("Validity", Validity);
    formData.append("CompanyContact", CompanyContact);
    formData.append("Logo", Logo);
    formData.append("OtherOffices", locations);
    formData.append("CompanyEmail", CompanyEmail);

    setSaved(await createCompany(formData));
    if (saved) {
      history.push("/employers");
    } else {
      history.push("/employers");
    }
  };

  const deleteLocation = (enteredSkill) => {
    setLocationArray((prevState) => {
      return prevState.filter((skill) => {
        return skill !== enteredSkill;
      });
    });
  };

  return (
    <div>
      <div className='sidebar-light'>
        <div className='container-scroller'>
          <div className='main-panel'>
            <div className='content-wrapper'>
              <div className='row'>
                <div className='col-12 grid-margin'>
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title'>ADD EMPLOYER</h4>
                      <form className='form-sample'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='form-group row'>
                              <label className='col-sm-3 col-form-label'>
                                Company Name
                              </label>
                              <div className='col-sm-9'>
                                <input
                                  type='text'
                                  value={CompanyName}
                                  onChange={(e) => {
                                    setCompanyName(e.target.value);
                                  }}
                                  className='form-control'
                                />
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group row'>
                              <label className='col-sm-3 col-form-label'>
                                Company Email
                              </label>
                              <div className='col-sm-9'>
                                <input
                                  type='text'
                                  value={CompanyEmail}
                                  onChange={(e) => {
                                    setCompanyEmail(e.target.value);
                                  }}
                                  className='form-control'
                                />
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group row'>
                              <label className='col-sm-3 col-form-label'>
                                Company Contact
                              </label>
                              <div className='col-sm-9'>
                                <input
                                  type='number'
                                  value={CompanyContact}
                                  onChange={(e) => {
                                    setCompanyContact(e.target.value);
                                  }}
                                  className='form-control'
                                />
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group row'>
                              <label className='col-sm-3 col-form-label'>
                                Company Description
                              </label>
                              <div className='col-sm-9'>
                                <textarea
                                  className='form-control'
                                  id='exampleTextarea1'
                                  value={CompanyDescription}
                                  onChange={(e) => {
                                    setCompanyDescription(e.target.value);
                                  }}
                                  rows='4'></textarea>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group row'>
                              <label className='col-sm-3 col-form-label'>
                                Joining Date
                              </label>
                              <div
                                id='datepicker-popup'
                                className='input-group date datepicker col-sm-9'>
                                <input
                                  type='date'
                                  value={JoiningDate}
                                  className='form-control'
                                  onChange={(e) => {
                                    setJoiningDate(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group row'>
                              <label className='col-sm-3 col-form-label'>
                                Head Office
                              </label>
                              <div className='col-sm-9'>
                                <input
                                  type='text'
                                  className='form-control'
                                  value={HeadOffice}
                                  onChange={(e) => {
                                    setHeadOffice(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className='col-md-6'>
                            <div className='form-group row'>
                              <label className='col-sm-3 col-form-label'>
                                Subscription
                              </label>
                              <div className='col-sm-9'>
                                <input
                                  type='text'
                                  className='form-control'
                                  value={Subscription}
                                  onChange={(e) => {
                                    setSubscription(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className='col-md-6'>
                            <div className='form-group row'>
                              <label className='col-sm-3 col-form-label'>
                                Validity
                              </label>
                              <div className='input-group col-sm-9'>
                                <input
                                  type='date'
                                  className='form-control'
                                  value={Validity}
                                  onChange={(e) => {
                                    setValidity(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group row'>
                              <label className='col-sm-3 col-form-label'>
                                CIN
                              </label>
                              <div className='input-group date datepicker col-sm-9'>
                                <input
                                  type='text'
                                  className='form-control'
                                  value={CIN}
                                  onChange={(e) => {
                                    setCIN(e.target.value);
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
                                Website
                              </label>
                              <div className='col-sm-9'>
                                <input
                                  type='text'
                                  className='form-control'
                                  value={Website}
                                  onChange={(e) => {
                                    setWebsite(e.target.value);
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
                                Other Location
                              </label>
                              <div className='col-sm-9'>
                                <div data-repeater-list='group-a'>
                                  <div
                                    data-repeater-item
                                    className='d-flex mb-2'>
                                    <label className='sr-only'>Users</label>
                                    <div className='input-group mb-2 mr-sm-2 mb-sm-0'>
                                      <div className='input-group-prepend'>
                                        <span className='input-group-text'>
                                          @
                                        </span>
                                      </div>
                                      <input
                                        type='text'
                                        className='form-control form-control-sm'
                                        id='inlineFormInputGroup1'
                                        value={locationVal}
                                        onChange={(e) => {
                                          setLocationVal(e.target.value);
                                        }}
                                        placeholder='Add location'
                                      />
                                    </div>
                                    <button
                                      data-repeater-create
                                      type='button'
                                      style={{
                                        marginTop: "0.2rem",
                                      }}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        if (locationVal === "") {
                                          return;
                                        }
                                        setLocationArray((prevState) => {
                                          return [...prevState, locationVal];
                                        });
                                        setLocationVal("");
                                      }}
                                      className='btn btn-info btn-sm icon-btn ml-2 mb-2'>
                                      <i className='mdi mdi-plus'></i>
                                    </button>
                                  </div>
                                </div>

                                {locationArray &&
                                  locationArray.map((skill) => (
                                    <InputArray
                                      key={Math.random()}
                                      text={skill}
                                      onDelete={deleteLocation}
                                    />
                                  ))}
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group row'>
                              <label className='col-sm-3 col-form-label'>
                                Logo
                              </label>
                              <div className='col-sm-9 grid-margin stretch-card'>
                                <div className='card'>
                                  <div className='card-body'>
                                    <h4 className='card-title'>Dropzone</h4>
                                    {/* <form
                                        action="https://www.bootstrapdash.com/file-upload"
                                        className="dropzone"
                                        id="my-awesome-dropzone"
                                      ></form> */}
                                    <input
                                      style={{
                                        width: "20vw",
                                      }}
                                      className='dropzone'
                                      type='file'
                                      name='Logo'
                                      onChange={(e) => {
                                        uploadFile(e);
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type='submit'
                          onClick={(e) => {
                            e.preventDefault();
                            dataSubmit();
                          }}
                          className='btn btn-primary mr-2'>
                          Submit
                        </button>
                        <button
                          type='button'
                          className='btn btn-light'
                          onClick={(e) => {
                            e.preventDefault();
                            history.push("/employers");
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
      </div>
    </div>
  );
};

export default AddEmployer;
