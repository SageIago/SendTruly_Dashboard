import { useState } from "react";

const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(() => {
    const token = localStorage.getItem("token-storage");
    return !!token;
  });

  const getToken = () => {
    return localStorage.getItem("token-storage");
  };

  const signIn = (token: string) => {
    localStorage.setItem("token-storage", token);
    setIsSignedIn(true);
  };

  const signOut = () => {
    localStorage.removeItem("token-storage");
    setIsSignedIn(false);
  };

  return {
    isSignedIn,
    getToken,
    signIn,
    signOut,
  };
};

export default useAuth;

export type AuthContext = ReturnType<typeof useAuth>
