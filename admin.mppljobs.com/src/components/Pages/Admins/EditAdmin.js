/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import AdminInput from "./AdminInput";
import classes from "./Admin.module.css";
import { updateAdminById } from "../../../actions/adminActions";
import { useHistory } from "react-router";
import makeToast from "../../../Toaster";

const EditAdmin = (props) => {
  const [edit, setEdit] = useState(false);
  // eslint-disable-next-line no-unused-vars
  let [arr, setArr] = useState([]);

  const history = useHistory();

  const selectedAdmin = props.location.state && props.location.state;

  const [name, setName] = useState(selectedAdmin.name || "");
  const [email, setEmail] = useState(selectedAdmin.email || "");
  const [number, setNumber] = useState(selectedAdmin.number || "");
  const [password, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const adminAccessArray = selectedAdmin.role || "";

  const fun = (role) => {
    const access =
      adminAccessArray.includes(role) || adminAccessArray.includes("All")
        ? true
        : false;
    return access;
  };

  const [role, setRole] = useState(selectedAdmin.role);
  const [dashboard, setDashboard] = useState(fun("Dashboard"));
  const [job, setJob] = useState(fun("Jobs"));
  const [candidates, setCandidates] = useState(fun("Candidates"));
  const [Employers, setEmployers] = useState(fun("Employers"));
  const [Notes, setNotes] = useState(fun("Notes"));
  const [Webinars, setWebinars] = useState(fun("Webinars"));
  const [Mockests, setMockTests] = useState(fun("MockTests"));
  const [Consultants, setConsultants] = useState(fun("Consultants"));
  const [Subscriptions, setSubscriptions] = useState(fun("Subscriptions"));
  const [Admins, setAdmins] = useState(fun("Admins"));

  const submitHandler = async (id) => {
    const formData = {
      name,
      email,
      number,
      role,
      oldPassword: password,
      newPassword,
    };

    if (number.toString().length < 10) {
      return makeToast("error", "Contact Number should atleast have 10 digits");
    }

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return makeToast("error", "Please add a valid email");
    }

    const isUpdated = await updateAdminById(formData, id);

    if (isUpdated) {
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
                    <h4 className='card-title'>EDIT ADMIN</h4>
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
                              disabled={!edit}
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
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
                              disabled={!edit}
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
                            Contact Number
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              disabled={!edit}
                              value={number}
                              onChange={(e) => {
                                setNumber(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Old Password
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='password'
                              className='form-control'
                              disabled={!edit}
                              value={password}
                              onChange={(e) => {
                                setOldPassword(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            New Password
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='password'
                              className='form-control'
                              disabled={!edit}
                              value={newPassword}
                              onChange={(e) => {
                                setNewPassword(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`form-group ${classes["access__div"]}`}>
                      <label htmlFor='access'>Access</label>

                      <div className={classes["access__div--input"]}>
                        <AdminInput
                          label='Dashboard'
                          checked={dashboard}
                          onClick={() => {
                            if (!dashboard) {
                              setDashboard(true);
                              // role.push("Jobs");
                              role.push("Dashboard");
                            } else {
                              setDashboard(false);
                              setRole(
                                role.filter((role) => role !== "Dashboard")
                              );
                            }
                          }}
                        />
                        <AdminInput
                          label='Jobs'
                          checked={job}
                          onClick={() => {
                            if (!job) {
                              setJob(true);
                              role.push("Jobs");
                            } else {
                              setJob(false);
                              setRole(role.filter((role) => role !== "Jobs"));
                            }
                          }}
                        />
                        <AdminInput
                          label='Candidates'
                          checked={candidates}
                          onClick={() => {
                            if (!candidates) {
                              setCandidates(true);
                              role.push("Candidates");
                              arr.push("Candidates");
                            } else {
                              setCandidates(false);
                              arr = role.filter(
                                (role) => role !== "Candidates"
                              );
                              setRole(arr);
                            }
                          }}
                        />
                        <AdminInput
                          label='Employers'
                          checked={Employers}
                          onClick={() => {
                            if (!Employers) {
                              setEmployers(true);
                              role.push("Employers");
                              arr.push("Employers");
                            } else {
                              setEmployers(false);
                              arr = role.filter((role) => role !== "Employers");
                              setRole(arr);
                            }
                          }}
                        />
                        <AdminInput
                          label='Notes'
                          checked={Notes}
                          onClick={() => {
                            if (!Notes) {
                              setNotes(true);
                              role.push("Notes");
                              arr.push("Notes");
                            } else {
                              setNotes(false);
                              arr = role.filter((role) => role !== "Notes");
                              setRole(arr);
                            }
                          }}
                        />
                        <AdminInput
                          label='Webinars'
                          checked={Webinars}
                          onClick={() => {
                            if (!Webinars) {
                              setWebinars(true);
                              role.push("Webinars");
                              arr.push("Webinars");
                            } else {
                              setWebinars(false);
                              arr = role.filter((role) => role !== "Webinars");
                              setRole(arr);
                            }
                          }}
                        />
                        <AdminInput
                          label='Mock Tests'
                          checked={Mockests}
                          onClick={() => {
                            if (!Mockests) {
                              setMockTests(true);
                              role.push("MockTests");
                              arr.push("MockTests");
                            } else {
                              setMockTests(false);
                              arr = role.filter((role) => role !== "MockTests");
                              setRole(arr);
                            }
                          }}
                        />
                        <AdminInput
                          label='Consultants'
                          checked={Consultants}
                          onClick={() => {
                            if (!Consultants) {
                              setConsultants(true);
                              role.push("Consultants");
                              arr.push("Consultants");
                            } else {
                              setConsultants(false);
                              arr = role.filter(
                                (role) => role !== "Consultants"
                              );
                              setRole(arr);
                            }
                          }}
                        />
                        <AdminInput
                          label='Subscriptions'
                          checked={Subscriptions}
                          onClick={() => {
                            if (!Subscriptions) {
                              setSubscriptions(true);
                              role.push("Subscriptions");
                              arr.push("Subscriptions");
                            } else {
                              setSubscriptions(false);
                              arr = role.filter(
                                (role) => role !== "Subscriptions"
                              );
                              setRole(arr);
                            }
                          }}
                        />
                        {/*<AdminInput
                          label='Admins'
                          checked={Admins}
                          onClick={() => {
                            if (!Admins) {
                              setAdmins(true);
                              role.push("Admins");
                              arr.push("Admins");
                            } else {
                              setAdmins(false);
                              arr = role.filter((role) => role !== "Admins");
                              setRole(arr);
                            }
                          }}
                        />*/}
                      </div>
                    </div>

                    <button
                      type='submit'
                      className='btn btn-primary mr-2'
                      onClick={(e) => {
                        e.preventDefault();
                        submitHandler(selectedAdmin._id);
                      }}>
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

export default EditAdmin;
