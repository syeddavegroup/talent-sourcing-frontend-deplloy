<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/Landing Page/LandingPage";

import APage from "./components/Admin/APage";
import ADashboardPage from "./components/Admin/Dashboard/DashboardPage";
import AClientsPage from "./components/Admin/Clients/ClientsPage";
import ADevelopersPage from "./components/Admin/Developers/DevelopersPage";
import AVendorsPage from "./components/Admin/Vendors/VendorsPage";
import ASettingsPage from "./components/Admin/Settings/SettingsPage";

import ClientOnBoarding from "./components/clientOnboarding/clientPage";
import DeveloperOnBoarding from "./components/developerOnboarding/developerPage";
import VendorOnBoarding from "./components/vendorOnboarding/VendorPage";

function App() {
  return (
    <Routes>
      {/* landingpage routes */}
      <Route path="/" element={<LandingPage />} />

      {/* admin routes */}
      <Route path="admin" element={<APage />}>
        <Route path="dashboard" element={<ADashboardPage />} />
        <Route path="clients" element={<AClientsPage />} />
        <Route path="vendors" element={<AVendorsPage />} />
        <Route path="developers" element={<ADevelopersPage />} />
        <Route path="settings" element={<ASettingsPage />} />
      </Route>

      <Route path="/developer/onBoarding" element={<DeveloperOnBoarding />} />
      <Route path="/client/onBoarding" element={<ClientOnBoarding />} />
      <Route path="/vendor/onBoarding" element={<VendorOnBoarding />} />
    </Routes>
=======
import './App.css';

import { Routes, Route } from 'react-router-dom';
import ClientOnBoarding from './components/clientOnboarding/clientPage';
import DeveloperOnBoarding from './components/developerOnboarding/developerPage';
import VendorOnBoarding from './components/vendorOnboarding/vendorPage';
import SideBar from './components/sideBar/SideBar';

function App() {
  return (
    <div className='App'>
      <SideBar>
        <Routes>
          <Route
            path='/developer/onBoarding'
            element={<DeveloperOnBoarding />}
          />
          <Route path='/client/onBoarding' element={<ClientOnBoarding />} />
          <Route path='/vendor/onBoarding' element={<VendorOnBoarding />} />
        </Routes>
      </SideBar>
    </div>
>>>>>>> tariq
  );
}

export default App;
