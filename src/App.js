import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/Landing Page/LandingPage";

// Admin pages
import APage from "./components/Admin/APage";
import ADashboardPage from "./components/Admin/Dashboard/DashboardPage";
import AAllUsersPage from "./components/Admin/AllUsers/AllUsersPage";
import AClientsPage from "./components/Admin/Clients/ClientsPage";
import ADevelopersPage from "./components/Admin/Developers/DevelopersPage";
import AVendorsPage from "./components/Admin/Vendors/VendorsPage";
import ASettingsPage from "./components/Admin/Settings/SettingsPage";

// client pages
import ClientOnBoarding from "./components/clientOnboarding/clientPage";

//Developer pages
import DeveloperOnBoarding from "./components/developerOnboarding/developerPage";

//vendor pages
import VendorOnBoarding from "./components/vendorOnboarding/vendorPage";

function App() {
  return (
    <Routes>
      {/* landingpage routes */}
      <Route path="/" element={<LandingPage />} />

      {/* admin routes */}
      <Route path="admin" element={<APage />}>
        <Route path="dashboard" element={<ADashboardPage />} />
        <Route path="allUsers" element={<AAllUsersPage />} />
        <Route path="developers" element={<ADevelopersPage />} />
        <Route path="clients" element={<AClientsPage />} />
        <Route path="vendors" element={<AVendorsPage />} />
        <Route path="settings" element={<ASettingsPage />} />
      </Route>

      <Route path="/developer/onBoarding" element={<DeveloperOnBoarding />} />
      <Route path="/client/onBoarding" element={<ClientOnBoarding />} />
      <Route path="/vendor/onBoarding" element={<VendorOnBoarding />} />
    </Routes>
  );
}

export default App;
