import axios from "axios";
import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import makeToast from "../../../Toaster";
import ConfirmaDialog from "./ConfirmaDialog";
import UpdateDialog from "./UpdateDialog";
import { URL } from "../../../actions/adminActions";

const Categories = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);

  const addCategory = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(`${URL}/api/category`, formData, config);
      if (res.data.msg === "Category Created!") {
        makeToast("success", res.data.msg);
        getCategories();
        setName("");
      } else if (res.data.msg === "Category already Present!") {
        makeToast("error", res.data.msg);
      }
    } catch (error) {
      makeToast("error", error.message);
    }
  };
  const getCategories = async () => {
    try {
      const res = await axios.get(`${URL}/api/category`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setCategories(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteCategory = async (id) => {
    try {
      await axios.delete(`${URL}/api/category/delete/${id}`).then(() => {
        makeToast("success", "Deleted!");
        getCategories();
      });
    } catch (error) {
      makeToast("error", error.message);
    }
  };
  const updateCategory = async (id, formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.put(
        `${URL}/api/category/update/${id}`,
        formData,
        config
      );
      if (res.data) {
        makeToast("success", res.data.msg);
        getCategories();
      }
    } catch (error) {
      makeToast("error", error.message);
    }
  };
  useEffect(() => {
    getCategories();

    return () => {};
  }, []);
  return (
    <div>
      <div className='sidebar-light'>
        <div className='container-scroller'>
          <div className='main-panel'>
            <div className='content-wrapper'>
              <div className='row'>
                <div className='col-12 grid-margin'>
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title'>Categories</h4>
                      <form className='form-sample'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='form-group row'>
                              <label className='col-sm-3 col-form-label'>
                                Category Name
                              </label>
                              <div className='col-sm-9'>
                                <input
                                  required
                                  type='text'
                                  value={name}
                                  onChange={(e) => {
                                    setName(e.target.value);
                                  }}
                                  className='form-control'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type='submit'
                          onClick={(e) => {
                            e.preventDefault();
                            if (name === "") {
                              return makeToast(
                                "error",
                                "Please fill the field"
                              );
                            }
                            addCategory({ name });
                          }}
                          className='btn btn-primary mr-2'>
                          Submit
                        </button>
                        <button
                          type='reset'
                          className='btn btn-light'
                          onClick={() => {
                            setName("");
                          }}>
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='content-wrapper' style={{ marginTop: "-100px" }}>
              <div className='card'>
                <div className='card-body'>
                  <h4 className='card-title'>Categories</h4>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='table-responsive'>
                        <table className='table'>
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Category Name</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {!Array.isArray(categories) ? (
                              <tr>
                                <td>
                                  <p>No Categories Created</p>
                                </td>
                              </tr>
                            ) : (
                              categories.map((category) => {
                                return (
                                  <tr key={category._id}>
                                    <td>{category._id}</td>
                                    <td>{category.name}</td>
                                    <td>
                                      <button
                                        className='btn  btn-rounded btn-dark'
                                        style={{
                                          padding: "9px",
                                          marginRight: "5px",
                                        }}
                                        onClick={() => {
                                          confirmAlert({
                                            customUI: ({ onClose }) => {
                                              return (
                                                <UpdateDialog
                                                  perform={updateCategory}
                                                  close={onClose}
                                                  selectedName={category.name}
                                                  id={category._id}
                                                />
                                              );
                                            },
                                          });
                                        }}>
                                        Edit
                                      </button>
                                      <button
                                        className='btn  btn-rounded btn-danger'
                                        style={{
                                          padding: "9px",
                                        }}
                                        onClick={() => {
                                          confirmAlert({
                                            customUI: ({ onClose }) => {
                                              return (
                                                <ConfirmaDialog
                                                  perform={() => {
                                                    deleteCategory(
                                                      category._id
                                                    );
                                                  }}
                                                  action='Delete'
                                                  role={category.name}
                                                  close={onClose}
                                                />
                                              );
                                            },
                                          });
                                        }}>
                                        Delete
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
      </div>
    </div>
  );
};

export default Categories;
