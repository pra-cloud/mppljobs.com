/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import { updateWebinarByID } from "../../../actions/adminActions";

const EditWebinars = (props) => {
  const history = useHistory();
  const [edit, setEdit] = useState(false);

  const selectedWebinar = props.location.state && props.location.state;

  const [webinarLink, setWebinarLink] = useState(
    selectedWebinar.webinarLink || ""
  );
  const [webinarTitle, setWebinarTitle] = useState(
    selectedWebinar.webinarTitle || ""
  );
  const [webinarType, setWebinarType] = useState(
    selectedWebinar.webinarType || ""
  );
  const [webinarDate, setWebinarDate] = useState(
    selectedWebinar.webinarDate || ""
  );
  const [webinarTime, setWebinarTime] = useState(
    selectedWebinar.webinarTime || ""
  );
  const [webinarDescription, setWebinarDescription] = useState(
    selectedWebinar.webinarDescription || ""
  );
  const [webinarKeywords, setWebinarKeywords] = useState([]);
  const [webinarAudience, setWebinarAudience] = useState(
    selectedWebinar.webinarAudience || ""
  );
  const [instructorName, setInstructorName] = useState(
    selectedWebinar.webinarInstructor.instructorName || ""
  );
  const [aboutInstructor, setaboutInstructor] = useState(
    selectedWebinar.webinarInstructor.aboutInstructor || ""
  );
  const [designation, setDesignation] = useState(
    selectedWebinar.webinarInstructor.designation || ""
  );
  // const [companies, setCompanies] = useState([]);
  // const [companies, setCompanies] = useState([]);
  const [CompanyName, setCompanyName] = useState("");
  // const getCompanies = async () => {
  //   let arr = [];
  //   try {
  //     const res = await axios.get("http://localhost:5000/api/company/all");
  //     if (res.data.length > 0) {
  //       // setCompanies(res.data);
  //       arr = res.data;
  //     }
  //     let arr2 = [];
  //     arr.map((company) => {
  //       arr2.push({
  //         value: company.CompanyName,
  //         label: company.CompanyName,
  //         id: company._id,
  //       });
  //     });
  //     setCompanies(arr2);
  //     // console.log(companies);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const getCompanydetails = async (id) => {
    try {
      // const res = await axios.get(
      //   "http://localhost:5000/api/company/details/" + id
      // );
      const company = await getCompanydetails(id);

      let arr = [];
      arr = company.OtherOffices;
      arr.push(company.HeadOffice);
      let arr2 = [];
      arr.map((location) => {
        arr2.push({ value: location, label: location });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  // useEffect(() => {
  //   getCompanies();
  // }, []);

  const submitHandler = async () => {
    var webinarInstructor = {
      instructorName: instructorName,
      designation: designation,
      aboutInstructor: aboutInstructor,
    };

    const isUpdated = await updateWebinarByID(
      {
        webinarAudience,
        webinarDate,
        webinarDescription,
        webinarInstructor,
        webinarLink,
        webinarTitle,
        webinarTime,
        webinarType,
      },
      selectedWebinar._id
    );

    if (isUpdated) {
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
                    <h4 className='card-title'>EDIT WEBINARS</h4>
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
                            Audience
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              className='form-control'
                              rows='4'
                              value={webinarAudience}
                              onChange={(e) => {
                                setWebinarAudience(e.target.value);
                              }}
                              disabled={!edit}></textarea>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Description
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              className='form-control'
                              rows='4'
                              value={webinarDescription}
                              onChange={(e) => {
                                setWebinarDescription(e.target.value);
                              }}
                              disabled={!edit}></textarea>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Title
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={webinarTitle}
                              onChange={(e) => {
                                setWebinarTitle(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Category
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={webinarType}
                              onChange={(e) => {
                                setWebinarType(e.target.value);
                              }}
                              disabled={!edit}
                            />
                            {/*<Select 
                              options={companies}
                              onChange={(e) => {
                                getCompanydetails(e.id);
                                setCompanyName(e.value);
                              }}
                              disabled={!edit}
                              placeholder='Company'
                            /> */}
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div
                          className='form-group'
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}>
                          <label
                            className='col-sm-3'
                            style={{ alignSelf: "center" }}>
                            Time
                          </label>
                          <input
                            type='time'
                            className='form-control'
                            value={webinarTime}
                            onChange={(e) => {
                              setWebinarTime(e.target.value);
                            }}
                            disabled={!edit}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div
                          className='form-group'
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}>
                          <label
                            className='col-sm-3'
                            style={{ alignSelf: "center" }}>
                            Date
                          </label>
                          <input
                            className='form-control'
                            type='date'
                            value={webinarDate}
                            onChange={(e) => {
                              setWebinarDate(e.target.value);
                            }}
                            disabled={!edit}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Instructor Name
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={instructorName}
                              onChange={(e) => {
                                setInstructorName(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Instructor Profile
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={designation}
                              onChange={(e) => {
                                setDesignation(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            About Instructor
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              className='form-control'
                              rows='4'
                              value={aboutInstructor}
                              onChange={(e) => {
                                setaboutInstructor(e.target.value);
                              }}
                              disabled={!edit}></textarea>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Event Link
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={webinarLink}
                              onChange={(e) => {
                                setWebinarLink(e.target.value);
                              }}
                              disabled={!edit}
                            />
                          </div>
                        </div>
                      </div>

                      {/* <div className="col-md-6">
                              <div className="card-body">
                                <h4 className="card-title">Input Tag</h4>
                                <p className="card-description">
                                  Type to add a new tag
                                </p>
                                <input
                                  name="tags"
                                  id="tags"
                                  value="London,Canada,Australia,Mexico"
                                  value="sample"
                                  disabled={!edit}
                                />
                              </div>
                            </div> */}
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

export default connect(null, {
  updateWebinarByID,
})(EditWebinars);
