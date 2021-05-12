import React, { useEffect, useState } from "react";
import { getBannedUser, unBanUserById } from "../../../actions/adminActions";
import { useHistory } from "react-router";
import { confirmAlert } from "react-confirm-alert";
import ConfirmaDialog from "../Jobs/ConfirmaDialog";
import ViewReason from "./ViewReason";

const BlockedCandidates = () => {
  const [bannedUsers, setBannedusers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const history = useHistory();

  const getAllBannedUsers = async () => {
    const candidates = await getBannedUser();
    await setBannedusers(candidates);
  };

  const unBanUser = async (id) => {
    const unbannedCandidate = await unBanUserById(id);
    if (unbannedCandidate) {
      setBannedusers((prevState) => {
        return prevState.filter((user) => {
          return user._id !== id;
        });
      });
    }
  };

  const getReason = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    getAllBannedUsers();
  }, []);

  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Blocked Candidates</h4>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Contact</th>
                          <th>Email ID</th>
                          <th>Active Since</th>
                          <th>Status</th>
                          <th>Reason</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {!Array.isArray(bannedUsers) ||
                        bannedUsers.length === 0 ? (
                          <tr>
                            <td>
                              <p>No blocked candidates</p>
                            </td>
                          </tr>
                        ) : (
                          bannedUsers &&
                          bannedUsers.map((user) => {
                            return (
                              <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.number}</td>
                                <td>{user.email}</td>
                                <td>$3200</td>
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
                                      getReason(user);
                                    }}>
                                    View
                                  </button>
                                </td>
                                <td>
                                  <button
                                    className='btn  btn-rounded btn-primary'
                                    style={{
                                      padding: "9px",
                                      marginRight: "5px",
                                      paddingLeft: "15px",
                                      paddingRight: "15px",
                                    }}
                                    onClick={() => {
                                      history.push({
                                        pathname: "/edit-candidate",
                                        state: user,
                                      });
                                    }}>
                                    Profile
                                  </button>
                                  <button
                                    className='btn  btn-rounded btn-success'
                                    style={{
                                      padding: "9px",
                                    }}
                                    onClick={() => {
                                      confirmAlert({
                                        customUI: ({ onClose }) => {
                                          return (
                                            <ConfirmaDialog
                                              perform={() => {
                                                unBanUser(user._id);
                                              }}
                                              action='Unblock'
                                              role={user.name}
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
      {selectedUser !== "" && (
        <ViewReason
          name={selectedUser.name}
          reason={selectedUser.banReason}
          closeModal={() => {
            setSelectedUser("");
          }}
        />
      )}
    </div>
  );
};

export default BlockedCandidates;
