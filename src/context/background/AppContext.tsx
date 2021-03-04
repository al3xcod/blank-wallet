import { createContext } from 'react';
import { Transaction } from 'services/TransactionsService';
import { IAppState } from './AppState';
import Constants from 'utils/constants';
import preloadState from 'context/preloadState';

type ContextType = {
  state: IAppState;
  addTransaction: (transaction: Transaction) => void;
  setState: (state: IAppState) => void;
};

export const initAppState: IAppState = {
  transactions: preloadState(),
  publicAddress: Constants.publicAddress,
  accountBalance: Constants.accountBalance,
  ethPrice: Constants.ethPrice,
};

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  addTransaction: () => {},
  setState: () => {},
});

export default AppContext;
