import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterCompany from './pages/RegisterCompany';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';
import Companies from './pages/Companies';
import Company from './pages/Company';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';

const Dashroutes = () => {
  return (
    <Routes>
      <Route path='dashboard' element={<Dashboard />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register-company' element={<RegisterCompany />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/companies/:companyId' element={<Company />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
