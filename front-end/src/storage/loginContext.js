import React, { createContext, useContext, useState } from "react";

const MyContext = createContext({ login: false, changeLoginStatus: () => {} });

// Create a provider component
export function useAuth() {
  return useContext(MyContext);
}

export function MyContextProvider({ children }) {
  const [login, setLogin] = useState(false);

  const changeLoginStatus = () => {
    const token = localStorage.getItem("token");
    const status = localStorage.getItem("login");
    console.log("status :: ", status);
    if (token) setLogin(status);
  };

  // Value to be provided to the consumers of the context
  const contextValue = {
    login,
    changeLoginStatus,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
