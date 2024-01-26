import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import RegisterCompany from './pages/RegisterCompany';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Companies from './pages/Companies';
import Company from './pages/Company';
import Cart from './pages/Cart';
import User from './pages/User';
import Product from './pages/Product';
import Redirect from './components/Redirect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register-company' element={<RegisterCompany />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/signin'
          element={
            <Redirect>
              <SignIn />
            </Redirect>
          }
        />
        <Route path='/companies' element={<Companies />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/companies/:companyId' element={<Company />} />
        <Route path='/user' element={<User />}>
          <Route index element={<Navigate replace to='products' />} />
          <Route path='products' element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
