import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { createNotes } from "../../../actions/adminActions";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import makeToast from "../../Toaster";

const AddNotes = (props) => {
  const history = useHistory();
  const [saved, setSaved] = useState();
  const [fileName, setFileName] = useState("");
  const [fileAuthor, setFileAuthor] = useState("");
  const [file, setFile] = useState(null);

  const uploadFile = (e) => {
    if (e.target.files[0] == null) {
      console.log("Notes File error");
    } else {
      setFile(e.target.files[0]);
    }
  };

  const dataSubmit = async () => {
    const formData = new FormData();
    formData.append("fileName", fileName);
    formData.append("fileAuthor", fileAuthor);
    formData.append("file", file);

    setSaved(await props.createNotes(formData));
    if (saved) {
      history.push("/notes");
    } else {
      history.push("/notes");
    }
  };

  return (
    <div>
      <div class="sidebar-light">
        <div class="container-scroller">
          <Navbar />
          <div class="container-fluid page-body-wrapper">
            <Sidebar />
            <div class="main-panel">
              <div class="content-wrapper">
                <div class="row">
                  <div class="col-12 grid-margin">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-title">ADD NOTES</h4>
                        <form class="form-sample">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Title
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    class="form-control"
                                    value={fileName}
                                    onChange={(e) => {
                                      setFileName(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group" id="upload">
                                <label
                                  class="col-sm-3 col-form-label"
                                  id="file"
                                >
                                  File
                                </label>
                                <div class="input-group  ">
                                  <input
                                    type="file"
                                    onChange={(e) => {
                                      uploadFile(e);
                                    }}
                                    class="form-control file-upload-info"
                                    placeholder="Upload Image"
                                  />
                                  <span class="input-group-append">
                                    <button
                                      class="file-upload-browse btn btn-primary"
                                      type="button"
                                      style={{ height: "46px" }}
                                    >
                                      Upload
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="form-group row">
                                <label class="col-sm-3 col-form-label">
                                  Author
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    class="form-control"
                                    value={fileAuthor}
                                    onChange={(e) => {
                                      setFileAuthor(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              dataSubmit();
                            }}
                            class="btn btn-primary mr-2"
                          >
                            Submit
                          </button>
                          <button class="btn btn-light">Cancel</button>
                        </form>
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

export default connect(null, {
  createNotes,
})(AddNotes);
