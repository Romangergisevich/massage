import React, { ChangeEvent, useRef } from 'react';
import styles from './Burger.module.css';

interface BurgerProps {
  menuToggleFunc: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Burger: React.FC<BurgerProps> = (props) => {
  return (
    <div className={`${styles.hamburger} hamburger`}>
      <input
        onChange={props.menuToggleFunc}
        className={`${styles.checkbox} checkbox`}
        type="checkbox"
      />
      <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
        <path
          className={`${styles.lineTop} burger_line`}
          strokeLinecap="round"
          strokeWidth="4"
          stroke="black"
          d="M6 11L44 11"></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="black"
          d="M6 24H43"
          className={`${styles.lineMid} burger_line`}></path>
        <path
          strokeLinecap="round"
          strokeWidth="4"
          stroke="black"
          d="M6 37H43"
          className={`${styles.lineBottom} burger_line`}></path>
      </svg>
    </div>
  );
};

export default Burger;
