import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import styled from "styled-components";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "75%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CancelBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const User = ({ open, handleCancel }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <Modal open={open}>
      <div style={modalStyle} className={classes.paper}>
        <CancelBtn>
          <IconButton color="primary" onClick={handleCancel}>
            <HighlightOffIcon />
          </IconButton>
        </CancelBtn>
      </div>
    </Modal>
  );
};

export default User;
