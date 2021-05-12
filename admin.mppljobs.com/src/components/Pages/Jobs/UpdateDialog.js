import React, { useState } from "react";
import Modal from "react-responsive-modal";
import classes from "./UpdateForm.module.css";

const UpdateDialog = (props) => {
  const [name, setName] = useState(props.selectedName || "");

  return (
    <Modal open={true} onClose={props.close} center>
      <form className={classes.form}>
        <div className={classes["form--update"]}>
          <h4
            style={{
              textAlign: "center",
            }}>
            Category Name
          </h4>
          <input
            type='text'
            value={name}
            className={`form-control ${classes["form--input"]}`}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              props.perform(props.id, { name });
              props.close();
            }}
            className='btn btn-primary mr-2'>
            Update
          </button>
          <button
            type='reset'
            className='btn btn-light'
            onClick={() => {
              props.close();
            }}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateDialog;
