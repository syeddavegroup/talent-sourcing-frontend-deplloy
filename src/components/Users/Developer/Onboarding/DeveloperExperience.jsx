import React from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import {
  Box,
  Card,
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { developerExperienceValidation } from '../../../../utils/formValidation';
import MenuItem from '@mui/material/MenuItem';

export default function DeveloperExperience() {
  return (
    <Formik
      initialValues={{
        experience: [
          {
            companyName: '',
            designation: '',
            startDate: '',
            endDate: '',
            location: '',
            jobType: '',
            description: '',
          },
        ],
        licensesAndCertification: [
          {
            name: '',
            issuingOrganization: '',
            issueDate: '',
            expiryDate: '',
            credentialUrl: '',
            credentialId: '',
          },
        ],
        projects: [
          {
            projectName: '',
            projectUrl: '',
            startDate: '',
            endDate: '',
            description: '',
          },
        ],
      }}
      validationSchema={developerExperienceValidation}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <FieldArray name='experience'>
            {({ remove, push }) => (
              <Card sx={{ margin: '1rem', padding: '1rem' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginY: '1rem',
                  }}
                >
                  <Typography variant='h4'>Add Experience</Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() =>
                      push({
                        companyName: '',
                        position: '',
                        dateOfJoining: '',
                        workDescription: '',
                        usedSkills: '',
                      })
                    }
                  >
                    <AddIcon /> <Typography color={'#03308C'}>Add</Typography>
                  </Box>
                </Box>

                {values.experience.map((_, index) => (
                  <Box className='relative' key={index}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='companyName'
                          label='Company Name'
                          name={`experience[${index}].companyName`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.experience &&
                            touched.experience[index].companyName &&
                            Boolean(
                              errors.experience &&
                                errors.experience[index].companyName
                            )
                          }
                          helperText={
                            touched.experience &&
                            touched.experience[index].companyName &&
                            errors.experience &&
                            errors.experience[index].companyName
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='designation'
                          label='Designation'
                          name={`experience[${index}].designation`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.experience &&
                            touched.experience[index].designation &&
                            Boolean(
                              errors.experience &&
                                errors.experience[index].designation
                            )
                          }
                          helperText={
                            touched.experience &&
                            touched.experience[index].designation &&
                            errors.experience &&
                            errors.experience[index].designation
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='startDate'
                          name={`experience[${index}].startDate`}
                          type='date'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.experience &&
                            touched.experience[index].startDate &&
                            Boolean(
                              errors.experience &&
                                errors.experience[index].startDate
                            )
                          }
                          helperText={
                            touched.experience &&
                            touched.experience[index].startDate &&
                            errors.experience &&
                            errors.experience[index].startDate
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          type='date'
                          id='endDate'
                          name={`experience[${index}].endDate`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.experience &&
                            touched.experience[index].endDate &&
                            Boolean(
                              errors.experience &&
                                errors.experience[index].endDate
                            )
                          }
                          helperText={
                            touched.experience &&
                            touched.experience[index].endDate &&
                            errors.experience &&
                            errors.experience[index].endDate
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <InputLabel id='location'>Location</InputLabel>
                          <Select
                            labelId='location'
                            defaultValue=''
                            // id={`experience[${index}].location`}
                            name={`experience[${index}].location`}
                            label='Location'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.experience &&
                              touched.experience[index].location &&
                              Boolean(
                                errors.experience &&
                                  errors.experience[index].location
                              )
                            }
                            helperText={
                              touched.experience &&
                              touched.experience[index].location &&
                              errors.experience &&
                              errors.experience[index].location
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
                          <InputLabel id='jobType'>JobType</InputLabel>
                          <Select
                            labelId='jobType'
                            defaultValue=''
                            id='jobType'
                            name={`experience[${index}].jobType`}
                            label='Location'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.experience &&
                              touched.experience[index].jobType &&
                              Boolean(
                                errors.experience &&
                                  errors.experience[index].jobType
                              )
                            }
                            helperText={
                              touched.experience &&
                              touched.experience[index].jobType &&
                              errors.experience &&
                              errors.experience[index].jobType
                            }
                          >
                            <MenuItem value={'Internship'}>Internship</MenuItem>
                            <MenuItem value={'Job'}>Job</MenuItem>
                            <MenuItem value={'Freelance'}>Freelance</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id='description'
                          label='Description'
                          name={`experience[${index}].description`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.experience &&
                            touched.experience[index].description &&
                            Boolean(
                              errors.experience &&
                                errors.experience[index].description
                            )
                          }
                          helperText={
                            touched.experience &&
                            touched.experience[index].description &&
                            errors.experience &&
                            errors.experience[index].description
                          }
                        />
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
                      {index > 0 && (
                        <Button
                          color='error'
                          variant='outlined'
                          onClick={() => remove(index)}
                        >
                          Cancel
                        </Button>
                      )}
                    </Box>
                  </Box>
                ))}
              </Card>
            )}
          </FieldArray>

          {/* Licenses & Certifications */}

          <FieldArray name='licensesAndCertification'>
            {({ remove, push }) => (
              <Card sx={{ margin: '1rem', padding: '1rem' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginY: '1rem',
                  }}
                >
                  <Typography variant='h4'>
                    Licenses & Certifications
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() =>
                      push({
                        name: '',
                        issuingOrganization: '',
                        issueDate: '',
                        expiryDate: '',
                        credentialUrl: '',
                        credentialId: '',
                      })
                    }
                  >
                    <AddIcon /> <Typography color={'#03308C'}>Add</Typography>
                  </Box>
                </Box>

                {values.licensesAndCertification.map((_, index) => (
                  <div className='relative' key={index}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='certificateName'
                          label='Name *'
                          name={`licensesAndCertification[${index}].name`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.licensesAndCertification &&
                            touched.licensesAndCertification[index].name &&
                            Boolean(
                              errors.licensesAndCertification &&
                                errors.licensesAndCertification[index].name
                            )
                          }
                          helperText={
                            touched.licensesAndCertification &&
                            touched.licensesAndCertification[index].name &&
                            errors.licensesAndCertification &&
                            errors.licensesAndCertification[index].name
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='issuingOrganization'
                          name={`licensesAndCertification[${index}].issuingOrganization`}
                          label='Issuing Organisation'
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='issueDate'
                          name={`licensesAndCertification[${index}].issueDate`}
                          type='date'
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='expiryDate'
                          name={`licensesAndCertification[${index}].expiryDate`}
                          type='date'
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='credentialId'
                          label='Credential ID'
                          name={`licensesAndCertification[${index}].credentialUrl`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='credentialId'
                          label='Credential ID'
                          name={`licensesAndCertification[${index}].credentialId`}
                        />
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
                      {index > 0 && (
                        <Button
                          color='error'
                          variant='outlined'
                          onClick={() => remove(index)}
                        >
                          Cancel
                        </Button>
                      )}
                    </Box>
                  </div>
                ))}
              </Card>
            )}
          </FieldArray>

          {/* Project Details */}

          <FieldArray name='projects'>
            {({ remove, push }) => (
              <Card sx={{ margin: '1rem', padding: '1rem' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginY: '1rem',
                  }}
                >
                  <Typography variant='h4'>Project Details</Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() =>
                      push({
                        projectName: '',
                        projectUrl: '',
                        startDate: '',
                        endDate: '',
                        description: '',
                      })
                    }
                  >
                    <AddIcon /> <Typography color={'#03308C'}>Add</Typography>
                  </Box>
                </Box>

                {values.projects.map((_, index) => (
                  <div className='relative' key={index}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='projectName'
                          label='Project name'
                          name={`experience[${index}].projectName`}
                          type='text'
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='projectUrl'
                          label='Project URL'
                          name={`experience[${index}].projectUrl`}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='startDate'
                          name={`experience[${index}].startDate`}
                          type='date'
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='endDate'
                          name={`experience[${index}].endDate`}
                          type='date'
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id='description'
                          label='Description'
                          name={`experience[${index}].description`}
                        />
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
                      {index > 0 && (
                        <Button
                          color='error'
                          variant='outlined'
                          onClick={() => remove(index)}
                        >
                          Cancel
                        </Button>
                      )}
                    </Box>
                  </div>
                ))}
              </Card>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
}
