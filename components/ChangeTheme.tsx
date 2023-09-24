'use client'
// ComponentA.js
import React from 'react';
import { useColorTheme } from '@/hooks/useColorTheme'; 

function ComponentA() {
  const [colorTheme, toggleTheme] = useColorTheme();

  const handleChangeTheme = () => {
    toggleTheme(); // Toggle the color theme
  };

  return (
   
      <button onClick={handleChangeTheme}>Toggle Theme</button>
 
  );
}

export default ComponentA;
