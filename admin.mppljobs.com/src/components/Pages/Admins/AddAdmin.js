/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AdminInput from "./AdminInput";

import classes from "./Admin.module.css";
import makeToast from "../../../Toaster";
import { useHistory } from "react-router";
import { createAdmin } from "../../../actions/adminActions";

const AddAdmin = () => {
  const [role, setRole] = useState([]);
  const [job, setJob] = useState(false);
  const [candidates, setCandidates] = useState(false);
  const [Employers, setEmployers] = useState(false);
  const [Notes, setNotes] = useState(false);
  const [Webinars, setWebinars] = useState(false);
  const [Mockests, setMockTests] = useState(false);
  const [Consultants, setConsultants] = useState(false);
  const [Subscriptions, setSubscriptions] = useState(false);
  const [Admins, setAdmins] = useState(false);
  const [Dashboard, setDashoard] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line no-unused-vars
  let [arr, setArr] = useState([]);

  const history = useHistory();

  const submitHandler = async (formData) => {
    if (name === "" || email === "" || number === "" || password === "") {
      return makeToast("error", "Please enter all the fields");
    } else if (role.length === 0) {
      return makeToast("error", "Please add atleast one role");
    }

    if (number.toString().length < 10) {
      return makeToast("error", "Contact Number should atleast have 10 digits");
    }

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return makeToast("error", "Please add a valid email");
    }

    const isAdminCrated = await createAdmin(formData);
    if (isAdminCrated) {
      history.push("/admins");
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
                  <h4 className='card-title'>ADD ADMIN</h4>
                  <form className='form-sample'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            htmlFor='name'
                            style={{ alignSelf: "center" }}>
                            Name
                          </label>
                          <div className='col-sm-9'>
                            <input
                              id='name'
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
                            htmlFor='email'
                            style={{ alignSelf: "center" }}>
                            Email
                          </label>
                          <div className='col-sm-9'>
                            <input
                              id='email'
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
                          <label
                            htmlFor='contact'
                            className='col-sm-3 col-form-label'>
                            Contact Number
                          </label>
                          <div className='col-sm-9'>
                            <input
                              id='contact'
                              type='text'
                              className='form-control'
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
                          <label
                            htmlFor='password'
                            className='col-sm-3 col-form-label'>
                            Password
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='password'
                              className='form-control'
                              id='password'
                              rows='4'
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}></input>
                          </div>
                        </div>
                      </div>

                      <div className={`form-group ${classes["access__div"]}`}>
                        <label htmlFor='access'>Access</label>

                        <div className={classes["access__div--input"]}>
                          <AdminInput
                            label='Dashboard'
                            onClick={() => {
                              if (!Dashboard) {
                                setDashoard(true);
                                role.push("Dashboard");
                              } else {
                                setDashoard(false);
                                setRole(
                                  role.filter((role) => role !== "Dashboard")
                                );
                              }
                            }}
                          />
                          <AdminInput
                            label='Jobs'
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
                            onClick={() => {
                              if (!Employers) {
                                setEmployers(true);
                                role.push("Employers");
                                arr.push("Employers");
                              } else {
                                setEmployers(false);
                                arr = role.filter(
                                  (role) => role !== "Employers"
                                );
                                setRole(arr);
                              }
                            }}
                          />
                          <AdminInput
                            label='Notes'
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
                            onClick={() => {
                              if (!Webinars) {
                                setWebinars(true);
                                role.push("Webinars");
                                arr.push("Webinars");
                              } else {
                                setWebinars(false);
                                arr = role.filter(
                                  (role) => role !== "Webinars"
                                );
                                setRole(arr);
                              }
                            }}
                          />
                          <AdminInput
                            label='Mock Tests'
                            onClick={() => {
                              if (!Mockests) {
                                setMockTests(true);
                                role.push("MockTests");
                                arr.push("MockTests");
                              } else {
                                setMockTests(false);
                                arr = role.filter(
                                  (role) => role !== "MockTests"
                                );
                                setRole(arr);
                              }
                            }}
                          />
                          <AdminInput
                            label='Consultants'
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
                    </div>
                    <button
                      type='submit'
                      onClick={(e) => {
                        e.preventDefault();
                        submitHandler({
                          name,
                          email,
                          number,
                          password,
                          role,
                        });
                      }}
                      className='btn btn-primary mr-2'>
                      Submit
                    </button>
                    <button
                      className='btn btn-light'
                      type='button'
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("/admins");
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

export default AddAdmin;
