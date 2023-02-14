import { Routes, Route } from 'react-router-dom';
import OnBoarding from './pages/Developer/developerPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/developer/onBoarding' element={<OnBoarding />} />
      </Routes>
    </div>
  );
}

export default App;
