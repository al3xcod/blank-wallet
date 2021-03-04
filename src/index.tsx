import React from 'react';
import ReactDOM from 'react-dom';
import { TransactionsService } from 'services/TransactionsService';
import preloadState from 'context/preloadState';
import App from './App';

export const txService = new TransactionsService({
  transactions: preloadState(),
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
