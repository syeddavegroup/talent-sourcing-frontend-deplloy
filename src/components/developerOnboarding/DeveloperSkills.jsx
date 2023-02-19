import React from 'react';
import { FieldArray, Form, Formik } from 'formik';
import { Box, Card, TextField, Typography, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '../../assets/cancel-icon.svg';

import { developerSkillValidation } from '../../utils/formValidation';

export default function DeveloperSkills() {
  return (
    <Formik
      initialValues={{
        skills: {
          skill: [''],
          language: [''],
        },
        socialProof: {
          linkedIn: '',
          twitter: '',
          instagram: '',
          facebook: '',
        },
      }}
      validationSchema={developerSkillValidation}
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
        <Form onSubmit={handleSubmit}>
          <Card sx={{ margin: '1rem', padding: '1rem' }}>
            <Grid container spacing={5}>
              <FieldArray name='skills.skill'>
                {({ remove, push }) => (
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginY: '1rem',
                      }}
                    >
                      <Typography variant='h4'>Skills</Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                        onClick={() => push('')}
                      >
                        <AddIcon />{' '}
                        <Typography color={'#03308C'}>Add</Typography>
                      </Box>
                    </Box>
                    {values.skills.skill.map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '.2rem',
                          marginBottom: '1rem',
                        }}
                      >
                        <TextField
                          fullWidth
                          id='skills'
                          label='skill'
                          name={`skills.skill[${index}]`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          // error={
                          //   touched.skills &&
                          //   touched.skills.skill[index] &&
                          //   Boolean(errors.skills && errors.skills.skill[index])
                          // }
                          // helperText={
                          //   touched.skills &&
                          //   touched.skills.skill[index] &&
                          //   errors.skills &&
                          //   errors.skills.skill[index]
                          // }
                        />
                        {index > 0 && (
                          <Box
                            sx={{ cursor: 'pointer' }}
                            onClick={() => remove(index)}
                          >
                            <img
                              src={CancelIcon}
                              alt=''
                              style={{ width: '20px' }}
                            />
                          </Box>
                        )}
                      </Box>
                    ))}
                  </Grid>
                )}
              </FieldArray>
              <FieldArray name='skills.language'>
                {({ remove, push }) => (
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginY: '1rem',
                      }}
                    >
                      <Typography variant='h4'>Language</Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                        onClick={() => push('')}
                      >
                        <AddIcon />
                        <Typography color={'#03308C'}>Add</Typography>
                      </Box>
                    </Box>
                    {values.skills.language.map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '.2rem',
                          marginBottom: '1rem',
                        }}
                      >
                        <TextField
                          fullWidth
                          id='skills'
                          label='Language'
                          name={`skills.language[${index}]`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          // error={
                          //   touched.skills &&
                          //   touched.skills.language[index] &&
                          //   Boolean(
                          //     errors.skills && errors.skills.language[index]
                          //   )
                          // }
                          // helperText={
                          //   touched.skills &&
                          //   touched.skills.language[index] &&
                          //   errors.skills &&
                          //   errors.skills.language[index]
                          // }
                        />
                        {index > 0 && (
                          <Box
                            sx={{ cursor: 'pointer' }}
                            onClick={() => remove(index)}
                          >
                            <img
                              src={CancelIcon}
                              alt=''
                              style={{ width: '20px' }}
                            />
                          </Box>
                        )}
                      </Box>
                    ))}
                  </Grid>
                )}
              </FieldArray>
            </Grid>
            <Box
              sx={{
                width: '100%',
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
            </Box>
          </Card>
          <FieldArray name='socialProof'>
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
                  <Typography variant='h4'>Social Links</Typography>
                </Box>

                <Grid container spacing={5}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id='linkedIn'
                      label='LinkedIn'
                      name={`socialProof.linkedIn`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.socialProof &&
                        touched.socialProof.linkedIn &&
                        Boolean(
                          errors.socialProof && errors.socialProof.linkedIn
                        )
                      }
                      helperText={
                        touched.socialProof &&
                        touched.socialProof.linkedIn &&
                        errors.socialProof &&
                        errors.socialProof.linkedIn
                      }
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id='twitter'
                      label='Twitter'
                      name={`socialProof.twitter`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.socialProof &&
                        touched.socialProof.twitter &&
                        Boolean(
                          errors.socialProof && errors.socialProof.twitter
                        )
                      }
                      helperText={
                        touched.socialProof &&
                        touched.socialProof.twitter &&
                        errors.socialProof &&
                        errors.socialProof.twitter
                      }
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id='instagram'
                      label='Instagram'
                      name={`socialProof.instagram`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.socialProof &&
                        touched.socialProof.instagram &&
                        Boolean(
                          errors.socialProof && errors.socialProof.instagram
                        )
                      }
                      helperText={
                        touched.socialProof &&
                        touched.socialProof.instagram &&
                        errors.socialProof &&
                        errors.socialProof.instagram
                      }
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id='facebook'
                      label='Facebook'
                      name={`socialProof.facebook`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.socialProof &&
                        touched.socialProof.facebook &&
                        Boolean(
                          errors.socialProof && errors.socialProof.facebook
                        )
                      }
                      helperText={
                        touched.socialProof &&
                        touched.socialProof.facebook &&
                        errors.socialProof &&
                        errors.socialProof.facebook
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
                </Box>
              </Card>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
}
