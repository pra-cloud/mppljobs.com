/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { updateJobById, URL } from "../../../actions/adminActions";

import axios from "axios";
import Select from "react-select";
import InputArray from "../Candidates/InputArray";

const EditJob = (props) => {
  const selectedJob = props.location.state;

  const [CompanyName, setCompanyName] = useState(selectedJob.CompanyName || "");
  const [Desgination, setDesgination] = useState(selectedJob.Desgination || "");
  const [ContactPerson, setContactPerson] = useState(
    selectedJob.ContactPerson || ""
  );
  const [ContactNumber, setContactNumber] = useState(
    selectedJob.ContactNumber || ""
  );
  const [ContactEmail, setContactEmail] = useState(
    selectedJob.ContactEmail || ""
  );
  const [JobTitle, setJobTitle] = useState(selectedJob.JobTitle || "");
  const [JobType, setJobType] = useState(selectedJob.JobType || "");
  const [Validity, setValidity] = useState(
    new Date(selectedJob.Validity) || ""
  );

  const [questionArray, setQuestionArray] = useState(
    selectedJob.Questions || []
  );
  const [questionValue, setQuestionValue] = useState("");

  const [skillArray, setSkillArray] = useState(selectedJob.KeySkills || []);
  const [skillVal, setSkillVal] = useState("");

  const deleteLocation = (enteredQuest) => {
    setQuestionArray((prevState) => {
      return prevState.filter((quest) => {
        return quest !== enteredQuest;
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
  // const [Qualificaiton, setQualificaiton] = useState(
  //   selectedJob.Qualificaiton || ""
  // );
  // const [Experience, setExperience] = useState(selectedJob.Experience || "");
  // const [ExpectedCTC, setExpectedCTC] = useState(selectedJob.ExpectedCTC || "");
  // const [Industry, setIndustry] = useState(selectedJob.Industry || "");
  // const [KeySkills, setKeySkills] = useState([]);
  // const [Location, setLocation] = useState(selectedJob.Location.state || "");
  // const [PublishType, setPublishType] = useState("");
  // const [Remarks, setRemarks] = useState(selectedJob.Remarks || "");
  const [Description, setDescription] = useState(selectedJob.Description || "");
  const [startSalary, setStartSalary] = useState(
    selectedJob.SalaryRange.Starting || ""
  );
  const [endSalary, setEndSalary] = useState(
    selectedJob.SalaryRange.Ending || ""
  );
  // const [Distance, setDistance] = useState("");
  const [PreviousExp, setPreviousExp] = useState(selectedJob.PreviousExp || "");
  const [CompanyHireRate, setCompanyHireRate] = useState(
    selectedJob.CompanyHireRate || ""
  );
  // const [CompanyMemberSince, setCompanyMemberSince] = useState(
  //   selectedJob.CompanyMemberSince || ""
  // );

  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [Category, setCategory] = useState(selectedJob.Category || "");

  const history = useHistory();

  const getCompanies = async () => {
    let arr = [];
    try {
      const res = await axios.get(`${URL}/api/company/all`);

      if (res.data.cmp.length > 0) {
        // setCompanies(res.data);
        arr = res.data.cmp;
      }
      let arr2 = [];
      arr.map((company) => {
        arr2.push({
          value: company.CompanyName,
          label: company.CompanyName,
          id: company._id,
        });
      });
      setCompanies(arr2);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCategories = async () => {
    let arr = [];
    try {
      const res = await axios.get(`${URL}/api/category`);
      if (res.data.length > 0) {
        // setCategories(res.data);
        arr = res.data;
      }
      let arr2 = [];
      arr.map((category) => {
        arr2.push({ value: category.name, label: category.name });
      });
      setCategories(arr2);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCompanies();
    getCategories();
  }, []);

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const submitHandler = async () => {
    const isSaved = await updateJobById(
      {
        CompanyHireRate,
        CompanyName,
        Desgination,
        ContactEmail,
        ContactNumber,
        ContactPerson,
        JobTitle,
        JobType,
        Description,
        SalaryRange: {
          Starting: startSalary,
          Ending: endSalary,
        },
        PreviousExp,
        Category,
        Validity,
        Questions: questionArray,
        KeySkills: skillArray,
      },
      selectedJob._id
    );

    if (isSaved) {
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
                  <h4 className='card-title'>EDIT JOB</h4>
                  <form className='form-sample'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Company Name
                          </label>
                          <div className='col-sm-9'>
                            <Select
                              defaultInputValue={CompanyName}
                              options={companies}
                              onChange={(e) => {
                                setCompanyName(e.value);
                              }}
                              placeholder='Company'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Job Title
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              value={JobTitle}
                              onChange={(e) => {
                                setJobTitle(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Job Type
                          </label>
                          <div className='col-sm-9'>
                            <Select
                              defaultInputValue={JobType}
                              options={[
                                { value: "Freelance", label: "Freelance " },
                                { value: "Full Time", label: "Full Time" },
                                { value: "Internship", label: "Internship" },
                                { value: "Temporary", label: "Temporary" },
                                { value: "Volunteer", label: "Volunteer" },
                              ]}
                              onChange={(e) => {
                                setJobType(e.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Salary Range
                          </label>

                          <div className='col'>
                            <input
                              type='number'
                              className='form-control'
                              value={startSalary}
                              onChange={(e) => {
                                setStartSalary(e.target.value);
                              }}
                            />
                          </div>
                          <h6
                            style={{
                              marginTop: "14px",
                            }}>
                            {" "}
                            -{" "}
                          </h6>
                          <div className='col'>
                            <input
                              type='number'
                              className='form-control'
                              value={endSalary}
                              onChange={(e) => {
                                setEndSalary(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Salary Range
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              value={SalaryRange}
                              onChange={(e) => {
                                setSalaryRange(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                            </div> */}
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            htmlFor='exampleFormControlSelect2'
                            style={{ alignSelf: "center" }}>
                            Job Category
                          </label>
                          <div className='col-sm-9'>
                            <Select
                              defaultInputValue={Category}
                              options={categories}
                              placeholder='Categories'
                              onChange={(e) => {
                                setCategory(e.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Job Description
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              value={Description}
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                              className='form-control'
                              rows='4'></textarea>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Starting
                          </label>
                          <select className='form-control col-sm-9'>
                            <option>Immediately</option>
                            <option>1 Months</option>
                            <option>2 Months</option>
                            <option>3 Months</option>
                            <option>4 Months</option>
                            <option>5 Months</option>
                            <option>6 Months</option>
                            <option>7 Months</option>
                            <option>8 Months</option>
                            <option>9 Months</option>
                            <option>10 Months</option>
                            <option>11 Months</option>
                            <option>12 Months</option>
                          </select>

                          {/* <div className="col-sm-5">
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        type="radio"
                                        className="form-check-input"
                                        name="membershipRadios"
                                        id="membershipRadios2"
                                        value="option2"
                                      />
                                      In{" "}
                                      <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                      </select>{" "}
                                      Months
                                    </label>
                                  </div>
                                </div>
                               */}
                        </div>
                      </div>
                      {/*<div className='col-md-6'>
                              <div className='form-group row'>
                                <label className='col-sm-3 col-form-label'>
                                  Location
                                </label>
                                <div className='col-sm-9'>
                                  <input
                                    type='text'
                                    value={Location}
                                    onChange={(e) => {
                                      setLocation(e.target.value);
                                    }}
                                    className='form-control'
                                  />
                                </div>
                              </div>
                                  </div>  */}
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            style={{ alignSelf: "center" }}>
                            Key Skills
                          </label>
                          <div className='col-sm-9'>
                            <div data-repeater-list='group-a'>
                              <div data-repeater-item className='d-flex mb-2'>
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
                            Questions
                          </label>
                          <div className='col-sm-9'>
                            <div data-repeater-list='group-a'>
                              <div data-repeater-item className='d-flex mb-2'>
                                <div className='input-group mb-2 mr-sm-2 mb-sm-0'>
                                  <div className='input-group-prepend'>
                                    <span className='input-group-text'>@</span>
                                  </div>
                                  <input
                                    type='text'
                                    className='form-control form-control-sm'
                                    value={questionValue}
                                    onChange={(e) => {
                                      setQuestionValue(e.target.value);
                                    }}
                                    placeholder='Add Questions'
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
                                    if (questionValue === "") {
                                      return;
                                    }
                                    setQuestionArray((prevState) => {
                                      return [...prevState, questionValue];
                                    });
                                    setQuestionValue("");
                                  }}
                                  className='btn btn-info btn-sm icon-btn ml-2 mb-2'>
                                  <i className='mdi mdi-plus'></i>
                                </button>
                              </div>
                            </div>

                            {questionArray &&
                              questionArray.map((skill) => (
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
                            Publish Type
                          </label>
                          <div className='col-sm-9'>
                            <select className='form-control'>
                              <option>Basic</option>
                              <option>Sponsored</option>
                              <option>Top Rated</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Previous Experience
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              value={PreviousExp}
                              onChange={(e) => {
                                setPreviousExp(e.target.value);
                              }}
                              className='form-control'
                              rows='4'></textarea>
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
                            className='input-group date datepicker col-sm-9'>
                            <input
                              type='date'
                              className='form-control'
                              value={convert(Validity)}
                              onChange={(e) => {
                                console.log(e);
                                setValidity(e.target.value);
                              }}
                            />
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

export default EditJob;
