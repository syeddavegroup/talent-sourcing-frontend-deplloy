import { Routes, Route } from 'react-router-dom';
import ClientOnBoarding from './pages/ClientForm/clientPage';
import DeveloperOnBoarding from './pages/DeveloperForm/developerPage';
import VendorOnBoarding from './pages/VendorForm/vendorPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/developer/onBoarding' element={<DeveloperOnBoarding />} />
        <Route path='/client/onBoarding' element={<ClientOnBoarding />} />
        <Route path='/vendor/onBoarding' element={<VendorOnBoarding />} />
      </Routes>
    </div>
  );
}

export default App;
