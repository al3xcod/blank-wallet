import React from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import Transactions from './Transactions';
import Constants from 'utils/constants';
import { ellipsis, formatCurrency } from 'helpers';

import styles from './index.module.scss';

const WalletMain = () => {
  const history = useHistory();

  const handleSend = () => {
    history.push('/send');
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <div className={styles.flex}>
          Account 1<small>{ellipsis(Constants.publicAddress)}</small>
        </div>
      </section>
      <section className={styles.center}>
        <div className={styles.flex}>
          {Constants.accountBalance} ETH
          <small>
            {`${formatCurrency(
              Constants.accountBalance * Constants.ethPrice
            )} USD`}
          </small>
        </div>
        <IconButton className={styles.send} onClick={handleSend}>
          <ArrowUpwardIcon />
        </IconButton>
        <span>Send</span>
      </section>
      <Transactions />
    </div>
  );
};

export default WalletMain;
