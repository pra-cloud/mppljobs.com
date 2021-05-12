import React from "react";
import Modal from "react-responsive-modal";
import classes from "./ConfirmDialog.module.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const ConfirmaDialog = (props) => {
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
            <div className={classes["warning--btn"]}>
              <button
                type='button'
                className={`${"btn btn-success"} ${classes["btn__yes"]}`}
                onClick={() => {
                  props.perform();
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

export default ConfirmaDialog;
