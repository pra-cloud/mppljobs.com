/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  createJob,
  getAllCategories,
  getAllCompanies,
  getCompanyDetails,
} from "../../../actions/adminActions";

import makeToast from "../../../Toaster";
import Select from "react-select";
import InputArray from "../Candidates/InputArray";

const AddJobs = () => {
  const history = useHistory();

  const [CompanyName, setCompanyName] = useState("");
  const [Desgination, setDesgination] = useState("");
  const [ContactPerson, setContactPerson] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [ContactEmail, setContactEmail] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [JobType, setJobType] = useState("");
  const [Qualificaiton, setQualificaiton] = useState("");
  // const [Experience, setExperience] = useState("");
  const [ExpectedCTC, setExpectedCTC] = useState("");
  const [Industry, setIndustry] = useState("");
  const [Location, setLocation] = useState("");
  const [PublishType, setPublishType] = useState("");
  const [Remarks, setRemarks] = useState("");
  const [Description, setDescription] = useState("");
  const [startSalary, setStartSalary] = useState("");
  const [endSalary, setEndSalary] = useState("");
  // const [Distance, setDistance] = useState("");
  const [PreviousExp, setPreviousExp] = useState("");
  const [CompanyHireRate, setCompanyHireRate] = useState("");
  const [CompanyMemberSince, setCompanyMemberSince] = useState("");
  const [Category, setCategory] = useState("");

  const [JobStatus, setJobStatus] = useState("");
  const [Logo, setLogo] = useState("");
  const [Starting, setStarting] = useState("");
  const [AboutCompany, setAboutCompany] = useState("");
  const [Validity, setValidity] = useState("");
  const [Positions, setPositions] = useState("");
  // const [Featured, setFeatured] = useState("");
  const [PostingType, setPostingType] = useState("");
  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const [questionArray, setQuestionArray] = useState([]);
  const [questionValue, setQuestionValue] = useState("");

  const [skillArray, setSkillArray] = useState([]);
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

  const getCompanies = async () => {
    let arr = [];
    try {
      const companies = await getAllCompanies();

      if (companies.length > 0) {
        // setCompanies(res.data);
        arr = companies;
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
      const categories = await getAllCategories();
      if (categories.length > 0) {
        // setCategories(res.data);
        arr = categories;
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

  const getSelectedCompanydetails = async (id) => {
    try {
      const company = await getCompanyDetails(id);

      console.log(company);
      setContactEmail(company.CompanyEmail || "");
      setContactNumber(parseInt(company.CompanyContact) || "");
      setLogo(company.Logo || "");
      setAboutCompany(company.CompanyDescription || "");
      setCompanyHireRate(company.CompanyHireRate || "");
      setCompanyMemberSince(company.JoiningDate || "");
      setCompanyMemberSince(company.JoiningDate || "");
      let arr = [];
      arr = company.OtherOffices;
      arr.push(company.HeadOffice);
      let arr2 = [];
      arr.map((location) => {
        arr2.push({ value: location, label: location });
      });
      setLocations(arr2);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCompanies();
    getCategories();
  }, []);

  const submitHandler = async () => {
    const job = {
      PublishType: PublishType || "",
      Qualificaiton: Qualificaiton || "",
      Location: Location || "",
      CompanyHireRate: CompanyHireRate || "45%",
      CompanyName: CompanyName || "",
      Desgination: Desgination || "",
      ContactEmail: ContactEmail || "",
      ContactNumber: ContactNumber || "",
      ContactPerson: ContactPerson || "",
      JobTitle: JobTitle || "",
      Description: Description || "",
      SalaryRange: {
        Starting: startSalary,
        Ending: endSalary,
      },
      PreviousExp: PreviousExp || "",
      JobType: JobType || "",
      Starting: Starting || "",
      Category: Category || "",
      ExpectedCTC: ExpectedCTC || "",
      Industry: Industry || "",
      KeySkills: skillArray || "",
      Remarks: Remarks || "",
      CompanyMemberSince: CompanyMemberSince || "",
      JobStatus: JobStatus || "",
      AboutCompany: AboutCompany || "",
      Validity: Validity || "",
      Positions: Positions || "",
      Questions: questionArray || "",
      PostingType: PostingType || "",
    };

    const jobInputArray = Object.keys(job);

    const isJobInputEmptpy = jobInputArray.every((jobInput) => {
      return job[jobInput].length !== 0;
    });

    if (!isJobInputEmptpy) {
      return makeToast("error", "Please add all the fields");
    }

    if (ContactNumber.toString().length < 10)
      return makeToast("error", "Contact Number should have atleast 10 digits");

    const create = await createJob(job);

    if (create) {
      makeToast("success", "Job Created");
      history.push("/pending-jobs");
    } else {
      makeToast("error", "Error");
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
                  <h4 className='card-title'>Add JOB</h4>
                  <form className='form-sample'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Company Name
                          </label>
                          <div className='col-sm-9'>
                            <Select
                              options={companies}
                              onChange={(e) => {
                                getSelectedCompanydetails(e.id);
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
                              required={true}
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
                              onChange={(e) => {
                                setJobType(e.value);
                              }}
                              options={[
                                { value: "Freelance", label: "Freelance " },
                                { value: "Full Time", label: "Full Time" },
                                { value: "Internship", label: "Internship" },
                                { value: "Temporary", label: "Temporary" },
                                { value: "Volunteer", label: "Volunteer" },
                              ]}
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
                      {/* <div className="col-md-6">
                              <div className="form-group row">
                                <label
                                  className="col-sm-3"
                                  for="exampleFormControlSelect2"
                                  style={{ alignSelf: "center" }}
                                >
                                  Job Category
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    value={Category}
                                    onChange={(e) => {
                                      setCategory(e.target.value);
                                    }}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div> */}
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Job Category
                          </label>
                          <div className='col-sm-9'>
                            <Select
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
                          <label
                            className='col-sm-3'
                            htmlFor='exampleFormControlSelect2'
                            style={{ alignSelf: "center" }}>
                            Designation
                          </label>
                          <div className='col-sm-9'>
                            <input
                              required={true}
                              type='text'
                              value={Desgination}
                              onChange={(e) => {
                                setDesgination(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            htmlFor='exampleFormControlSelect2'
                            style={{ alignSelf: "center" }}>
                            Contact Person
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              required={true}
                              value={ContactPerson}
                              onChange={(e) => {
                                setContactPerson(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            htmlFor='exampleFormControlSelect2'
                            style={{ alignSelf: "center" }}>
                            Contact Number
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='number'
                              required={true}
                              value={ContactNumber}
                              onChange={(e) => {
                                setContactNumber(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label
                            className='col-sm-3'
                            htmlFor='exampleFormControlSelect2'
                            style={{ alignSelf: "center" }}>
                            Contact Email
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='email'
                              required={true}
                              value={ContactEmail}
                              onChange={(e) => {
                                setContactEmail(e.target.value);
                              }}
                              className='form-control'
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
                          <select
                            className='form-control col-sm-9'
                            id='exampleFormControlSelect2'
                            onChange={(e) => {
                              setStarting(e.target.value);
                            }}>
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
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                  Location
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    value={Location}
                                    onChange={(e) => {
                                      setLocation(e.target.value);
                                    }}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div> */}
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Location
                          </label>
                          <div className='col-sm-9'>
                            <Select
                              options={locations}
                              placeholder='Locations'
                              onChange={(e) => {
                                setLocation(e.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                              <div className="form-group row">
                                <label
                                  className="col-sm-3"
                                  for="exampleFormControlSelect2"
                                  style={{ alignSelf: "center" }}
                                >
                                  Skills & Requirements
                                </label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div> */}
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Publish Type
                          </label>
                          <div className='col-sm-9'>
                            <select
                              onChange={(e) => {
                                setPublishType(e.target.value);
                              }}
                              className='form-control'>
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
                              required={true}
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
                            Logo
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              required={true}
                              disabled
                              value={Logo}
                              onChange={(e) => {
                                setLogo(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            About Company
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              required={true}
                              value={AboutCompany}
                              disabled
                              onChange={(e) => {
                                setAboutCompany(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Positions
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='number'
                              required={true}
                              value={Positions}
                              onChange={(e) => {
                                setPositions(e.target.value);
                                if (e.target.value <= 0) {
                                  setPositions(0);
                                }
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>
                      {/*<div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Questions
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              required={true}
                              value={Questions}
                              onChange={(e) => {
                                setQuestions(e.target.value);
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
                            Qualification
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              required={true}
                              value={Qualificaiton}
                              onChange={(e) => {
                                setQualificaiton(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            ExpectedCTC
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='number'
                              required={true}
                              value={ExpectedCTC}
                              onChange={(e) => {
                                setExpectedCTC(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Industry
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              value={Industry}
                              onChange={(e) => {
                                setIndustry(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Key Skills
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              value={KeySkills}
                              required={true}
                              onChange={(e) => {
                                setKeySkills(e.target.value);
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
                          <label className='col-sm-3 col-form-label'>
                            Remarks
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              value={Remarks}
                              required={true}
                              onChange={(e) => {
                                setRemarks(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                  Distance
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    value={Distance}
                                    onChange={(e) => {
                                      setDistance(e.target.value);
                                    }}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div> */}
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Company Hire Rate
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              disabled
                              required={true}
                              value={CompanyHireRate}
                              onChange={(e) => {
                                setCompanyHireRate(e.target.value);
                              }}
                              className='form-control'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Company Membership Since
                          </label>
                          <div
                            id='datepicker-popup'
                            className='input-group date datepicker col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              disabled
                              required={true}
                              value={CompanyMemberSince}
                              onChange={(e) => {
                                setCompanyMemberSince(e.target.value);
                              }}
                            />
                            <span className='input-group-addon input-group-append border-left'>
                              <span className='mdi mdi-calendar input-group-text'></span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Job Status
                          </label>
                          <div className='col-sm-9'>
                            <div className='col-sm-9'>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "5px",
                                }}>
                                <div style={{ padding: "10px" }}>
                                  <label style={{ marginRight: "10px" }}>
                                    Active
                                  </label>
                                  <input
                                    type='radio'
                                    name='status'
                                    value={JobStatus}
                                    required={true}
                                    onChange={(e) => {
                                      setJobStatus("Active");
                                    }}
                                  />
                                </div>
                                <div style={{ padding: "10px" }}>
                                  <label style={{ marginRight: "10px" }}>
                                    Inactive
                                  </label>
                                  <input
                                    required={true}
                                    type='radio'
                                    name='status'
                                    value={JobStatus}
                                    onChange={(e) => {
                                      setJobStatus("Inactive");
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                  Posting Type
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    value={PostingType}
                                    onChange={(e) => {
                                      setPostingType(e.target.value);
                                    }}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div> */}
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Featured
                          </label>
                          <div className='col-sm-9'>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "5px",
                              }}>
                              <div style={{ padding: "10px" }}>
                                <label style={{ marginRight: "10px" }}>
                                  Yes
                                </label>
                                <input
                                  type='radio'
                                  name='featured'
                                  value={"true"}
                                  required={true}
                                  onChange={(e) => {
                                    setPostingType("true");
                                  }}
                                />
                              </div>
                              <div style={{ padding: "10px" }}>
                                <label style={{ marginRight: "10px" }}>
                                  No
                                </label>
                                <input
                                  required={true}
                                  type='radio'
                                  name='featured'
                                  value={"false"}
                                  onChange={(e) => {
                                    setPostingType("false");
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
                        history.push("/posted-jobs");
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

export default AddJobs;

// <div className='col-sm-9'>
// <input
//   type='number'
//   required={true}
//   value={SalaryRange}
//   onChange={(e) => {
//     setSalaryRange(e.target.value);
//   }}
//   class='form-control'
// />
// <input
//   type='number'
//   required={true}
//   value={SalaryRange}
//   onChange={(e) => {
//     setSalaryRange(e.target.value);
//   }}
//   class='form-control'
// />
// </div>
