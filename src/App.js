import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPages/LandingPage";

import APage from "./pages/AdminPages/APage";
import ADashboardPage from "./pages/AdminPages/ADashboardPage";
import AClientsPage from "./pages/AdminPages/AClientsPage";
import ADevelopersPage from "./pages/AdminPages/ADevelopersPage";
import AVendorsPage from "./pages/AdminPages/AVendorsPage";
import ASettingsPage from "./pages/AdminPages/ASettingsPage";

import ClientOnBoarding from "./pages/ClientForm/clientPage";
import DeveloperOnBoarding from "./pages/DeveloperForm/developerPage";
import VendorOnBoarding from "./pages/VendorForm/vendorPage";

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
  );
}

export default App;
