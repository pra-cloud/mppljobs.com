import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import classes from "./Admin.module.css";

const AdminAccessModal = (props) => {
  return (
    <div>
      <Modal open={true} onClose={props.closeModal} center>
        <div className={`col-12 ${classes["admin--access"]}`}>
          <div className='card-body'>
            <h3 className={classes["admin--access__name"]}>{props.name}</h3>
            <div className={classes["admin--access-divison"]}></div>
            {props.role.length === 0 ? (
              <p>No Role Assigned</p>
            ) : (
              props.role.map((rol, i) => (
                <p key={i} className={classes["admin--access__role"]}>
                  {rol}
                </p>
              ))
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminAccessModal;
