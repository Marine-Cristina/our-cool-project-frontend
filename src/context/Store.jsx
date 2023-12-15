import { createContext, useContext, useState } from "react";

const AUTH_TOKEN_KEY = "at";
const USER = "user";

export const StoreContext = createContext({ authToken: "", user: undefined });

function Store({ children }) {
  const localStorageAuthToken = localStorage.getItem(AUTH_TOKEN_KEY) || "";
  const [authToken, setAuthToken] = useState(localStorageAuthToken);
  const localStorageUser = localStorage.getItem(USER) || "";
  const [user, setUser] = useState(localStorageUser);

  const updateAuthToken = (updatedToken) => {
    setAuthToken(updatedToken);
    localStorage.setItem(AUTH_TOKEN_KEY, updatedToken);
  };

  const removeAuthToken = () => {
    setAuthToken("");
    localStorage.removeItem(AUTH_TOKEN_KEY);
    setUser(undefined);
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem(USER, updatedUser);
  };

  const values = {
    authToken,
    updateUser,
    user,
    updateAuthToken,
    isAuthenticated: authToken !== "",
    removeAuthToken,
  };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const store = useContext(StoreContext);

  return store;
}

export default Store;
