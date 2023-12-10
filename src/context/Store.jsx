import { createContext, useContext, useState } from "react";

export const StoreContext = createContext({ authToken: "" });

function Store({ children }) {
  const [authToken, setAuthToken] = useState("");

  const updateAuthToken = (updatedToken) => {
    setAuthToken(updatedToken);
  };

  const removeAuthToken = () => {
    setAuthToken("");
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
