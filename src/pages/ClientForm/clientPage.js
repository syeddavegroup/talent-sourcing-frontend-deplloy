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
import { LocalizationProvider } from '@mui/lab';

// ** Demo Tabs Imports
// import TabInfo from 'src/views/account-settings/TabInfo';
// import TabAccount from 'src/views/account-settings/TabAccount';
// import TabSecurity from 'src/views/account-settings/TabSecurity';

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Formik } from 'formik';

import { developerValidation } from '../../utils/formValidation';

import DeveloperExperience from '../../components/developerOnboarding/DeveloperExperience';
import DeveloperSkills from '../../components/developerOnboarding/DeveloperSkills';
import DeveloperBankDetails from '../../components/developerOnboarding/DeveloperBankDetails';
import ClientPersonalInfo from '../../components/clientOnboarding/ClientPersonalInfo';
import ClientCompanyInfo from '../../components/clientOnboarding/ClientCompanyInfo';
import ClientGallery from '../../components/clientOnboarding/ClientGallery';

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
          {/* <Tab
            value='bankDetails'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TabName>Bank Details</TabName>
              </Box>
            }
          /> */}
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
        {/* <TabPanel sx={{ p: 0 }} value='bankDetails'>
          <DeveloperBankDetails />
        </TabPanel> */}
      </TabContext>
    </Card>
  );
}
