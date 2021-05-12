/* eslint-disable no-unused-vars */
import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import DocViewer, { PDFRenderer, PNGRenderer } from "react-doc-viewer";
import { useHistory } from "react-router";
import { createNotes } from "../../../actions/adminActions";
import makeToast from "../../../Toaster";
// import Preview from "../../Preview/Preview";

const AddNotes = () => {
  const history = useHistory();
  const [src, setSrc] = useState();
  // const [open, SetOpen] = useState(false);
  const [saved, setSaved] = useState();
  const [fileName, setFileName] = useState("");
  const [fileAuthor, setFileAuthor] = useState("");
  const [file, setFile] = useState(null);
  // const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const [open, setOpen] = useState(false);

  const dataSubmit = async () => {
    if (!file || fileName === "" || fileAuthor === "") {
      return makeToast("error", "Please add all the fields");
    }

    const formData = new FormData();
    formData.append("fileName", fileName);
    formData.append("fileAuthor", fileAuthor);
    formData.append("file", file);

    setSaved(await createNotes(formData));
    if (saved) {
      history.push("/notes");
    } else {
      history.push("/notes");
    }
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const preview = (event) => {
    setSrc(URL.createObjectURL(event.target.files[0]));
    setOpen(true);
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='row'>
            <div className='col-12 grid-margin'>
              <div className='card'>
                <div className='card-body'>
                  <h4 className='card-title'>ADD NOTES</h4>
                  <form className='form-sample' encType='multipart/form-data'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Title
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={fileName}
                              onChange={(e) => {
                                setFileName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            Author
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              value={fileAuthor}
                              onChange={(e) => {
                                setFileAuthor(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/*<div className='col-md-6'>
                        <div className='form-group' id='upload'>
                          <label className='col-sm-3 col-form-label' id='file'>
                            File
                          </label>
                          <div className='input-group  '>
                            <div>
                              <input
                                type='file'
                                id='file'
                                onChange={(e) => {
                                  preview(e);
                                }}
                              />
                            </div>

                            {isPreviewVisible && (
                              <button
                                type='button'
                                className='btn btn-primary'
                                style={{
                                  padding: "4px 19px",
                                }}
                                onClick={() => {
                                  setOpen(true);
                                }}>
                                Preview
                              </button>
                              )} 
                          </div>
                        </div>
                            </div> */}

                      <div className='col-md-6'>
                        <div className='form-group row'>
                          <label className='col-sm-3 col-form-label'>
                            File
                          </label>
                          <div className='col-sm-9 grid-margin stretch-card'>
                            <div className='card' style={{ width: "20px" }}>
                              <div className='card-body'>
                                <h4 className='card-title'>Drop Files Here</h4>
                                <input
                                  style={{ width: "290px" }}
                                  type='file'
                                  onChange={(e) => {
                                    preview(e);
                                  }}
                                  // action="https://www.bootstrapdash.com/file-upload"
                                  className='dropzone'
                                  id='my-awesome-dropzone'></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type='submit'
                      onClick={(e) => {
                        e.preventDefault();
                        dataSubmit();
                      }}
                      className='btn btn-primary mr-2'>
                      Submit
                    </button>
                    <button
                      type='button'
                      className='btn btn-light'
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("/notes");
                      }}>
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {open && (
            // eslint-disable-next-line jsx-a11y/iframe-has-title
            <iframe
              className='frame'
              src={src}
              style={{ width: "50vh", height: "50vh" }}
            />
          )}
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

export default AddNotes;
