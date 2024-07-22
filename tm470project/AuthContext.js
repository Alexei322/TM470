import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
  });
  const signIn = (username, email) => {
    setUserInfo({ username, email });
    setIsAuthenticated(true);
  };
  const signOut = () => {
    setUserInfo({
      username: "",
      email: "",
    });
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userInfo, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
