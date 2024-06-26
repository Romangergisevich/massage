import React, { ChangeEvent, useEffect, useRef } from 'react';
import RouteLink from '../ui/buttons/RouteLink';
import Socials from '../ui/social/Socials';
import ThemeSwitch from '../ui/switchers/ThemeSwitch';
import styles from './MainHeader.module.css';
import Burger from '../ui/burger/Burger';
import { useAppDispatch, useAppSelector } from '../../custom_hooks/hooks';
import { RootState } from '../../store/store';
import { closeNav, openNav } from '../../store/slices/MobileNav';
import DefaultLink from '../ui/buttons/DefaultLink';

const MainHeader: React.FC = () => {
  const mobileBar = useRef<HTMLDivElement>(null);
  const active = styles.mobileNavBar__active;
  const burgerIsOpen = useAppSelector((state: RootState) => state.MobileNav.value);
  const dispatch = useAppDispatch();

  const mobileMenuToggle = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? dispatch(openNav()) : dispatch(closeNav());
    burgerIsOpen
      ? mobileBar.current?.classList.remove(active)
      : mobileBar.current?.classList.add(active);
  };

  useEffect(() => {
    burgerIsOpen
      ? mobileBar.current?.classList.add(active)
      : mobileBar.current?.classList.remove(active);
  }, [burgerIsOpen]);

  useEffect(() => {
    const mobileNavBarToggle = () => {
      window.innerWidth > 850 ? dispatch(closeNav()) : null;
      window.innerWidth > 850 ? mobileBar.current?.classList.remove(active) : null;
    };

    window.addEventListener('resize', () => {
      mobileNavBarToggle();
    });

    return () => {
      window.removeEventListener('resize', () => {
        mobileNavBarToggle();
      });
    };
  }, []);

  return (
    <div className={`header ${styles.mainHeader}`}>
      <Socials />
      <div className={styles.mainHeader__navBar}>
        <div className={styles.mainHeader__navBar__linksContainer}>
          <DefaultLink to="qwStart">Главная</DefaultLink>
          <DefaultLink to="qwEnd">Запись</DefaultLink>
          <DefaultLink to="qwEnd">Противопоказания</DefaultLink>
          <DefaultLink to="qwEnd">Требования к клиенту</DefaultLink>
          <DefaultLink to="qwEnd">Часто задаваемые вопросы</DefaultLink>
        </div>
        <div className={styles.mainHeader__mobileNavBar__container}>
          <Burger menuToggleFunc={mobileMenuToggle} />
        </div>
        <div
          ref={mobileBar}
          className={`mobileNavBar ${styles.mainHeader__mobileNavBar__linksContainer}`}>
          <DefaultLink to="qwStart">Главная</DefaultLink>
          <DefaultLink to="qwEnd">Запись</DefaultLink>
          <DefaultLink to="qwEnd">Противопоказания</DefaultLink>
          <DefaultLink to="qwEnd">Требования к клиенту</DefaultLink>
          <DefaultLink to="qwEnd">Часто задаваемые вопросы</DefaultLink>
        </div>
      </div>
      <div className={styles.mainHeader__themeSwitch}>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default MainHeader;
