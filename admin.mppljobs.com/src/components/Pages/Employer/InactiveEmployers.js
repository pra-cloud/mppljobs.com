/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { getInactiveEmployers } from "../../../actions/adminActions";

import { useHistory } from "react-router";

const InactiveEmployers = () => {
  const history = useHistory();

  const [inactiveEmp, setInactiveEmp] = useState([]);

  const getJobs = async () => {
    const emp = await getInactiveEmployers();
    if (emp) {
      setInactiveEmp(emp);
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
              <h4 className='card-title'>Employers</h4>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-responsive'>
                    <table id='order-listing' className='table'>
                      <thead>
                        <tr>
                          <th>Company</th>
                          <th>Email ID</th>
                          <th>Contact</th>
                          <th>Website</th>
                          <th>Subscription</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inactiveEmp.length === 0 ? (
                          <tr>
                            <td>
                              <p>No Inactive Employers</p>
                            </td>
                          </tr>
                        ) : (
                          inactiveEmp.map((emp, i) => {
                            return (
                              <tr key={i}>
                                <td>{emp.CompanyName || ""}</td>
                                <td>{emp.CompanyName || ""}</td>
                                <td>{emp.CompanyContact || ""}</td>
                                <td>
                                  <a href='https://toodecimal.com/'>
                                    {emp.Website}
                                  </a>
                                </td>
                                <td>
                                  <label className='badge badge-danger'>
                                    Expired
                                  </label>
                                </td>
                                <td>
                                  <button
                                    className='btn btn-dark btn-rounded'
                                    style={{
                                      padding: "10px",
                                      paddingLeft: "15px",
                                      paddingRight: "15px",
                                    }}
                                    onClick={() => {
                                      history.push({
                                        pathname: "/edit-employer",
                                        state: emp,
                                      });
                                    }}>
                                    View
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

export default InactiveEmployers;
