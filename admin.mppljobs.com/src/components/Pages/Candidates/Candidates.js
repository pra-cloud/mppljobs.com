import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  banUserById,
  getAllUsers,
  getUserDetailsByID,
} from "../../../actions/adminActions";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import { CSVLink } from "react-csv";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
const useFilterData = (fItems, config = null) => {
  const [filterConfig, setFilterConfig] = useState(config);

  const filterItems = useMemo(() => {
    let filterableItems = [...fItems];
    if (filterConfig !== null) {
      filterableItems = filterableItems.filter((user) => {
        if (
          user.name.includes(filterConfig.key) ||
          user.email.includes(filterConfig.key)
        ) {
          return user;
        }
      });
    }
    return filterableItems;
  }, [fItems, filterConfig]);

  const requestFilter = (key) => {
    setFilterConfig({ key });
  };
  return { fItems: filterItems, requestFilter, filterConfig };
};

const useSortableData = (items, config = null) => {
  const [sortCoonfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortCoonfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortCoonfig.key] < b[sortCoonfig.key]) {
          return sortCoonfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortCoonfig.key] > b[sortCoonfig.key]) {
          return sortCoonfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortCoonfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortCoonfig &&
      sortCoonfig.key == key &&
      sortCoonfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  return { items: sortedItems, requestSort, sortCoonfig };
};

