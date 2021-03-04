// ## global import ##
import { useContext, useEffect } from 'react';

// ## custom imports ##
import AppContext from 'context/background/AppContext';
import { txService } from 'index';

export default function useAction() {
  const { state, setState, addTransaction } = useContext(AppContext);

  useEffect(() => {
    txService
      .getListOfTransactions()
      .then((result) => {
        setState({ ...state, transactions: result });
      })
      .catch((error) => {
        console.log('Fetching Error: ', error);
      });
  }, []);

  return {
    state,
    sendETH: (to: string, value: number) => {
      txService
        .addTransaction({
          id: state.transactions.length,
          from: state.publicAddress,
          to,
          value,
          timestamp: new Date(),
        })
        .then((result) => {
          addTransaction(result);
        })
        .catch((error) => {
          console.log('Sending Error: ', error);
        });
    },
  };
}
