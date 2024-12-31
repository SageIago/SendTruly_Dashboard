import { useState } from "react";

const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(() => {
    const token = sessionStorage.getItem("token-storage");
    return !!token;
  });

  const getToken = () => {
    return sessionStorage.getItem("token-storage");
  };

  const signIn = (token: string) => {
    sessionStorage.setItem("token-storage", token);
    setIsSignedIn(true);
  };

  const signOut = () => {
    sessionStorage.removeItem("token-storage");
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
