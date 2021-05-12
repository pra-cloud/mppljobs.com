import React, { useState } from "react";
import Modal from "react-responsive-modal";
import classes from "./BlockConfirm.module.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import makeToast from "../../../Toaster";

const BlockConfirm = (props) => {
  const [reason, setReason] = useState("");

  return (
    <div>
      <Modal open={true} onClose={props.close} center>
        <div className={`col-12 ${classes["dialogbox"]}`}>
          <div className='card-body'>
            <ErrorOutlineIcon
              style={{
                fontSize: "200px",
                color: "#dec281",
              }}
            />
            <h3 className={classes["admin--access__name"]}>
              {props.action} {props.role} ?
            </h3>

            <div className='form-group'>
              <p className={classes["label--reason"]}>Reason</p>
              <textarea
                className={`form-control ${classes["label--reason__input"]}`}
                rows='5'
                value={reason}
                onChange={(e) => {
                  setReason(e.target.value);
                }}
                required></textarea>
            </div>

            <div className={classes["warning--btn"]}>
              <button
                type='button'
                className={`${"btn btn-success"} ${classes["btn__yes"]}`}
                onClick={() => {
                  if (reason === "") {
                    return makeToast("error", "Please add a reason");
                  }

                  props.perform(reason);
                  props.close();
                }}>
                Yes
              </button>
              <button
                type='button'
                className={`${"btn btn-danger"} ${classes["btn__no"]}`}
                onClick={() => {
                  props.close();
                }}>
                No
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BlockConfirm;
