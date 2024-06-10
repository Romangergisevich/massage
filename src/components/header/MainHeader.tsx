import React, { ChangeEvent, useRef } from 'react';
import HeadLink from '../ui/buttons/HeadLink';
import Socials from '../ui/social/Socials';
import ThemeSwitch from '../ui/switchers/ThemeSwitch';
import styles from './MainHeader.module.css';
import Burger from '../ui/burger/Burger';

const MainHeader: React.FC = () => {
  const mobileBar = useRef<HTMLDivElement>(null);
  const active = styles.mobileNavBar__active;

  const mobileMenuToggle = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? mobileBar.current?.classList.add(active)
      : mobileBar.current?.classList.remove(active);
  };

  console.log(mobileBar.current);
  return (
    <div className={`header ${styles.mainHeader}`}>
      <Socials />
      <div className={styles.mainHeader__navBar}>
        <div className={styles.mainHeader__navBar__linksContainer}>
          <HeadLink to="/">Главная</HeadLink>
          <HeadLink to="/">Запись</HeadLink>
          <HeadLink to="/">Противопоказания</HeadLink>
          <HeadLink to="/">Требования к клиенту</HeadLink>
          <HeadLink to="/">Часто задаваемые вопросы</HeadLink>
        </div>
        <div className={styles.mainHeader__mobileNavBar__container}>
          <Burger menuToggleFunc={mobileMenuToggle} />
        </div>
        <div ref={mobileBar} className={styles.mainHeader__mobileNavBar__linksContainer}>
          <HeadLink to="/">Главная</HeadLink>
          <HeadLink to="/">Запись</HeadLink>
          <HeadLink to="/">Противопоказания</HeadLink>
          <HeadLink to="/">Требования к клиенту</HeadLink>
          <HeadLink to="/">Часто задаваемые вопросы</HeadLink>
        </div>
      </div>
      <div className={styles.mainHeader__themeSwitch}>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default MainHeader;
