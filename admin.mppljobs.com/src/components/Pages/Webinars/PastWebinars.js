/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getInactiveWebinars } from "../../../actions/adminActions";

const PastWebinars = (props) => {
  const [inactiveWeb, setInactiveWeb] = useState([]);

  const getWebinars = async () => {
    const emp = await getInactiveWebinars();
    if (emp) {
      setInactiveWeb(emp);
    }
  };

  useEffect(() => {
    getWebinars();
  }, []);
  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Past Webinars</h4>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Category</th>
                          <th>Date</th>
                          <th>Time</th>
                          {/* <th>Actions</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {!Array.isArray(inactiveWeb) ||
                        inactiveWeb.length === 0 ? (
                          <tr>
                            <td>
                              <p>No Past Webinars</p>
                            </td>
                          </tr>
                        ) : (
                          Array.isArray(inactiveWeb) &&
                          inactiveWeb.map((webinars) => {
                            return (
                              <tr>
                                <td>{webinars.webinarTitle}</td>
                                <td>{webinars.webinarType}</td>
                                <td>{webinars.webinarDate}</td>
                                <td>{webinars.webinarTime}</td>
                                {/* <td>
                                        <button
                                          className="btn btn-primary btn-rounded"
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
              Copyright © 2021
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

const mapStateToProps = (state) => ({
  webinars: state.admin.webinars,
});
export default PastWebinars;
