import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/about-us/about';
import BloodCompatibilityCalculator from './components/blood_calculator/BloodCompatibilityCalculator';
import BloodRequest from './components/bloodrequest/BloodRequest';
import BloodRequestsList from './components/bloodrequest/BloodRequestsList';
import OrganizationDashboard from './components/dashboard/OrganizationDashboard';
import FAQ from './components/faq/FAQ';
import FindBlood from './components/findblood/FindBlood';
import Home from './components/home/home';
import DonorLogin from './components/login/donor/login';
import OrganizationLogin from './components/login/organization/login';
import Navbar from './components/navbar/navbar';
import DonorProfile from './components/profile/DonorProfile';
import DonorRegister from './components/register/donor/DonorRegister';
import OrganizationRegister from './components/register/organization/OrganizationRegister';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/donor" element={<DonorRegister />} />
        <Route path="/register/organization" element={<OrganizationRegister />} />
        <Route path="/login/donor" element={<DonorLogin />} />
        <Route path="/login/organization" element={<OrganizationLogin />} />
        <Route path="/dashboard" element={<OrganizationDashboard />} />
        <Route path="/profile/:email" element={<DonorProfile />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/find-blood" element={<FindBlood />} />
        <Route path="/blood-request" element={<BloodRequest />} />
        <Route path="/blood-requests" element={<BloodRequestsList />} />
        <Route path="/blood-calculator" element={<BloodCompatibilityCalculator />} />
      </Routes>
    </Router>
  );
}
export default App;
