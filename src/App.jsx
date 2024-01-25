import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterCompany from './pages/RegisterCompany';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register-company' element={<RegisterCompany />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
