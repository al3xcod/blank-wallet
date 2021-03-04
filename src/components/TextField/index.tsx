import React, { FC } from 'react';
import cls from 'classnames';
import BaseTextField, { TextFieldProps } from '@material-ui/core/TextField';

import styles from './index.module.scss';

const TextField: FC<Partial<TextFieldProps>> = ({
  children,
  className = '',
  ...otherProps
}) => {
  return (
    <BaseTextField className={cls(styles.input, className)} {...otherProps}>
      {children}
    </BaseTextField>
  );
};

export default TextField;
