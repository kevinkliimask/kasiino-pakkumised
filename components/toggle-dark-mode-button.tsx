'use client';

import { useEffect, useState } from 'react';

const ToggleDarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    localStorage.setItem('dark-mode', String(!isDarkMode));
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button className="p-2 rounded-md cursor-pointer" onClick={toggleDarkMode}>
      {isDarkMode ? '🌚' : '🌞'}
    </button>
  );
};

export default ToggleDarkModeButton;
