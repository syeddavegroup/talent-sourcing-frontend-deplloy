import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";

// Admin pages
import APage from "./components/Users/Admin/APage";
import ADashboardPage from "./components/Users/Admin/Dashboard/DashboardPage";
import AAllUsersPage from "./components/Users/Admin/AllUsers/AllUsersPage";
import AClientsPage from "./components/Users/Admin/Clients/ClientsPage";
import ADevelopersPage from "./components/Users/Admin/Developers/DevelopersPage";
import AVendorsPage from "./components/Users/Admin/Vendors/VendorsPage";
import ASettingsPage from "./components/Users/Admin/Settings/SettingsPage";

//auth pages
import LoginPage from "./components/Auth/Login";
import RegisterPage from "./components/Auth/Register";
import ForgotPasswordPage from "./components/Auth/ForgotPassword";
import ResetPasswordPage from "./components/Auth/ResetPassword";

// client pages
import CPage from "./components/Users/Client/CPage";
import COnboardingPage from "./components/Users/Client/Onboarding/OnboardingPage";
import CSettingsPage from "./components/Users/Client/Settings/SettingsPage";

// developer pages
import DPage from "./components/Users/Developer/DPage";
import DOnboardingPage from "./components/Users/Developer/Onboarding/OnboardingPage";
import DSettingsPage from "./components/Users/Developer/Settings/SettingsPage";
import FeedPage from "./components/Users/Developer/Feed/FeedPage";

// vendor pages
import VPage from "./components/Users/Vendor/VPage";
import VOnboardingPage from "./components/Users/Vendor/Onboarding/OnboardingPage";
import VSettingsPage from "./components/Users/Vendor/Settings/SettingsPage";

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

      {/* authentication routes */}
      <Route path="auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="resetPassword" element={<ResetPasswordPage />} />
      </Route>

      {/* client routes */}
      <Route path="client" element={<CPage />}>
        <Route path="onboarding" element={<COnboardingPage />} />
        <Route path="settings" element={<CSettingsPage />} />
      </Route>

      {/* developer routes */}
      <Route path="developer" element={<DPage />}>
        <Route path="onboarding" element={<DOnboardingPage />} />
        <Route path="settings" element={<DSettingsPage />} />
        <Route path="feed" element={<FeedPage />} />
      </Route>

      {/* vendor routes */}
      <Route path="vendor" element={<VPage />}>
        <Route path="onboarding" element={<VOnboardingPage />} />
        <Route path="settings" element={<VSettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
