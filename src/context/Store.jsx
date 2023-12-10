import { createContext, useContext, useState } from "react";

export const StoreContext = createContext({ authToken: "" });

function Store({ children }) {
  const [authToken, setAuthToken] = useState("");

  const handleUpdateAuthToken = (updatedToken) => {
    setAuthToken(updatedToken);
  };

  const values = {
    authToken: authToken,
    updateAuthToken: handleUpdateAuthToken,
    isAuthenticated: authToken !== "",
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
