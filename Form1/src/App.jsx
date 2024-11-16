// src/App.js
import React, { useContext } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
import LoginForm from './LoginForm';
import Timer from './Timer';


const AppContent = () => {
  const { theme } = useTheme();


  return (
    <div className={theme}>
      <header>
        <img src="./src/assets/logo.jpg" alt="logo" />
        <h1>React Form</h1>
      </header>
      <LoginForm />
      <Timer />
      <ThemeToggleButton />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
