import React from 'react';

import useAction from 'hooks/useAction';
import { Transaction } from 'services/TransactionsService';
import { formatCurrency, formatDate } from 'helpers';

import styles from './index.module.scss';

const Transactions = () => {
  const { state } = useAction();

  return (
    <section className={styles.transactions}>
      <ul>
        {state.transactions.map((tx: Transaction) => (
          <li key={tx.id}>
            <div className={styles.flex}>
              {`${tx.from === state.publicAddress ? 'Send' : 'Receive'} Ether`}
              <small>{formatDate(tx.timestamp)}</small>
            </div>
            <div className={styles.flex}>
              {tx.value} ETH
              <small>
                {`-${formatCurrency(tx.value * state.ethPrice)} USD`}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Transactions;
