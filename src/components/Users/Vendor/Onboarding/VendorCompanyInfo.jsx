import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

import {
  Box,
  Card,
  TextField,
  Typography,
  Grid,
  Button,
  MenuItem,
  CardContent,
  CircularProgress,
  Stack,
  styled,
} from "@mui/material";

import UploadLogo from "../../../../assets/upload-logo.svg";
import RegisterLogo from "../../../../assets/registerDoc-logo.svg";

import CloseIcon from "../../../../assets/close-icon.svg";
import UploadIcon from "../../../../assets/upload-button-icon.svg";

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
  },
  background: "#03308C",
  border: "1px solid #1D19E3",
  color: "#fff",
  "&:hover": {
    "background-color": "#1D19E3",
    color: "#fff",
    boxShadow: "none",
  },
  boxShadow: "none",
}));

export default function VendorCompanyInfo() {
  const [values, setValues] = useState({
    companyName: "",
    companyEmail: "",
    contactNum: "",
    country: "",
    state: "",
    city: "",
    AgencyLink1: "",
    AgencyLink2: "",
    noOfEmployees: "",
  });

  const [world, setWorld] = useState([]);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then(function (response) {
        // handle success
        setWorld(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  let countries = [...new Set(world.map((item) => item.country))];
  countries.sort();

  let states = world.filter((item) => item.country === values.country);
  states = [...new Set(states.map((state) => state.subcountry))];
  states.sort();

  let cities = world.filter((item) => item.subcountry === values.state);
  cities = [...new Set(cities.map((city) => city.name))];
  cities.sort();

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function validateForm() {
    const newErrors = {};

    if (!values.companyName) {
      newErrors.companyName = "Name is required";
    }
    if (!values.companyEmail) {
      newErrors.companyEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.companyEmail)) {
      newErrors.companyEmail = "Email is invalid";
    }
    if (!values.contactNum) {
      newErrors.contactNum = "Number is required";
    } else if (values.contactNum.length < 10) {
      newErrors.contactNum = "Number must be 10 digits";
    }
    if (!values.country) {
      newErrors.country = "Select a Country";
    }
    if (!values.state) {
      newErrors.state = "Select a State";
    }
    if (!values.city) {
      newErrors.city = "Select a City";
    }
    if (!values.AgencyLink1) {
      newErrors.AgencyLink1 = "Add an Agency Link";
    }
    if (!values.noOfEmployees) {
      newErrors.noOfEmployees = "Select a Number of Employees";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setServerError("");
      console.log(values);
      axios
        .post(
          `https://talentsourcing-api.onrender.com/api/v1/vendor-on-boarding/company-information/${userId}`,
          values
        )
        .then(function (response) {
          setMessage(response.data.message);
        })
        .catch(function (error) {
          setServerError(error.response.data.message);
        })
        .finally(function () {
          setLoading(false);
        });
    }
  }

  return (
    <CardContent>
      <Box>
        <Card sx={{ margin: "auto", padding: "1rem", width: "100%" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                name="companyName"
                label="Company Name"
                value={values.companyName}
                onChange={handleChange}
                helperText={errors && errors.companyName}
                error={errors && errors.companyName ? true : false}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="email"
                name="companyEmail"
                label="Company Email"
                value={values.companyEmail}
                onChange={handleChange}
                helperText={errors && errors.companyEmail}
                error={errors && errors.companyEmail ? true : false}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                name="contactNum"
                label="Number"
                value={values.contactNum}
                onChange={handleChange}
                helperText={errors && errors.contactNum}
                error={errors && errors.contactNum ? true : false}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                type="text"
                name="country"
                label="Country"
                value={values.country}
                onChange={handleChange}
                helperText={errors && errors.country}
                error={errors && errors.country ? true : false}
              >
                {countries.map((country, index) => (
                  <MenuItem key={index} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                type="text"
                name="state"
                label="State"
                value={values.state}
                onChange={handleChange}
                helperText={errors && errors.state}
                error={errors && errors.state ? true : false}
              >
                {states.map((state, index) => (
                  <MenuItem key={index} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                type="text"
                name="city"
                label="City"
                value={values.city}
                onChange={handleChange}
                helperText={errors && errors.city}
                error={errors && errors.city ? true : false}
              >
                {cities.map((city, index) => (
                  <MenuItem key={index} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                type="text"
                name="noOfEmployees"
                label="Number of Employees"
                value={values.noOfEmployees}
                onChange={handleChange}
                helperText={errors && errors.noOfEmployees}
                error={errors && errors.noOfEmployees ? true : false}
              >
                <MenuItem value={"10"}>More than 10</MenuItem>
                <MenuItem value={"50"}>More than 50</MenuItem>
                <MenuItem value={"100"}>More than 100</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                name="AgencyLink1"
                label="Agency Link 1"
                value={values.AgencyLink1}
                onChange={handleChange}
                helperText={errors && errors.AgencyLink1}
                error={errors && errors.AgencyLink1 ? true : false}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                name="AgencyLink2"
                label="Agency Link 2"
                value={values.AgencyLink2}
                onChange={handleChange}
                helperText={errors && errors.AgencyLink2}
                error={errors && errors.AgencyLink2 ? true : false}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <Typography textAlign="center" color="error">
                {serverError}
              </Typography>
              <Typography textAlign="center" color="green">
                {message}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} mt={5}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "right",
                }}
              >
                <Button
                  style={{ backgroundColor: "#03308C" }}
                  type="submit"
                  variant="contained"
                  size="large"
                  onClick={handleSubmit}
                >
                  {loading ? (
                    <CircularProgress color="inherit" size={30} />
                  ) : (
                    "Save"
                  )}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>

      <Box mt={3}>
        <Card sx={{ margin: "auto", padding: "1rem", width: "100%" }}>
          <Stack direction="row" spacing={2}>
            <img src={RegisterLogo} alt="" />
            <Typography variant="subtitle1" color={"#79767E"}>
              Registration Document
            </Typography>
          </Stack>

          <Typography padding={"1rem 0"}>Select Files</Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              mb: "1.5rem",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              gap: "0.5rem",
              border: "3px dashed #8A8D93",
              borderSpacing: "5px",
              padding: "1.5rem 0",
            }}
          >
            <img src={UploadLogo} alt="" />
            <ButtonStyled
              component="label"
              variant="contained"
              htmlFor="account-settings-upload-image"
            >
              CHOOSE FILES
              <input
                hidden
                type="file"
                name="gallery"
                accept="image/png, image/jpeg"
                id="account-settings-upload-image"
              />
            </ButtonStyled>
          </Box>

          <Typography>Description</Typography>

          <TextField
            fullWidth
            id="aboutAgency"
            name={`companyInformation.aboutAgency`}
            onChange={handleChange}
            multiline
            rows={5}
          />

          <Stack direction="row" justifyContent="flex-end" spacing={2} mt={2}>
            <Button
              color="error"
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <img src={CloseIcon} alt="" /> Cancel
            </Button>
            <Button
              sx={{
                backgroundColor: "#03308C",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                textTransform: "capitalize",
              }}
              type="submit"
              variant="contained"
            >
              <img src={UploadIcon} alt="" />
              Upload
            </Button>
          </Stack>
        </Card>
      </Box>
    </CardContent>
  );
}
