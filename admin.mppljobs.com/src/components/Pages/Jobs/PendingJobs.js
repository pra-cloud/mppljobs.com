import React, { useEffect, useState } from "react";
import {
  approveJobs,
  deleteJobByID,
  getUnApprovedJobs,
} from "../../../actions/adminActions";
import { useHistory } from "react-router";

import Moment from "react-moment";

import ConfirmaDialog from "./ConfirmaDialog";
import { confirmAlert } from "react-confirm-alert";

const PendingJobs = () => {
  const [jobs, setJobs] = useState([]);

  const history = useHistory();

  const getAllUnApprovedJobs = async () => {
    const jobs = await getUnApprovedJobs();
    if (jobs) {
      await setJobs(jobs);
    }
  };

  const approveJobsById = async (id) => {
    const isApproved = await approveJobs(id);
    if (isApproved) {
      setJobs((prevState) => {
        return prevState.filter((job) => {
          return job._id !== id;
        });
      });
    }
  };

  const deleteJob = async (id) => {
    const isDeleted = await deleteJobByID(id);
    if (isDeleted) {
      setJobs((prevState) => {
        return prevState.filter((job) => {
          return job._id !== id;
        });
      });
    }
  };

  useEffect(() => {
    getAllUnApprovedJobs();
  }, []);

  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Pending Jobs</h4>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Company</th>
                          <th>Openings</th>
                          <th>Published On</th>
                          <th>Validity</th>
                          <th>Status</th>
                          <th>View Job</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jobs.length === 0 ? (
                          <tr>
                            <td>
                              <p>No Unapproved Jobs</p>
                            </td>
                          </tr>
                        ) : (
                          jobs.map((job) => {
                            return (
                              <tr key={job._id}>
                                <td>{job.JobTitle}</td>
                                <td>{job.CompanyName}</td>
                                <td>{job.CompanyName}</td>
                                <td>
                                  <Moment format='DD/MM/YYYY'>
                                    {job.date}
                                  </Moment>
                                </td>
                                <td>
                                  <Moment format='DD/MM/YYYY'>
                                    {job.Validity}
                                  </Moment>
                                </td>
                                <td>
                                  <label className='badge badge-success'>
                                    Active
                                  </label>
                                </td>
                                <td>
                                  <button
                                    className='btn btn-primary btn-rounded'
                                    style={{
                                      padding: "10px",
                                      paddingLeft: "15px",
                                      paddingRight: "15px",
                                    }}
                                    onClick={() => {
                                      history.push({
                                        pathname: "/edit-jobs",
                                        state: job,
                                      });
                                    }}>
                                    View
                                  </button>
                                </td>
                                <td>
                                  <button
                                    className='btn  btn-rounded btn-dark'
                                    onClick={() => {
                                      confirmAlert({
                                        customUI: ({ onClose }) => {
                                          return (
                                            <ConfirmaDialog
                                              perform={() => {
                                                approveJobsById(job._id);
                                              }}
                                              action='Approve'
                                              role={job.JobTitle}
                                              close={onClose}
                                            />
                                          );
                                        },
                                      });

                                      // approveJobsById(job._id);
                                    }}
                                    style={{
                                      padding: "9px",
                                      marginRight: "5px",
                                      paddingLeft: "15px",
                                      paddingRight: "15px",
                                    }}>
                                    Approve
                                  </button>
                                  <button
                                    className='btn  btn-rounded btn-danger'
                                    style={{
                                      padding: "9px",
                                    }}
                                    onClick={() => {
                                      confirmAlert({
                                        customUI: ({ onClose }) => {
                                          return (
                                            <ConfirmaDialog
                                              perform={() => {
                                                deleteJob(job._id);
                                              }}
                                              action='Delete'
                                              role={job.JobTitle}
                                              close={onClose}
                                            />
                                          );
                                        },
                                      });
                                    }}>
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
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

export default PendingJobs;
