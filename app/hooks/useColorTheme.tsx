import { useEffect, useState } from 'react';

type ColorTheme = 'light' | 'dark';

export function useColorTheme(): [ColorTheme, () => void] {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    // Initialize the theme based on local storage or system preference
    const storedTheme = localStorage.getItem('color-theme');
    return (storedTheme === 'dark' ? 'dark' : 'light') as ColorTheme; // Type assertion
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const storedTheme = localStorage.getItem('color-theme');

    // Set the initial theme based on local storage, system preference, or default to light
    setColorTheme((storedTheme === 'dark' ? 'dark' : 'light') as ColorTheme); // Type assertion

    const handleChange = (e: MediaQueryListEvent) => {
      setColorTheme((e.matches ? 'dark' : 'light') as ColorTheme); // Type assertion
      // Save the theme preference to local storage
      localStorage.setItem('color-theme', e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    // Toggle the theme and save the preference to local storage
    const newTheme = colorTheme === 'light' ? 'dark' : 'light';
    setColorTheme(newTheme);
    localStorage.setItem('color-theme', newTheme);
  };

  return [colorTheme, toggleTheme];
}