const Candidates = (props) => {
  const [candidatesArr, setCandidatesArr] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get(
        "http://api.mppljobs.com/api/user/users/" + pageNo + "/" + perPage
      );
      setCandidatesArr(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const { items, requestSort, sortCoonfig } = useSortableData(candidatesArr);
  const history = useHistory();
  const { fItems, requestFilter, filterConfig } = useFilterData(candidatesArr);

  const [page, setPage] = useState(Math.ceil(props.users.length / 10));
  const [perPage, setPerPage] = useState("10");
  const [pageNo, setPageNo] = useState("1");
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [numberFilter, setNumberFilter] = useState("");

  const [filter, setFilter] = useState(false);
  useEffect(() => {
    props.getAllUsers();
    getUsers();
    // console.log(candida)

    if (nameFilter !== "" || emailFilter !== "" || numberFilter !== "") {
      setFilter(false);
    } else {
      setFilter(true);
    }
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
                    <h4 class="card-title">Candidates</h4>
                    <CSVLink
                      data={items}
                      filename={"Users_" + Date.now() + ".csv"}
                      className="btn btn-primary btn-rounded btn-fw"
                      style={{ marginLeft: 10, marginBottom: 10 }}
                    >
                      Export to CSV
                    </CSVLink>
                    <br />
                    Filter
                    <div class="form-group">
                      <div class="form-group row">
                        <input
                          type="text"
                          class="form-control col-sm-2"
                          id="exampleFormControlSelect2"
                          placeholder="Name"
                          value={nameFilter}
                          onChange={(e) => {
                            setNameFilter(e.target.value);
                            requestFilter(e.target.value);
                          }}
                        ></input>
                        <input
                          type="text"
                          class="form-control col-sm-2"
                          id="exampleFormControlSelect2"
                          placeholder="Email"
                          value={emailFilter}
                          onChange={(e) => {
                            setEmailFilter(e.target.value);
                            requestFilter(e.target.value);
                          }}
                        ></input>
                        <input
                          type="text"
                          class="form-control col-sm-2"
                          id="exampleFormControlSelect2"
                          placeholder="Number"
                          value={numberFilter}
                          onChange={(e) => {
                            setNumberFilter(e.target.value);
                            requestFilter(e.target.value);
                          }}
                        ></input>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="table-responsive">
                          <Pagination
                            className="my-3"
                            siblingCount={1}
                            boundaryCount={1}
                            variant="outlined"
                            shape="rounded"
                            count={Math.ceil(props.users.length / 10)}
                            onChange={(e) => {
                              if (e.target.textContent == "") {
                                var no = parseInt(pageNo);
                                setPageNo(no + 1);
                                getUsers();
                              } else {
                                setPageNo(e.target.textContent);
                                getUsers();
                              }
                            }}
                          />
                          <table class="table">
                            <thead>
                              <tr>
                                <th
                                  onClick={() => {
                                    requestSort("name");
                                    setFilter(true);
                                    if (filter) {
                                      setFilter(false);
                                    } else {
                                      setFilter(true);
                                    }
                                  }}
                                >
                                  Name
                                </th>
                                <th
                                  onClick={() => {
                                    requestSort("email");
                                    setFilter(true);
                                    if (filter) {
                                      setFilter(false);
                                    } else {
                                      setFilter(true);
                                    }
                                  }}
                                >
                                  Email ID
                                </th>
                                <th
                                  onClick={() => {
                                    // onOpenModal();
                                    requestSort("number");
                                    setFilter(true);
                                    if (filter) {
                                      setFilter(false);
                                    } else {
                                      setFilter(true);
                                    }
                                  }}
                                >
                                  Contact Number
                                </th>
                                <th>Current Location</th>
                                <th>Resume</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {filter ? (
                                items.length === 0 ? (
                                  <p>Empty</p>
                                ) : (
                                  items.map((user) => {
                                    return (
                                      <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.number}</td>
                                        <td>Location</td>
                                        <td>
                                          <button
                                            class="btn btn-primary btn-rounded"
                                            style={{
                                              padding: "10px",
                                              paddingLeft: "15px",
                                              paddingRight: "15px",
                                            }}
                                          >
                                            Download
                                          </button>
                                        </td>
                                        <td>
                                          <a
                                            onClick={() => {
                                              // localStorage.setItem(
                                              //   "userSelected",
                                              //   JSON.parse(user)
                                              // );
                                              localStorage.setItem(
                                                "userSelected",
                                                JSON.stringify(user)
                                              );
                                              history.push("/edit-candidate");
                                            }}
                                          >
                                            <button
                                              class="btn  btn-rounded btn-dark"
                                              style={{
                                                padding: "9px",
                                                marginRight: "5px",
                                                paddingLeft: "15px",
                                                paddingRight: "15px",
                                              }}
                                            >
                                              Edit
                                            </button>
                                          </a>
                                          <button
                                            class="btn  btn-rounded btn-danger"
                                            style={{
                                              padding: "9px",
                                              paddingLeft: "10px",
                                              paddingRight: "10px",
                                            }}
                                            onClick={() => {
                                              props.banUserById(user._id);
                                            }}
                                          >
                                            Block
                                          </button>
                                        </td>
                                      </tr>
                                    );
                                  })
                                )
                              ) : (
                                fItems.map((user) => {
                                  return (
                                    <tr>
                                      <td>{user.name}</td>
                                      <td>{user.email}</td>
                                      <td>{user.number}</td>
                                      <td>Location</td>
                                      <td>
                                        <button
                                          class="btn btn-primary btn-rounded"
                                          style={{
                                            padding: "10px",
                                            paddingLeft: "15px",
                                            paddingRight: "15px",
                                          }}
                                        >
                                          Download
                                        </button>
                                      </td>
                                      <td>
                                        <a
                                          onClick={() => {
                                            // localStorage.setItem(
                                            //   "userSelected",
                                            //   JSON.stringify(user)
                                            // );
                                            localStorage.setItem(
                                              "userSelected",
                                              JSON.stringify(user)
                                            );
                                            history.push("/edit-candidate");
                                          }}
                                        >
                                          <button
                                            class="btn  btn-rounded btn-dark"
                                            style={{
                                              padding: "9px",
                                              marginRight: "5px",
                                              paddingLeft: "15px",
                                              paddingRight: "15px",
                                            }}
                                          >
                                            Edit
                                          </button>
                                        </a>
                                        <button
                                          class="btn  btn-rounded btn-danger"
                                          style={{
                                            padding: "9px",
                                            paddingLeft: "10px",
                                            paddingRight: "10px",
                                          }}
                                          onClick={() => {
                                            props.banUserById(user._id);
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
  users: state.admin.users,
});

export default connect(mapStateToProps, {
  getAllUsers,
  getUserDetailsByID,
  banUserById,
})(Candidates);
