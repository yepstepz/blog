import cn from "classnames";

import styles from "./Burger.module.css";

export const Burger = ({ onClick, isOpen }) => (
  <button className={cn(styles.Button, styles[`Button${isOpen ? 'Opened' : 'Closed'}`])} onClick={onClick}></button>
)