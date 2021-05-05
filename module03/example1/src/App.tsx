import React from 'react';
import { Dashboard } from './Components/Dashboard';
import { Header } from './Components/Header';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
