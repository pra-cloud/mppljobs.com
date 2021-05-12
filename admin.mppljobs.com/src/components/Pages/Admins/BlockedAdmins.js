import React, { useEffect } from "react";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useHistory } from "react-router";
import { getBannedAdmins, unBanAdmin } from "../../../actions/adminActions";
import ConfirmaDialog from "../Jobs/ConfirmaDialog";
import AdminAccessModal from "./AdminAccessModal";

const BlockedAdmins = (props) => {
  const [bannedAdmins, setBannedAdmins] = useState([]);
  const [adminRole, setAdminRole] = useState("");

  const history = useHistory();

  const getAllBannedAdmins = async () => {
    const admins = await getBannedAdmins();
    await setBannedAdmins(admins);
  };

  const unBanConsultant = async (id) => {
    const unbannedAdmin = await unBanAdmin(id);
    if (unbannedAdmin) {
      setBannedAdmins((prevState) => {
        return prevState.filter((admin) => {
          return admin._id !== id;
        });
      });
    }
  };

  const getAdminAccess = (admin) => {
    setAdminRole(admin);
  };

  useEffect(() => {
    getAllBannedAdmins();
  }, []);

  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Blocked Admins</h4>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Employee ID</th>
                          <th>Name</th>
                          <th>Email ID</th>
                          <th>Contact Number</th>
                          <th>Profile</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bannedAdmins === undefined ||
                        bannedAdmins.length === 0 ? (
                          <tr>
                            <td>
                              <p>No Blocked Admins</p>
                            </td>
                          </tr>
                        ) : (
                          bannedAdmins.length !== 0 &&
                          bannedAdmins.map((admin, i) => {
                            return (
                              <tr key={i}>
                                <td>{admin.empID}</td>
                                <td>{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>{admin.number}</td>
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
                                        pathname: "/edit-admin",
                                        state: admin,
                                      });
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
                                      getAdminAccess(admin);
                                    }}>
                                    Access
                                  </button>
                                  <button
                                    className='btn  btn-rounded btn-danger'
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
                                                unBanConsultant(admin._id);
                                              }}
                                              action='Block'
                                              role={admin.name}
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
      {adminRole !== "" && (
        <AdminAccessModal
          name={adminRole.name}
          role={adminRole.role}
          closeModal={() => {
            setAdminRole("");
          }}
        />
      )}
    </div>
  );
};

export default BlockedAdmins;
