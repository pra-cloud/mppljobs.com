import React, { useEffect, useState } from "react";
import { getInactiveJobs } from "../../../actions/adminActions";

const InactiveEmployers = () => {
  const [inactiveJobs, setInactiveJobs] = useState([]);

  const getJobs = async () => {
    const jobs = await getInactiveJobs();
    if (jobs) {
      setInactiveJobs(jobs);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);
  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Jobs</h4>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Company</th>
                          <th>Email ID</th>
                          <th>Contact</th>
                          <th>Website</th>
                          <th>Subscription</th>
                          {/* <th>Actions</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {inactiveJobs.length === 0 ? (
                          <tr>
                            <td>
                              <p>No Old Jobs</p>
                            </td>
                          </tr>
                        ) : (
                          inactiveJobs.map((jobs) => {
                            return (
                              <tr key={jobs._id}>
                                <td>{jobs.CompanyName}</td>
                                <td>{jobs.ContactEmail}</td>
                                <td>{jobs.ContactNumber}</td>
                                <td>
                                  <a href='https://toodecimal.com/'>
                                    www.toodecimal.com
                                  </a>
                                </td>
                                <td>
                                  <label className='badge badge-danger'>
                                    Expired
                                  </label>
                                </td>
                                {/* <td>
                                        <button
                                          className="btn btn-dark btn-rounded"
                                          style={{
                                            padding: "10px",
                                            paddingLeft: "15px",
                                            paddingRight: "15px",
                                          }}
                                        >
                                          View
                                        </button>
                                      </td> */}
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

export default InactiveEmployers;
