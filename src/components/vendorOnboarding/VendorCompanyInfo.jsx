import React from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import {
  Box,
  Card,
  TextField,
  Typography,
  Grid,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import UploadLogo from '../../assets/upload-logo.svg';
import RegisterLogo from '../../assets/registerDoc-logo.svg';
import { clientCompanyInfoValidation } from '../../utils/formValidation';

import AddIcon from '@mui/icons-material/Add';

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
  },
  background: '#03308C',
  border: '1px solid #1D19E3',
  color: '#fff',
  '&:hover': {
    'background-color': '#1D19E3',
    color: '#fff',
    boxShadow: 'none',
  },
  boxShadow: 'none',
}));

export default function VendorCompanyInfo() {
  return (
    <Formik
      initialValues={{
        companyInformation: {
          companyName: '',
          companyEmail: '',
          mobileNumber: '',
          country: '',
          state: '',
          city: '',
          agencyLink1: '',
          agencyLink2: '',
          noOfEmployees: '',
          aboutAgency: '',
        },
        gallery: [''],
      }}
      // validationSchema={clientCompanyInfoValidation}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Card sx={{ margin: '1rem', padding: '1rem' }}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id='companyName'
                  label='Company Name'
                  name={`companyInformation.companyName`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.companyInformation &&
                    touched.companyInformation.companyName &&
                    Boolean(
                      errors.companyInformation &&
                        errors.companyInformation.companyName
                    )
                  }
                  helperText={
                    touched.companyInformation &&
                    touched.companyInformation.companyName &&
                    errors.companyInformation &&
                    errors.companyInformation.companyName
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id='companyEmail'
                  label='Company Email'
                  name={`companyInformation.companyEmail`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.companyInformation &&
                    touched.companyInformation.companyEmail &&
                    Boolean(
                      errors.companyInformation &&
                        errors.companyInformation.companyEmail
                    )
                  }
                  helperText={
                    touched.companyInformation &&
                    touched.companyInformation.companyEmail &&
                    errors.companyInformation &&
                    errors.companyInformation.companyEmail
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type='number'
                  id='mobileNumber'
                  label='Mobile Number'
                  name={`companyInformation.companyEmail`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.companyInformation &&
                    touched.companyInformation.mobileNumber &&
                    Boolean(
                      errors.companyInformation &&
                        errors.companyInformation.mobileNumber
                    )
                  }
                  helperText={
                    touched.companyInformation &&
                    touched.companyInformation.mobileNumber &&
                    errors.companyInformation &&
                    errors.companyInformation.mobileNumber
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id='country'>Country</InputLabel>
                  <Select
                    labelId='country'
                    id='companyInformation.country'
                    name='companyInformation.country'
                    label='Country'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.companyInformation &&
                      touched.companyInformation.country &&
                      Boolean(
                        errors.companyInformation &&
                          errors.companyInformation.country
                      )
                    }
                    helperText={
                      touched.companyInformation &&
                      touched.companyInformation.country &&
                      errors.companyInformation &&
                      errors.companyInformation.country
                    }
                  >
                    <MenuItem value={10}>India</MenuItem>
                    <MenuItem value={20}>Germany</MenuItem>
                    <MenuItem value={30}>United State</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id='state'>State</InputLabel>
                  <Select
                    labelId='state'
                    id='companyInformation.state'
                    name='companyInformation.state'
                    label='State'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.companyInformation &&
                      touched.companyInformation.state &&
                      Boolean(
                        errors.companyInformation &&
                          errors.companyInformation.state
                      )
                    }
                    helperText={
                      touched.companyInformation &&
                      touched.companyInformation.state &&
                      errors.companyInformation &&
                      errors.companyInformation.state
                    }
                  >
                    <MenuItem value={10}>India</MenuItem>
                    <MenuItem value={20}>Germany</MenuItem>
                    <MenuItem value={30}>United State</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id='city'>City</InputLabel>
                  <Select
                    labelId='city'
                    id='companyInformation.city'
                    name='companyInformation.city'
                    label='City'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.companyInformation &&
                      touched.companyInformation.city &&
                      Boolean(
                        errors.companyInformation &&
                          errors.companyInformation.city
                      )
                    }
                    helperText={
                      touched.companyInformation &&
                      touched.companyInformation.city &&
                      errors.companyInformation &&
                      errors.companyInformation.city
                    }
                  >
                    <MenuItem value={10}>India</MenuItem>
                    <MenuItem value={20}>Germany</MenuItem>
                    <MenuItem value={30}>United State</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id='agencyLink1'
                  label='Agency link 1'
                  name={`companyInformation.agencyLink1`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.companyInformation &&
                    touched.companyInformation.agencyLink1 &&
                    Boolean(
                      errors.companyInformation &&
                        errors.companyInformation.agencyLink1
                    )
                  }
                  helperText={
                    touched.companyInformation &&
                    touched.companyInformation.agencyLink1 &&
                    errors.companyInformation &&
                    errors.companyInformation.agencyLink1
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id='agencyLink2'
                  label='Agency link 2'
                  name={`companyInformation.agencyLink2`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id='city'>Number of employees</InputLabel>
                  <Select
                    labelId='noOfEmployee'
                    id='companyInformation.noOfEmployees'
                    name='companyInformation.noOfEmployees'
                    label='Number of employees'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.companyInformation &&
                      touched.companyInformation.noOfEmployees &&
                      Boolean(
                        errors.companyInformation &&
                          errors.companyInformation.noOfEmployees
                      )
                    }
                    helperText={
                      touched.companyInformation &&
                      touched.companyInformation.noOfEmployees &&
                      errors.companyInformation &&
                      errors.companyInformation.noOfEmployees
                    }
                  >
                    <MenuItem value={'>10'}> {'>10'} </MenuItem>
                    <MenuItem value={'>20'}>{'>20'}</MenuItem>
                    <MenuItem value={'>30'}>{'>30'} </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box
              sx={{
                padding: '1rem 0',
                display: 'flex',
                alignItems: 'flex-end',
                gap: '1rem',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                sx={{ backgroundColor: '#03308C' }}
                type='submit'
                variant='contained'
              >
                Save
              </Button>
              <Button color='error' variant='outlined'>
                Cancel
              </Button>
            </Box>
          </Card>

          <Card sx={{ margin: '1rem', padding: '1rem' }}>
            <Box
              sx={{
                display: 'flex',
                gap: '.5rem',
                alignItems: 'center',
              }}
            >
              <img src={RegisterLogo} alt='' />
              <Typography variant='subtitle1' color={'#79767E'}>
                Registration Document
              </Typography>
            </Box>
            <Typography padding={'1rem 0'}>Select Files</Typography>
            <Grid container gap={5} width={'100%'}>
              <Grid item width={'100%'}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    overflow: 'hidden',
                    gap: '0.5rem',
                    border: '3px dashed #8A8D93',
                    borderSpacing: '5px',
                    padding: '1.5rem 0',
                  }}
                >
                  <img src={UploadLogo} alt='' />
                  <ButtonStyled
                    component='label'
                    variant='contained'
                    htmlFor='account-settings-upload-image'
                  >
                    CHOOSE FILES
                    <input
                      hidden
                      type='file'
                      name='gallery'
                      // onChange={onChange}
                      accept='image/png, image/jpeg'
                      id='account-settings-upload-image'
                    />
                  </ButtonStyled>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </form>
      )}
    </Formik>
  );
}
