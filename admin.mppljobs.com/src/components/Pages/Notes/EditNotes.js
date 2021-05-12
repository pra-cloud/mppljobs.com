/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useHistory } from "react-router";
import { updateNotesById } from "../../../actions/adminActions";
import Navbar from "../../Navbar/Navbar";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const EditNotes = (props) => {
  const history = useHistory();

  const selectedNote = props.location.state && props.location.state;

  const [saved, setSaved] = useState();
  const docs = [{ uri: selectedNote.file }] || [];

  const [edit, setEdit] = useState(false);
  const [fileName, setFileName] = useState(selectedNote.fileName || "");
  const [fileAuthor, setFileAuthor] = useState(selectedNote.fileAuthor || "");
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

    setSaved(await updateNotesById(formData, selectedNote._id));
    if (saved) {
      history.goBack();
    } else {
      history.goBack();
    }
  };

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <div className='sidebar-light'>
        <div className='container-scroller'>
          <Navbar />
          <div className='container-fluid page-body-wrapper'>
            <div className='main-panel'>
              <div className='content-wrapper'>
                <div className='row'>
                  <div className='col-12 grid-margin'>
                    <div className='card'>
                      <div className='card-body'>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: "10px",
                          }}>
                          <div>
                            <h4 className='card-title'>EDIT NOTES</h4>
                          </div>
                          <div>
                            <button
                              type='submit'
                              className='btn btn-primary mr-2'
                              style={{ padding: "10px" }}
                              onClick={() => {
                                if (!edit) {
                                  setEdit(true);
                                } else {
                                  setEdit(false);
                                }
                              }}>
                              {!edit ? "Edit" : "Cancel"}
                            </button>
                            <button
                              type='submit'
                              className='btn btn-primary mr-2'
                              style={{ padding: "10px" }}
                              onClick={onOpenModal}>
                              Preview
                            </button>
                          </div>
                        </div>
                        <form className='form-sample'>
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
                                    disabled={!edit}
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
                                    disabled={!edit}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='form-group row'>
                                <label className='col-sm-3 col-form-label'>
                                  File
                                </label>
                                <div className='col-sm-9 grid-margin stretch-card'>
                                  <div
                                    className='card'
                                    style={{ width: "20px" }}>
                                    <div className='card-body'>
                                      <h4 className='card-title'>
                                        Drop Files Here
                                      </h4>
                                      <input
                                        style={{ width: "290px" }}
                                        type='file'
                                        onChange={(e) => {
                                          uploadFile(e);
                                        }}
                                        disabled={!edit}
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
                            {!edit ? "Submit" : "Save"}
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
      <Modal open={open} onClose={onCloseModal} center>
        <DocViewer
          style={{ height: 400, width: 400 }}
          pluginRenderers={DocViewerRenderers}
          documents={docs}></DocViewer>
      </Modal>
    </div>
  );
};

export default EditNotes;
