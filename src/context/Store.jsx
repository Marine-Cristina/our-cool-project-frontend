import { createContext, useContext, useState } from "react";

const AUTH_TOKEN_KEY = "at";

const USER_ID = "uid";

export const StoreContext = createContext({ authToken: "", userId: "" });

function Store({ children }) {
  const localStorageAuthToken = localStorage.getItem(AUTH_TOKEN_KEY) || "";
  const [authToken, setAuthToken] = useState(localStorageAuthToken);

  const localStorageUSerId = localStorage.getItem(USER_ID) || "";
  const [userId, setUserId] = useState("");

  const updateAuthToken = (updatedToken) => {
    setAuthToken(updatedToken);

    localStorage.setItem(AUTH_TOKEN_KEY, updatedToken);
  };

  const removeAuthToken = () => {
    setAuthToken("");
    setUserId("");
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_ID);
  };

  const updateUserId = (updatedUserId) => {
    setUserId(updatedUserId);
    localStorage.setItem(USER_ID, updatedUserId);
  };

  const values = {
    authToken,
    updateUserId,
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
