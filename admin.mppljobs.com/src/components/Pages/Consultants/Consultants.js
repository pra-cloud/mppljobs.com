/* eslint-disable no-unused-vars */
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useHistory } from "react-router";
import {
  banConsultantById,
  getConsultants,
  URL,
} from "../../../actions/adminActions";
import BlockConfirm from "../Candidates/BlockConfirm";
import ConfirmaDialog from "../Jobs/ConfirmaDialog";

const Consultants = (props) => {
  const history = useHistory();
  const [arr, setArr] = useState([]);
  // const { items, requestSort, sortCoonfig } = useSortableData(arr);
  const [perPage, setPerPage] = useState("10");
  const [pageNo, setPageNo] = useState("1");
  const [page, setPage] = useState();

  const [consultants, setConsultants] = useState([]);

  const getAllConsultants = async () => {
    try {
      const res = await axios.get(
        URL + "/api/consultant/users/" + pageNo + "/" + perPage
      );
      setArr(res.data.consultants);
      // setPage(Math.ceil(res.data.length / 10));
    } catch (error) {
      console.log(error.message);
    }
  };

  const gettingAllConsultants = async () => {
    const candidates = await getConsultants();
    await setConsultants(candidates);
  };

  const banConsultant = async (id, reason) => {
    const banCandidate = await banConsultantById(id, { banReason: reason });
    if (banCandidate) {
      setArr((prevState) => {
        return prevState.filter((user) => {
          return user._id !== id;
        });
      });
      await getAllConsultants();
      await gettingAllConsultants();
    }
  };

  useEffect(() => {
    gettingAllConsultants();
  }, []);

  useEffect(() => {
    getAllConsultants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo]);

  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Consultants</h4>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-responsive'>
                    <Pagination
                      className='my-3'
                      siblingCount={1}
                      boundaryCount={1}
                      variant='outlined'
                      shape='rounded'
                      count={Math.ceil(consultants && consultants.length / 10)}
                      onChange={(e, page) => {
                        setPageNo(page);
                      }}
                    />
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Sector</th>
                          <th>Experience</th>
                          {/* <th>Profile</th> */}
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {arr &&
                          arr.map((consultant, i) => {
                            return (
                              <tr key={i}>
                                <td>{consultant.name}</td>
                                <td>{consultant.email}</td>
                                <td>{consultant.sector}</td>
                                <td>{consultant.experience}</td>
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
                                    className='btn  btn-rounded btn-danger'
                                    disabled={consultant.banAccount}
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
                                                banConsultant(
                                                  consultant._id,
                                                  reason
                                                );
                                              }}
                                              action='Block'
                                              role={consultant.name}
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
                          })}
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

export default Consultants;
