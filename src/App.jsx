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

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col h-screen bg-gray-200 text-sm'>
        <Header />
        <div className='flex-1 bg-gray-200 h-fit'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register-company' element={<RegisterCompany />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/companies' element={<Companies />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/companies/:companyId' element={<Company />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
