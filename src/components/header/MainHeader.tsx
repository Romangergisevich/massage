import ThemeSwitch from '../ui/ThemeSwitch';
import styles from './MainHeader.module.css';

const MainHeader: React.FC = () => {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.mainHeader_themeSwitch}>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default MainHeader;
