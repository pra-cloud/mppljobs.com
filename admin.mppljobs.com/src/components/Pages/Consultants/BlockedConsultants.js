/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useHistory } from "react-router";
import {
  getBannedConsultants,
  unBanConsultantById,
} from "../../../actions/adminActions";
import ViewReason from "../Candidates/ViewReason";
import ConfirmaDialog from "../Jobs/ConfirmaDialog";

const BlockedConsultants = (props) => {
  const history = useHistory();

  const [bannedConsultants, setBannedConsultants] = useState([]);
  const [selectedConsultant, setSelectedConsultant] = useState("");

  const getAllBannedConsultants = async () => {
    const candidates = await getBannedConsultants();
    await setBannedConsultants(candidates);
  };

  const unBanConsultant = async (id) => {
    const unbannedCandidate = await unBanConsultantById(id);
    if (unbannedCandidate) {
      setBannedConsultants((prevState) => {
        return prevState.filter((user) => {
          return user._id !== id;
        });
      });
    }
  };

  const getReason = (user) => {
    setSelectedConsultant(user);
  };

  useEffect(() => {
    getAllBannedConsultants();
  }, []);

  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Blocked Consultants</h4>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Sector</th>
                          <th>Average Rating</th>
                          <th>Reason</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bannedConsultants === undefined ||
                        bannedConsultants.length === 0 ? (
                          <tr>
                            <td>
                              <p>No Data Found</p>
                            </td>
                          </tr>
                        ) : (
                          bannedConsultants.map((consultant, i) => {
                            return (
                              <tr key={i}>
                                <td>{consultant.name}</td>
                                <td>{consultant.email}</td>
                                <td>{consultant.experience}</td>
                                <td>
                                  <button
                                    className='btn btn-primary btn-rounded'
                                    style={{
                                      padding: "10px",
                                      paddingLeft: "15px",
                                      paddingRight: "15px",
                                    }}
                                    onClick={() => {
                                      getReason(consultant);
                                    }}>
                                    View
                                  </button>
                                </td>
                                <td>
                                  <button
                                    className='btn  btn-rounded btn-dark'
                                    style={{
                                      padding: "9px",
                                      marginRight: "5px",
                                      paddingLeft: "15px",
                                      paddingRight: "15px",
                                    }}
                                    onClick={() => {
                                      history.push({
                                        pathname: "/edit-consultant",
                                        state: consultant,
                                      });
                                    }}>
                                    Edit
                                  </button>
                                  <button
                                    className='btn  btn-rounded btn-success'
                                    style={{
                                      padding: "9px",
                                      paddingLeft: "10px",
                                      paddingRight: "10px",
                                    }}
                                    onClick={() => {
                                      confirmAlert({
                                        customUI: ({ onClose }) => {
                                          return (
                                            <ConfirmaDialog
                                              perform={() => {
                                                unBanConsultant(consultant._id);
                                              }}
                                              action='Unblock'
                                              role={consultant.name}
                                              close={onClose}
                                            />
                                          );
                                        },
                                      });
                                    }}>
                                    Unblock
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
      {selectedConsultant !== "" && (
        <ViewReason
          name={selectedConsultant.name}
          reason={selectedConsultant.banReason}
          closeModal={() => {
            setSelectedConsultant("");
          }}
        />
      )}
    </div>
  );
};

export default BlockedConsultants;
