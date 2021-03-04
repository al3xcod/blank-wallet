import React, { ReactNode, FC } from 'react';
import cls from 'classnames';
import BaseButton, { ButtonProps } from '@material-ui/core/Button';

import styles from './index.module.scss';

interface IButton extends Partial<ButtonProps> {
  children: ReactNode;
  theme?: 'primary' | 'secondary';
}

const Button: FC<IButton> = ({
  theme = 'primary',
  disabled = false,
  children,
  className = '',
  ...otherProps
}) => {
  const classes = cls(
    styles.button,
    styles[theme],
    {
      [styles.disabled]: disabled,
    },
    className
  );

  return (
    <BaseButton className={classes} {...otherProps}>
      {children}
    </BaseButton>
  );
};

export default Button;
