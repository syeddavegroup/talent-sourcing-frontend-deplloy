import React from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { Box, Card, TextField, Typography, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '../../assets/cancel-icon.svg';
import PauseIcon from '../../assets/pause-icon.svg';

import { developerValidation } from '../../utils/formValidation';
import { borderRadius } from '@mui/system';

export default function ClientGallery() {
  return (
    <Formik
      initialValues={{
        gallery: [],
      }}
      // validationSchema={developerValidation}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Card sx={{ margin: '1rem auto', padding: '1rem', width: '80%' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                overflow: 'hidden',
                gap: '0.5rem',
                border: '3.4px dashed #8A8D93',
                borderSpacing: '5px',
                padding: '1.5rem 0',
              }}
            >
              <Box
                sx={{ cursor: 'pointer' }}
                component='label'
                variant='contained'
                htmlFor='account-settings-upload-image'
              >
                <Typography component='span' color={'#4A47E9'}>
                  Choose your files{' '}
                  <input
                    hidden
                    type='file'
                    // onChange={onChange}
                    onChange={handleChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </Typography>
                <Typography component='span' color={'#B4B2B7'}>
                  here
                </Typography>
                <Typography
                  variant='body2'
                  color={'#B4B2B7'}
                  textAlign={'center'}
                >
                  Or
                </Typography>
                <Typography
                  variant='subtitle1'
                  color={'#B4B2B7'}
                  textAlign={'center'}
                >
                  Drop your Files
                </Typography>
              </Box>
              <Typography color={'#B4B2B7'}>max file size : 20MB</Typography>
            </Box>
          </Card>

          <Card sx={{ margin: '1rem auto', padding: '1rem', width: '80%' }}>
            <Box>
              <Typography component='span' variant='h6'>
                Uploading •
              </Typography>
              <Typography component='span'>
                {''} img 20112202112201.jpg
              </Typography>
            </Box>

            <Box
              color='#544F5A'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography variant='subtitle2' component='span'>
                  68% •
                </Typography>
                <Typography variant='subtitle2' component='span'>
                  {''} 12 sec Remaining
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <Box sx={{ cursor: 'pointer' }}>
                  <img src={PauseIcon} alt='' />
                </Box>
                <Box sx={{ cursor: 'pointer' }}>
                  <img src={CancelIcon} alt='' />
                </Box>
              </Box>
            </Box>

            <Box
              mt={1}
              sx={{
                width: '100%',
                height: '5px',
                backgroundColor: '#B4B2B7',
                borderRadius: '50px',
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  height: '5px',
                  backgroundColor: '#1D19E3',
                  borderRadius: '50px',
                }}
              ></Box>
            </Box>
          </Card>
          <Box
            sx={{
              padding: '1rem 0',
              display: 'flex',
              alignItems: 'flex-end',
              gap: '1rem',
              justifyContent: 'flex-end',
              width: '90%',
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
        </Form>
      )}
    </Formik>
  );
}
