import { createContext, useContext, useState } from "react";

const AUTH_TOKEN_KEY = "at";

export const StoreContext = createContext({ authToken: "" });

function Store({ children }) {
  const localStorageAuthToken = localStorage.getItem(AUTH_TOKEN_KEY) || "";
  const [authToken, setAuthToken] = useState(localStorageAuthToken);

  const updateAuthToken = (updatedToken) => {
    setAuthToken(updatedToken);
    localStorage.setItem(AUTH_TOKEN_KEY, updatedToken);
  };

  const removeAuthToken = () => {
    setAuthToken("");
    localStorage.removeItem(AUTH_TOKEN_KEY);
  };

  const values = {
    authToken,
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
