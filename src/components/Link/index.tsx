import { FC, ReactNode } from "react";

import styles from "./index.module.scss";

interface ILink {
  to: string;
  children: ReactNode;
  newTab?: boolean;
}

const Link: FC<ILink> = ({ to, children, newTab = false }) => {
  const linkProp = newTab ? { target: "_blank" } : {};

  return (
    <a href={to} {...linkProp} className={styles.link}>
      {children}
    </a>
  );
};

export default Link;
