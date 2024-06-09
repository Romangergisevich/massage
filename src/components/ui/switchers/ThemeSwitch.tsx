import { ChangeEvent, useEffect, useRef } from 'react';
import styles from './ThemeSwitch.module.css';

const ThemeSwitch: React.FC = () => {
  const root = document.documentElement;
  const themeSwitcher = useRef<HTMLInputElement>(null);

  const currentThemeColor = localStorage.getItem('massage_themeColor');
  const currentTextColor = localStorage.getItem('massage_textColor');
  const isChecked = localStorage.getItem('massage_themeSwitcherIsChecked');

  useEffect(() => {
    root.style.setProperty('--theme-color', currentThemeColor);
    root.style.setProperty('--text-color', currentTextColor);
    if (themeSwitcher.current && isChecked !== null)
      themeSwitcher.current.checked = JSON.parse(isChecked);
  }, []);

  const themeToggle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      localStorage.setItem('massage_themeSwitcherIsChecked', 'true');
      localStorage.setItem('massage_themeColor', '#ffffff');
      localStorage.setItem('massage_textColor', '#313131');

      root.style.setProperty('--theme-color', '#ffffff');
      root.style.setProperty('--text-color', '#313131');
    } else {
      localStorage.setItem('massage_themeSwitcherIsChecked', 'false');
      localStorage.setItem('massage_themeColor', '#313131');
      localStorage.setItem('massage_textColor', '#ffffff');

      root.style.setProperty('--theme-color', '#313131');
      root.style.setProperty('--text-color', '#ffffff');
    }
  };

  return (
    <>
      <label className={styles.switch} htmlFor="switch">
        <input
          ref={themeSwitcher}
          onChange={themeToggle}
          id="switch"
          type="checkbox"
          className={styles.circle}
        />
        <svg
          viewBox="0 0 384 512"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.moon} ${styles.svg}`}
        >
          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
        </svg>
        <div className={`${styles.sun} ${styles.svg}`}>
          <span className={styles.dot}></span>
        </div>
      </label>
    </>
  );
};

export default ThemeSwitch;
