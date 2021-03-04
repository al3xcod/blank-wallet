import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Button from 'components/Button';
import TextField from 'components/TextField';
import useAction from 'hooks/useAction';

import styles from './index.module.scss';

const TransactionSend = () => {
  const history = useHistory();
  const { sendETH } = useAction();
  const { handleSubmit, register } = useForm({
    validationSchema: yup.object().shape({
      address: yup.string().required(),
      amount: yup.number().required(),
    }),
  });

  const handleBack = () => {
    history.goBack();
  };

  const onSubmit = (data: any) => {
    sendETH(data.address, data.amount);
    history.push('/confirm');
  };

  return (
    <form className={styles.send} onSubmit={handleSubmit(onSubmit)}>
      <section className={styles.header}>
        Send Ether
        <IconButton onClick={handleBack}>
          <CloseIcon />
        </IconButton>
      </section>
      <section className={styles.content}>
        <TextField
          placeholder="Ex: 0xABCDEF..."
          label="Recipient Address"
          fullWidth
          className={styles.input}
          name="address"
          inputRef={register}
        />
        <TextField
          placeholder="Ex: 1 (ETH)"
          label="ETH Amount"
          fullWidth
          name="amount"
          inputRef={register}
        />
      </section>
      <section className={styles.actions}>
        <Button
          theme="secondary"
          fullWidth
          onClick={handleBack}
          className={styles.button}
        >
          Cancel
        </Button>
        <Button type="submit" fullWidth className={styles.button}>
          Next
        </Button>
      </section>
    </form>
  );
};

export default TransactionSend;
