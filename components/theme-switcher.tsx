'use client';

import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleDarkMode = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button className="cursor-pointer h-6 w-6" onClick={toggleDarkMode}>
      {theme === 'dark' ? '🌚' : '🌞'}
    </button>
  );
};

export default ThemeSwitcher;
