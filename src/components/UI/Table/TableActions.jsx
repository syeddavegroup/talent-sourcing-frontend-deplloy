import React, { useState } from "react";
import axios from "axios";

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
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TableActions = (props) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [values, setValues] = useState({
    name: props.user.name,
    email: props.user.email,
    jobTitle: props.user.jobTitle,
    role: props.user.role,
    progress: props.user.progress,
  });

  const { name, email, jobTitle, role, progress } = values;

  function handleSave() {
    axios
      .put(`https://testing2-ihn1.onrender.com/users/${props.user.id}`, {
        name,
        email,
        jobTitle,
        role,
        progress,
      })
      .then(function (response) {
        // handle success
        setOpenEdit(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  function handleDelete() {
    axios
      .delete(`https://testing2-ihn1.onrender.com/users/${props.user.id}`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Stack direction="row">
      <IconButton onClick={() => setOpenEdit(true)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => setOpenDelete(true)}>
        <DeleteOutlineIcon color="error" />
      </IconButton>

      <Dialog maxWidth="md" open={openEdit} onClose={() => setOpenEdit(true)}>
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
          <Button autoFocus onClick={() => setOpenEdit(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        maxWidth="md"
        open={openDelete}
        onClose={() => setOpenDelete(true)}
      >
        <DialogTitle id="responsive-dialog-title">
          <EditIcon /> Delete
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Typography>Name : {props.user.name}</Typography>
          <Typography>Email : {props.user.email}</Typography>
          <Typography>Job Title : {props.user.jobTitle}</Typography>
          <Typography>Role : {props.user.role}</Typography>
          <Typography>Progress : {props.user.progress}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpenDelete(false)}>
            Cancel
          </Button>
          <Button color="error" onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default TableActions;
