import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { banAdminById, getAdmins, URL } from "../../../actions/adminActions";
import AdminAccessModal from "./AdminAccessModal";
import { useHistory } from "react-router";
import ConfirmaDialog from "../Jobs/ConfirmaDialog";
import { confirmAlert } from "react-confirm-alert";

const Admins = (props) => {
  const [adminArr, setAdminArr] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [perPage, setPerPage] = useState("10");
  const [pageNo, setPageNo] = useState("1");

  const history = useHistory();

  const [admins, setAdmins] = useState([]);

  const [adminRole, setAdminRole] = useState("");

  const getAllAdmins = async () => {
    let tokens =
      localStorage.getItem("x-auth-token") ||
      sessionStorage.getItem("x-auth-token");

    try {
      let config = {
        headers: {
          "x-auth-token": tokens,
        },
      };

      const res = await axios.get(
        URL + "/api/admin/users/" + pageNo + "/" + perPage,
        config
      );
      await setAdminArr(res.data.admins);
    } catch (error) {
      console.log(error.message);
    }
  };

  const gettingAllAdmins = async () => {
    const admins = await getAdmins();
    await setAdmins(admins);
  };

  const banAdmin = async (id) => {
    const bannedAdmin = await banAdminById(id);
    if (bannedAdmin) {
      setAdminArr((prevState) => {
        return prevState.filter((admin) => {
          return admin._id !== id;
        });
      });

      await gettingAllAdmins();
      await getAllAdmins();
    }
  };

  const getAdminAccess = (admin) => {
    setAdminRole(admin);
  };

  useEffect(() => {
    gettingAllAdmins();
  }, []);

  useEffect(() => {
    getAllAdmins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo]);
  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Admins</h4>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-responsive'>
                    <Pagination
                      className='my-3'
                      siblingCount={1}
                      boundaryCount={1}
                      variant='outlined'
                      shape='rounded'
                      count={Math.ceil(admins && admins.length / 10)}
                      onChange={(e, page) => {
                        setPageNo(page);
                      }}
                    />
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
                        {adminArr.length === 0 ? (
                          <tr>
                            <td>
                              <p>No Admins Created Yet!</p>
                            </td>
                          </tr>
                        ) : (
                          adminArr.map((admin, i) => {
                            return (
                              <tr key={i}>
                                <td>2012/08/03</td>
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
                                    disabled={admin.banAccount}
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
                                                banAdmin(admin._id);
                                              }}
                                              action='Block'
                                              role={admin.name}
                                              close={onClose}
                                            />
                                          );
                                        },
                                      });
                                    }}>
                                    Block
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

export default Admins;
