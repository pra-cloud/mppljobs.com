import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import classes from "../Admins/Admin.module.css";

const ViewReason = (props) => {
  const reason = props.reason ? props.reason : "No Reason added";

  return (
    <div>
      <Modal open={true} onClose={props.closeModal} center>
        <div className={`col-12 ${classes["admin--access"]}`}>
          <div className='card-body'>
            <h3 className={classes["admin--access__name"]}>{props.name}</h3>
            <div className={classes["admin--access-divison"]}></div>
            <p
              style={{
                fontSize: "1.1rem",
              }}>
              {reason}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ViewReason;
