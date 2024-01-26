import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function onLogin(userData) {
    setUser(userData);
  }
  function onLogout(userData) {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ onLogin, onLogout, user }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('User context was used outside user provider');

  return context;
};

export { useUser, UserProvider };
