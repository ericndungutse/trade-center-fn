import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserProvider } from './context/UserContext.jsx';
import { CompaniesProvider } from './context/CompaniesCOnetext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CompaniesProvider>
        <App className='h-screen' />
      </CompaniesProvider>
    </UserProvider>
  </React.StrictMode>
);
