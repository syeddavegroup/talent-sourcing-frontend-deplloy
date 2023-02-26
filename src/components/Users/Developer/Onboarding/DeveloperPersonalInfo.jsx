import React, { useEffect } from 'react';
import CardContent from '@mui/material/CardContent';

// ** React Imports
import { useState } from 'react';
import { Country, State, City } from 'country-state-city';

// ** MUI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';

import { styled } from '@mui/material/styles';
import { Checkbox, MenuItem } from '@mui/material';
import { Form, Formik } from 'formik';
import { developerPersonalInformationValidation } from '../../../../utils/formValidation';
import { developerPersonalAPI } from '../../../../services/developerFormApi';

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
  },
  background: '#fff',
  border: '1px solid #1D19E3',
  color: '#1D19E3',
  '&:hover': {
    'background-color': '#1D19E3',
    color: '#fff',
    boxShadow: 'none',
  },
  boxShadow: 'none',
}));

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
}));

export default function DeveloperPersonalInfo() {
  // const [openAlert, setOpenAlert] = useState(true);
  const [imgSrc, setImgSrc] = useState('');
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [state, setState] = useState([]);

  function saveChanges() {
    // api call here
  }

  const onChange = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };
  const countries = Country.getAllCountries();

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.flag,
    ...country,
  }));

  const countryData = Country.getAllCountries().map((country) => ({
    value: country.name,
    displayValue: `${country.name} - ${country.isoCode}`,
    isoCode: country.isoCode,
  }));
  useEffect(() => {
    const stateData = State.getStatesOfCountry(countryData.isoCode).map(
      (state) => ({
        value: state.name,
        displayValue: `${state.name} - ${state.isoCode}`,
      })
    );

    console.log(stateData);
  }, [countryData]);
  useEffect(() => {
    setCountry(countryData);
  }, []);
  // console.log(country);

  const updatedCities = (stateId) =>
    City.getCitiesOfState(stateId).map((city) => ({
      label: city.name,
      value: city.id,
      ...city,
    }));

  // country api called
  // useEffect(() => {
  //   const getCountry = async () => {
  //     const res = await fetch('https://api.countrystatecity.in/v1/countries', {
  //       method: 'GET',
  //       headers: headers,
  //       redirect: 'follow'
  //     })
  //     const countryList = await res.json()
  //     setCountry(countryList)
  //   }

  //   getCountry()
  // }, [])

  // console.log(country);

  return (
    <Formik
      initialValues={{
        personalInformation: {
          image: '',
          fullName: '',
          email: '',
          mobile: '',
          country: '',
          state: '',
          city: '',
          headline: '',
        },
      }}
      validationSchema={developerPersonalInformationValidation}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values.personalInformation);
        developerPersonalAPI(values.personalInformation);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, setValues }) => (
        <CardContent>
          <Form>
            <Box>
              <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ImgStyled
                    src={
                      imgSrc
                        ? imgSrc
                        : require('../../../../assets/avatars/1.png')
                    }
                    alt='Profile Pic'
                  />
                  <Box>
                    <ButtonStyled
                      component='label'
                      variant='contained'
                      htmlFor='account-settings-upload-image'
                    >
                      Upload New Photo
                      <input
                        hidden
                        type='file'
                        name='personalInformation.image'
                        onChange={handleChange}
                        accept='image/png, image/jpeg'
                        id='account-settings-upload-image'
                      />
                    </ButtonStyled>
                    <ResetButtonStyled
                      color='error'
                      variant='outlined'
                      onClick={() =>
                        setImgSrc('../../../../assets/avatars/1.png')
                      }
                    >
                      Reset
                    </ResetButtonStyled>
                    <Typography variant='body2' sx={{ marginTop: 5 }}>
                      Allowed JPG, GIF or PNG. Max size of 800K
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Box>
                <Checkbox /> Open to work
              </Box>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <TextField
                    id='personalInformation.fullName'
                    name='personalInformation.fullName'
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='Full Name'
                    error={
                      touched.personalInformation &&
                      touched.personalInformation.fullName &&
                      Boolean(
                        errors.personalInformation &&
                          errors.personalInformation.fullName
                      )
                    }
                    helperText={
                      touched.personalInformation &&
                      touched.personalInformation.fullName &&
                      errors.personalInformation &&
                      errors.personalInformation.fullName
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type='email'
                    label='Email'
                    id='personalInformation.email'
                    name='personalInformation.email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.personalInformation &&
                      touched.personalInformation.email &&
                      Boolean(
                        errors.personalInformation &&
                          errors.personalInformation.email
                      )
                    }
                    helperText={
                      touched.personalInformation &&
                      touched.personalInformation.email &&
                      errors.personalInformation &&
                      errors.personalInformation.email
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type='text'
                    id='personalInformation.mobile'
                    name='personalInformation.mobile'
                    label='Mobile'
                    placeholder='99999XXXXXXX'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.personalInformation &&
                      touched.personalInformation.mobile &&
                      Boolean(
                        errors.personalInformation &&
                          errors.personalInformation.mobile
                      )
                    }
                    helperText={
                      touched.personalInformation &&
                      touched.personalInformation.mobile &&
                      errors.personalInformation &&
                      errors.personalInformation.mobile
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id='country'>Country</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      defaultValue=''
                      id='personalInformation.country'
                      name='personalInformation.country'
                      label='Country'
                      // value={selectedCountry}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.personalInformation &&
                        touched.personalInformation.country &&
                        Boolean(
                          errors.personalInformation &&
                            errors.personalInformation.country
                        )
                      }
                      helperText={
                        touched.personalInformation &&
                        touched.personalInformation.country &&
                        errors.personalInformation &&
                        errors.personalInformation.country
                      }
                    >
                      {country.map((cont) => (
                        <MenuItem key={cont.isoCode} value={cont.value}>
                          {cont.value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id='state'>State</InputLabel>
                    <Select
                      labelId='state'
                      defaultValue=''
                      id='personalInformation.state'
                      name='personalInformation.state'
                      label='State'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.personalInformation &&
                        touched.personalInformation.state &&
                        Boolean(
                          errors.personalInformation &&
                            errors.personalInformation.state
                        )
                      }
                      helperText={
                        touched.personalInformation &&
                        touched.personalInformation.state &&
                        errors.personalInformation &&
                        errors.personalInformation.state
                      }
                    >
                      <MenuItem value={'10'}>India</MenuItem>
                      <MenuItem value={'20'}>Germany</MenuItem>
                      <MenuItem value={'30'}>United State</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id='city'>City</InputLabel>
                    <Select
                      labelId='city'
                      defaultValue=''
                      id='personalInformation.city'
                      name='personalInformation.city'
                      label='City'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.personalInformation &&
                        touched.personalInformation.city &&
                        Boolean(
                          errors.personalInformation &&
                            errors.personalInformation.city
                        )
                      }
                      helperText={
                        touched.personalInformation &&
                        touched.personalInformation.city &&
                        errors.personalInformation &&
                        errors.personalInformation.city
                      }
                    >
                      <MenuItem value={'10'}>India</MenuItem>
                      <MenuItem value={'20'}>Germany</MenuItem>
                      <MenuItem value={'30'}>United State</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={12}>
                  <TextField
                    fullWidth
                    type='text'
                    id='personalInformation.headline'
                    name='personalInformation.headline'
                    onChange={handleChange}
                    label='Headline'
                    placeholder='Write about yourself'
                  />
                </Grid>
              </Grid>
            </Box>
            <Grid item xs={12} md={12} mt={5}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'right',
                }}
              >
                <Button
                  style={{ backgroundColor: '#03308C' }}
                  type='submit'
                  variant='contained'
                  size='large'
                >
                  Save Changes
                </Button>
              </Box>
            </Grid>
          </Form>
        </CardContent>
      )}
    </Formik>
  );
}
