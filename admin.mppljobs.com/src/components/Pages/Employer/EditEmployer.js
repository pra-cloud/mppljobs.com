/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { updateCompanyById } from "../../../actions/adminActions";

import InputArray from "../Candidates/InputArray";

const EditEmployer = (props) => {
  const [edit, setEdit] = useState(false);

  const selectedCompany = props.location && props.location.state;

  const [locationArray, setLocationArray] = useState(
    selectedCompany.OtherOffices || []
  );

  const [locationVal, setLocationVal] = useState("");

  const [CompanyName, setCompanyName] = useState(
    selectedCompany.CompanyName || ""
  );
  const [CompanyEmail, setCompanyEmail] = useState(
    selectedCompany.CompanyEmail || ""
  );
  const [CompanyContact, setCompanyContact] = useState(
    selectedCompany.CompanyContact || ""
  );
  const [Website, setWebsite] = useState(selectedCompany.Website || "");
  const [CompanyDescription, setCompanyDescription] = useState(
    selectedCompany.CompanyDescription || ""
  );
  const [JoiningDate, setJoiningDate] = useState(
    selectedCompany.JoiningDate || ""
  );
  const [Validity, setValidity] = useState(selectedCompany.Validity || "");
  const [HeadOffice, setHeadOffice] = useState(
    selectedCompany.HeadOffice || ""
  );
  const [Latitude, setLatitude] = useState(selectedCompany.Latitude || "");
  const [Longitude, setLongitude] = useState(selectedCompany.Longitude || "");
  const [CIN, setCIN] = useState(selectedCompany.CIN);
  const history = useHistory();
  const [saved, setSaved] = useState();
  const [Logo, setLogo] = useState(selectedCompany.Logo || "");

  const uploadFile = (e) => {
    if (e.target.files[0] == null) {
      console.log("Logo Not Uploaded");
    } else {
      setLogo(e.target.files[0]);
    }
  };

  const deleteLocation = (enteredSkill) => {
    setLocationArray((prevState) => {
      return prevState.filter((skill) => {
        return skill !== enteredSkill;
      });
    });
  };

  const submitHandler = async () => {
    const locations = JSON.stringify(locationArray);

    const formData = new FormData();
    formData.append("CompanyName", CompanyName);
    formData.append("CompanyDescription", CompanyDescription);
    formData.append("CIN", CIN);
    formData.append("JoiningDate", JoiningDate);
    formData.append("HeadOffice", HeadOffice);
    formData.append("Website", Website);
    formData.append("Validity", Validity);
    formData.append("Logo", Logo);
    formData.append("OtherOffices", locations);

    setSaved(await updateCompanyById(formData, selectedCompany._id));
    if (saved) {
      history.goBack();
    } else {
      history.goBack();
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: "10px",
                    }}>
                    <h4 className='card-title'>EDIT EMPLOYER</h4>
                    <button
                      type='s-ubmit'
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
                            Company Name
                          </label>
                          <div className='col-sm-9'>
                            <input
                              disabled={!edit}
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
                            Company Description
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              className='form-control'
                              id='exampleTextarea1'
                              rows='4'
                              value={CompanyDescription}
                              onChange={(e) => {
                                setCompanyDescription(e.target.value);
                              }}
                              disabled={!edit}></textarea>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Joining Date
                          </label>
                          <div className='input-group date datepicker col-sm-9'>
                            <input
                              type='date'
                              className='form-control'
                              value={JoiningDate}
                              onChange={(e) => {
                                setJoiningDate(e.target.value);
                              }}
                              disabled={!edit}
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
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Latitude
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={Latitude}
                              onChange={(e) => {
                                setLatitude(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Longitude
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={Longitude}
                              onChange={(e) => {
                                setLongitude(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Validity
                          </label>
                          <div
                            id='datepicker-popup'
                            className='input-group col-sm-9'>
                            <input
                              type='date'
                              className='form-control'
                              value={Validity}
                              onChange={(e) => {
                                setValidity(e.target.value);
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
                            Other Location
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
                                  value={locationVal}
                                  onChange={(e) => {
                                    setLocationVal(e.target.value);
                                  }}
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

                            {locationArray &&
                              locationArray.map((loc) => (
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
                          <label className='col-sm-3 col-form-label'>
                            Logo
                          </label>
                          <div className='col-sm-9 grid-margin stretch-card'>
                            <div className='card' style={{ width: "20px" }}>
                              <div className='card-body'>
                                <h4 className='card-title'>Dropzone</h4>
                                <input
                                  style={{ width: "290px" }}
                                  type='file'
                                  disabled={!edit}
                                  onChange={(e) => {
                                    uploadFile(e);
                                  }}
                                  // action="https://www.bootstrapdash.com/file-upload"
                                  className='dropzone'
                                  id='my-awesome-dropzone'></input>
                              </div>
                            </div>
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
                      type='button'
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
  // createCompany,
})(EditEmployer);
