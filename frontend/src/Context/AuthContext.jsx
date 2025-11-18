import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  return (
    <AuthContext.Provider value={{ token, login: t => setToken(t), logout: () => setToken(null) }}>
      {children}
    </AuthContext.Provider>
  );
}