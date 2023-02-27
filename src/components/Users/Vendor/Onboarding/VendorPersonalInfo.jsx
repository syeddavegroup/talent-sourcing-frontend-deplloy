import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  Box,
  Grid,
  Button,
  TextField,
  Typography,
  styled,
  MenuItem,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";

const ImgStyled = styled("img")(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
  },
  background: "#fff",
  border: "1px solid #1D19E3",
  color: "#1D19E3",
  "&:hover": {
    "background-color": "#1D19E3",
    color: "#fff",
    boxShadow: "none",
  },
  boxShadow: "none",
}));

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: 0,
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
}));

export default function VendorPersonalInfo() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    contactNum: "",
    country: "",
    state: "",
    city: "",
    headline: "Vendor",
  });
  const [world, setWorld] = useState([]);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => setWorld(res.data))
      .catch((err) => console.log(err));
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

  const handleImageUplode = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };

  function validateForm() {
    const newErrors = {};

    if (!values.fullName) {
      newErrors.fullName = "Name is required";
    }
    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setServerError("");
      setMessage("");
      axios
        .post(
          "https://talentsourcing-api.onrender.com/api/v1/vendor-on-boarding/personalInformation",
          { ...values, profileImage: imgSrc }
        )
        .then(function (response) {
          localStorage.setItem("userId", response.data.data._id);
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
      <Card sx={{ margin: "auto", padding: "1rem", width: "100%" }}>
        <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ImgStyled
              src={
                imgSrc ? imgSrc : require("../../../../assets/avatars/3.png")
              }
              alt="Profile Picture"
            />
            <Box>
              <ButtonStyled
                component="label"
                variant="contained"
                htmlFor="account-settings-upload-image"
              >
                Upload New Photo
                <input
                  hidden
                  type="file"
                  onChange={handleImageUplode}
                  accept="image/png, image/jpeg"
                  id="account-settings-upload-image"
                />
              </ButtonStyled>
              <ResetButtonStyled
                color="error"
                variant="outlined"
                onClick={() => setImgSrc("../../assets/avatars/1.png")}
              >
                Reset
              </ResetButtonStyled>
              <Typography variant="body2" sx={{ marginTop: 5 }}>
                Allowed JPG, GIF or PNG. Max size of 800K
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="text"
              name="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleChange}
              helperText={errors && errors.fullName}
              error={errors && errors.fullName ? true : false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="email"
              name="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              helperText={errors && errors.email}
              error={errors && errors.email ? true : false}
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

          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              type="text"
              name="headline"
              label="Headline"
              value={values.headline}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Typography textAlign="center" color="error" my={3}>
          {serverError}
        </Typography>
        <Typography textAlign="center" color="green" my={3}>
          {message}
        </Typography>
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
                "Save Changes"
              )}
            </Button>
          </Box>
        </Grid>
      </Card>
    </CardContent>
  );
}
