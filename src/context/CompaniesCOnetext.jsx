import { createContext, useContext, useState } from 'react';

const CompanyContext = createContext();

function CompaniesProvider({ children }) {
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  function onFetchedCompanies(companies) {
    setCompanies(companies);
  }

  function onLoading(loading) {
    setLoading(loading);
  }

  function onSelectCompany(id) {
    const company = companies.find((company) => company.id === id);
    setCompany(company);
  }

  return (
    <CompanyContext.Provider
      value={{
        onFetchedCompanies,
        companies,
        onLoading,
        loading,
        company,
        onSelectCompany,
      }}
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
