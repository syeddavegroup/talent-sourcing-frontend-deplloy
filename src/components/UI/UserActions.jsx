import React, { useState } from "react";

import {
  Stack,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  TextField,
  Divider,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const UserActions = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [values, setValues] = useState({
    name: props.user.name,
    email: props.user.email,
    jobTitle: props.user.jobTitle,
    role: props.user.role,
    progress: props.user.progress,
  });

  function handleClose() {
    setOpenModal(false);
  }
  function handleOpen() {
    setOpenModal(true);
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Stack direction="row">
      <IconButton onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <IconButton>
        <DeleteOutlineIcon color="error" />
      </IconButton>

      <Dialog maxWidth="md" open={openModal} onClose={handleClose}>
        <DialogTitle id="responsive-dialog-title">
          <EditIcon /> Edit
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Stack
            gap={4}
            padding={2}
            direction="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <TextField
              label="Name"
              value={values.name}
              defaultValue={props.user.name}
              sx={{ width: 300 }}
              onChange={handleChange("name")}
            />
            <TextField
              label="Email"
              value={values.email}
              defaultValue={props.user.email}
              sx={{ width: 300 }}
              onChange={handleChange("email")}
            />
            <TextField
              label="Job Title"
              value={values.jobTitle}
              defaultValue={props.user.jobTitle}
              sx={{ width: 300 }}
              onChange={handleChange("jobTitle")}
            />
            <TextField
              label="Role"
              value={values.role}
              defaultValue={props.user.role}
              sx={{ width: 300 }}
              onChange={handleChange("role")}
            />
            <TextField
              label="Progress"
              type="number"
              value={values.progress}
              defaultValue={props.user.progress}
              sx={{ width: 300 }}
              onChange={handleChange("progress")}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default UserActions;
