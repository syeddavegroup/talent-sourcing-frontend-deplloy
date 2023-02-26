import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

export default function DeveloperBankDetails() {
  return (
    <Formik
      initialValues={{
        bankDetails: {
          bankName: '',
          accountHolderName: '',
          accountNo: '',
          confirmAccountNo: '',
          IFSCCode: '',
        },
      }}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur }) => (
        <>
          <Form>
            <Card sx={{ margin: '1rem', padding: '1rem' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginY: '1rem',
                }}
              >
                <Typography variant='h4'>Bank Details</Typography>
              </Box>

              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    id='bankDetails.bankName'
                    label='Bank Name'
                    name={`bankDetails.bankName`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    id='accountHolderName'
                    name={`bankDetails.accountHolderName`}
                    label='Account Holder Name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    id='accountNo'
                    name={`bankDetails.accountNo`}
                    label='Account No'
                    type='number'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    id='workDescription'
                    label='Confirm Account No'
                    name={`bankDetails.confirmAccountNo`}
                    type='number'
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    id='IFSCCode'
                    label='IFSC Code'
                    name={`bankDetails.IFSCCode`}
                    onChange={handleChange}
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
            <Box
              sx={{
                padding: '1rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                justifyContent: 'center',
              }}
            >
              <Button
                sx={{ backgroundColor: '#03308C', padding: '.3rem 3rem' }}
                type='submit'
                variant='contained'
              >
                SAVE
              </Button>
              <Button
                sx={{ maxWidth: '18rem' }}
                color='primary'
                variant='outlined'
              >
                VIEW DETAILS
              </Button>
            </Box>
          </Form>
        </>
      )}
    </Formik>
  );
}
