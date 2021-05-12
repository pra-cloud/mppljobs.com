import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { banAdmin, getAdmins } from "../../../actions/adminActions";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";

const Admins = (props) => {
  // const [page, setPage] = useState(Math.ceil(props.users.length / 10));
  const [adminArr, setAdminArr] = useState([]);
  const [perPage, setPerPage] = useState("10");
  const [pageNo, setPageNo] = useState("1");
  const [page, setPage] = useState();

  const getAllAdmins = async () => {
    try {
      const res = await axios.get(
        "http://api.mppljobs.com/api/admin/users/" + pageNo + "/" + perPage
      );
      setAdminArr(res.data.users);
      setPage(Math.ceil(res.data.length / 10));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    // props.getAdmins();
    getAllAdmins();
    console.log(adminArr);
  }, [pageNo]);
  return (
    <div>
      <div class="sidebar-light">
        <div class="container-scroller">
          <Navbar />
          <div class="container-fluid page-body-wrapper">
            <Sidebar />
            <div class="main-panel">
              <div class="content-wrapper">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Admins</h4>
                    <div class="row">
                      <div class="col-12">
                        <div class="table-responsive">
                          <Pagination
                            className="my-3"
                            siblingCount={1}
                            boundaryCount={1}
                            variant="outlined"
                            shape="rounded"
                            count={page}
                            onChange={(e) => {
                              if (e.target.textContent == "") {
                                var no = parseInt(pageNo);
                                setPageNo(no + 1);
                                getAllAdmins();
                              } else {
                                setPageNo(e.target.textContent);
                                getAllAdmins();
                              }
                            }}
                          />
                          <table class="table">
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
                              {adminArr.length == 0 ? (
                                <p>No Admins Created Yet!</p>
                              ) : (
                                adminArr.map((admin) => {
                                  return (
                                    <tr>
                                      <td>2012/08/03</td>
                                      <td>{admin.name}</td>
                                      <td>{admin.email}</td>
                                      <td>{admin.number}</td>
                                      <td>
                                        <a href="/edit-admin">
                                          <button
                                            class="btn btn-primary btn-rounded"
                                            style={{
                                              padding: "10px",
                                              paddingLeft: "15px",
                                              paddingRight: "15px",
                                            }}
                                          >
                                            View
                                          </button>
                                        </a>
                                      </td>
                                      <td>
                                        <button
                                          class="btn  btn-rounded btn-dark"
                                          style={{
                                            padding: "9px",
                                            marginRight: "5px",
                                            paddingLeft: "15px",
                                            paddingRight: "15px",
                                          }}
                                        >
                                          Access
                                        </button>
                                        <button
                                          class="btn  btn-rounded btn-danger"
                                          style={{
                                            padding: "9px",
                                            paddingLeft: "10px",
                                            paddingRight: "10px",
                                          }}
                                          onClick={() => {
                                            props.banAdmin(admin._id);
                                          }}
                                        >
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
              <footer class="footer">
                <div class="d-sm-flex justify-content-center justify-content-sm-between">
                  <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">
                    Copyright © 2021{" "}
                    <a href="https://www.toodecimal.com" target="_blank">
                      Too Decimal
                    </a>
                    . All rights reserved.
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  admins: state.admin.admins,
});

export default connect(mapStateToProps, {
  getAdmins,
  banAdmin,
})(Admins);
