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
  );
}

export default App;
