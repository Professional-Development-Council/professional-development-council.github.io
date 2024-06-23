import React, { createContext, useState, useEffect } from 'react';
import {useRouter} from 'next/router';
const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  const router = useRouter();
  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const login = (user) => {
    setProfile(user);
    localStorage.setItem('profile', JSON.stringify(user));
  };

  const logout = () => {
    router.push('/').then(() => window.location.reload());
    setProfile();
    localStorage.removeItem('profile');
  };

  return (
    <ProfileContext.Provider value={{ profile, login, logout }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
