import React, { createContext, useState, useEffect } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({});

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
    setProfile(null);
    localStorage.removeItem('profile');
  };

  return (
    <ProfileContext.Provider value={{ profile, login, logout }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
