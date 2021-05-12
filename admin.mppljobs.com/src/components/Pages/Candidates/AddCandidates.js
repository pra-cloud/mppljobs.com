import React, { useState } from "react";
import { useHistory } from "react-router";
import { createUser } from "../../../actions/adminActions";
import makeToast from "../../../Toaster";

const AddCandidates = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [saved, setSaved] = useState();
  const history = useHistory();

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
                      <h4 className='card-title'>ADD CANDIDATES</h4>
                      <form className='form-sample'>
                        <div className='column'>
                          <div className='col-md-7'>
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
                          <div className='col-md-7'>
                            <div className='form-group row'>
                              <label className='col-sm-3 col-form-label'>
                                Email
                              </label>
                              <div className='col-sm-9'>
                                <input
                                  type='email'
                                  value={email}
                                  required={true}
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                                  className='form-control'
                                />
                              </div>
                            </div>
                          </div>
                          <div className='col-md-7'>
                            <div className='form-group row'>
                              <label
                                className='col-sm-3'
                                style={{ alignSelf: "center" }}>
                                Contact Number
                              </label>
                              <div className='col-sm-9'>
                                <input
                                  type='number'
                                  className='form-control'
                                  required={true}
                                  value={number}
                                  onChange={(e) => {
                                    setNumber(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className='col-md-7'>
                            <div className='form-group row'>
                              <label
                                className='col-sm-3'
                                style={{ alignSelf: "center" }}>
                                Password
                              </label>
                              <div className='col-sm-9'>
                                <input
                                  type='password'
                                  className='form-control'
                                  required={true}
                                  value={password}
                                  onChange={(e) => {
                                    setPassword(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type='submit'
                          onClick={async (e) => {
                            e.preventDefault();

                            if (name === "" || email === "" || number === "") {
                              return makeToast(
                                "error",
                                "Please add all the fields"
                              );
                            }

                            if (number.toString().length < 10) {
                              return makeToast(
                                "error",
                                "Contact Number should atleast have 10 digits"
                              );
                            }

                            if (
                              !email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
                            ) {
                              return makeToast(
                                "error",
                                "Please add a valid email"
                              );
                            }

                            setSaved(
                              await createUser({
                                name,
                                email,
                                number,
                                password,
                              })
                            );
                            if (saved) {
                              makeToast("success", "Created");
                              history.push("/candidates");
                            } else {
                              history.push("/candidates");
                            }
                          }}
                          className='btn btn-primary mr-2'>
                          Submit
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
      </div>
    </div>
  );
};

export default AddCandidates;
