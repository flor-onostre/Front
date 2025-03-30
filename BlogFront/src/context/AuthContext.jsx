import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const backurl = import.meta.env.REACT_APP_BACKEND_URL;
  const [isLogged, setIsLogged] = useState(() => {
    const storedValue = localStorage.getItem('isLogged');
    return storedValue === 'true';
  });

  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));

  useEffect(() => {
    if(accessToken){
      localStorage.setItem('accessToken', accessToken);
    }else{
      localStorage.removeItem('accessToken');
    }
  }, [accessToken]);

  useEffect(() => {
    if(refreshToken){
      localStorage.setItem('refreshToken', refreshToken);
    }else{
      localStorage.removeItem('refreshToken');
    }
  }, [refreshToken]);

  const handleRefreshToken = async () => {
    const response = await fetch(backurl + "auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-refresh-token": refreshToken,
      },
    });
    const responsejson = await response.json();
    if (response.ok) {
      setAccessToken(responsejson.data.accesstoken);
    }else{
      setIsLogged(false);
      setAccessToken(null);
      setRefreshToken(null);
      return -1
    }
  };

  useEffect(() => {
    localStorage.setItem('isLogged', isLogged);
  }, [isLogged]);

  return (
    <AuthContext.Provider
      value={{ isLogged, setIsLogged, handleRefreshToken, accessToken,setAccessToken,setRefreshToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};