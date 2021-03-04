import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'components/Button';
import Link from 'components/Link';

import styles from './index.module.scss';

const TransactionConfirm = () => {
  const history = useHistory();

  return (
    <div className={styles.confirm}>
      <section className={styles.content}>
        <span className={styles.title}>Success</span>
        <span className={styles.comment}>
          You've successfully sent your friends
        </span>
        <Link to="https://etherscan.io/" newTab>
          Viwe on Etherscan
        </Link>
      </section>
      <section className={styles.actions}>
        <Button
          fullWidth
          onClick={() => {
            history.push('/');
          }}
          className={styles.button}
        >
          Done
        </Button>
      </section>
    </div>
  );
};

export default TransactionConfirm;
