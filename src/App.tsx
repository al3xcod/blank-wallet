import React from 'react';
import AppState from './context/background/AppState';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from 'Router';

const App = () => {
  return (
    <AppState>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppState>
  );
};

export default App;
