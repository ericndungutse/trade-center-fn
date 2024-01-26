import { createContext, useContext, useState } from 'react';

const CompanyContext = createContext();

function CompaniesProvider({ children }) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  function onFetchedCompanies(companies) {
    setCompanies(companies);
  }

  function onLoading(loading) {
    setLoading(loading);
  }

  return (
    <CompanyContext.Provider
      value={{ onFetchedCompanies, companies, onLoading, loading }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

const useCompanies = () => {
  const context = useContext(CompanyContext);
  if (!context)
    throw new Error('Companies context was used outside companies provider');

  return context;
};

export { useCompanies, CompaniesProvider };
