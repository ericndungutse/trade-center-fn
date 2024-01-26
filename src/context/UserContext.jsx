import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // // Change Value in local storage when value changes
  // // Similar to use an event handler
  // Change this componet's state and synchronizes it with local storage
  // useEffect(
  //   function () {
  //     localStorage.setItem(key, JSON.stringify(value));
  //   },
  //   [value, key]
  // );

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
