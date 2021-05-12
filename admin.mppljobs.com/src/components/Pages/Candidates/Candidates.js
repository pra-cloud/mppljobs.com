/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React, { useEffect, useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { banUserById, getAllUsers, URL } from "../../../actions/adminActions";
import { CSVLink } from "react-csv";

import Pagination from "@material-ui/lab/Pagination";

import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import ConfirmaDialog from "../Jobs/ConfirmaDialog";
import BlockConfirm from "./BlockConfirm";

const useFilterData = (fItems, config = null) => {
  const [filterConfig, setFilterConfig] = useState(config);

  const filterItems = useMemo(() => {
    let filterableItems = fItems && [...fItems];
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
    // console.log(filterableItems.length, filterableItems);
    return filterableItems;
  }, [fItems, filterConfig]);

  const requestFilter = (key) => {
    setFilterConfig({ key });
  };
  // console.log(filterItems.length, filterItems);
  return { fItems: filterItems, requestFilter, filterConfig };
};

const useSortableData = (items, config = null) => {
  const [sortCoonfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = items && [...items];
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
      sortCoonfig.key === key &&
      sortCoonfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  return { items: sortedItems, requestSort, sortCoonfig };
};

const Candidates = () => {
  const [candidatesArr, setCandidatesArr] = useState([]);
  const getUsers = async () => {
    try {
      let config = {
        headers: {
          "x-auth-token":
            localStorage.getItem("x-auth-token") ||
            sessionStorage.getItem("x-auth-token"),
        },
      };
      const res = await axios.get(
        `${URL}/api/user/users/${pageNo}/${perPage}`,
        config
      );
      await setCandidatesArr(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const { items, requestSort } = useSortableData(candidatesArr);
  const history = useHistory();
  const { fItems, requestFilter } = useFilterData(candidatesArr);

  const [perPage, setPerPage] = useState("10");
  const [pageNo, setPageNo] = useState("1");
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [numberFilter, setNumberFilter] = useState("");

  const [filter, setFilter] = useState(false);

  const [allCandidates, setCandidates] = useState([]);

  const gettingAllCandidates = async () => {
    const candidates = await getAllUsers();
    await setCandidates(candidates);
  };

  const banUser = async (id, reason) => {
    const banCandidate = await banUserById(id, { banReason: reason });
    if (banCandidate) {
      setCandidatesArr((prevState) => {
        return prevState.filter((user) => {
          return user._id !== id;
        });
      });
      await gettingAllCandidates();
      await getUsers();
    }
  };

  useEffect(() => {
    gettingAllCandidates();
  }, []);

  useEffect(() => {
    getUsers();
  }, [pageNo]);

  useEffect(() => {
    if (nameFilter !== "" || emailFilter !== "" || numberFilter !== "") {
      setFilter(true);
    } else {
      setFilter(false);
    }
  }, [emailFilter, nameFilter, numberFilter]);

  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Candidates</h4>
              <CSVLink
                data={items}
                filename={"Users_" + Date.now() + ".csv"}
                className='btn btn-primary btn-rounded btn-fw'
                style={{ marginLeft: 10, marginBottom: 10 }}>
                Export to CSV
              </CSVLink>
              <br />
              Filter
              <div className='form-group'>
                <div className='form-group row'>
                  <input
                    type='text'
                    className='form-control col-sm-2'
                    placeholder='Name'
                    value={nameFilter}
                    onChange={(e) => {
                      setNameFilter(e.target.value);
                      requestFilter(e.target.value);
                    }}></input>
                  <input
                    type='text'
                    className='form-control col-sm-2'
                    placeholder='Email'
                    value={emailFilter}
                    onChange={(e) => {
                      setEmailFilter(e.target.value);
                      requestFilter(e.target.value);
                    }}></input>
                  <input
                    type='text'
                    className='form-control col-sm-2'
                    placeholder='Number'
                    value={numberFilter}
                    onChange={(e) => {
                      setNumberFilter(e.target.value);
                      requestFilter(e.target.value);
                    }}></input>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-responsive'>
                    <Pagination
                      className='my-3'
                      siblingCount={1}
                      boundaryCount={1}
                      variant='outlined'
                      shape='rounded'
                      count={Math.ceil(
                        allCandidates && allCandidates.length / 10
                      )}
                      onChange={(e, page) => {
                        console.log(page);
                        setPageNo(page);
                      }}
                    />

                    <table className='table'>
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
                            }}>
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
                            }}>
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
                            }}>
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
                            <tr>
                              <td>
                                <p>Empty</p>
                              </td>
                            </tr>
                          ) : (
                            items.map((user) => {
                              return (
                                <tr key={user._id}>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                                  <td>{user.number}</td>
                                  <td>Location</td>
                                  <td>
                                    <button
                                      className='btn btn-primary btn-rounded'
                                      style={{
                                        padding: "10px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px",
                                      }}>
                                      Download
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
                                          pathname: "/edit-candidate",
                                          state: user,
                                        });
                                      }}>
                                      Edit
                                    </button>
                                    <button
                                      className='btn  btn-rounded btn-danger'
                                      disabled={user.banAccount}
                                      style={{
                                        padding: "9px",
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                      onClick={() => {
                                        confirmAlert({
                                          customUI: ({ onClose }) => {
                                            return (
                                              <BlockConfirm
                                                perform={(reason) => {
                                                  banUser(user._id, reason);
                                                }}
                                                action='Block'
                                                role={user.name}
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
                          )
                        ) : (
                          fItems.map((user) => {
                            return (
                              <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.number.toString()}</td>
                                <td>Location</td>
                                <td>
                                  <button
                                    className='btn btn-primary btn-rounded'
                                    style={{
                                      padding: "10px",
                                      paddingLeft: "15px",
                                      paddingRight: "15px",
                                    }}>
                                    Download
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
                                        pathname: "/edit-candidate",
                                        state: user,
                                      });
                                    }}>
                                    Edit
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
                                            <BlockConfirm
                                              perform={(reason) => {
                                                banUser(user._id, reason);
                                              }}
                                              action='Block'
                                              role={user.name}
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
    </div>
  );
};

export default Candidates;
