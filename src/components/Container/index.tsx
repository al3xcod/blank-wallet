import { FC, ReactNode } from 'react';

import styles from './index.module.scss';

interface IContainer {
  children: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Container;
