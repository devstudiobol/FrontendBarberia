import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);

  const updateUserEmail = (email) => {
    setUserEmail(email);
  };

  return (
    <AuthContext.Provider value={{ userEmail, updateUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
