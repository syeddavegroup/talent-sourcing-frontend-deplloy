// ** React Imports
import { useState } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { styled } from '@mui/material/styles';
import MuiTab from '@mui/material/Tab';

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css';

import ClientPersonalInfo from './ClientPersonalInfo';
import ClientCompanyInfo from './ClientCompanyInfo';
import ClientGallery from './ClientGallery';

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67,
  },
}));

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export default function ClientOnBoarding() {
  // ** State
  const [value, setValue] = useState('personalInformation');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ margin: '2rem 1rem' }}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='personalInformation'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TabName>Personal Information</TabName>
              </Box>
            }
          />
          <Tab
            value='companyInformation'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TabName>Company Info</TabName>
              </Box>
            }
          />
          <Tab
            value='gallery'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TabName>Gallery photo (office)</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='personalInformation'>
          <ClientPersonalInfo />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='companyInformation'>
          <ClientCompanyInfo />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='gallery'>
          <ClientGallery />
        </TabPanel>
      </TabContext>
    </Card>
  );
}
