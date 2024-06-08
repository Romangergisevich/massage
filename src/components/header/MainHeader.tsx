import ThemeSwitch from '../ui/switchers/ThemeSwitch';
import styles from './MainHeader.module.css';

const MainHeader: React.FC = () => {
  return (
    <div className={`header ${styles.mainHeader}`}>
      <div className={styles.mainHeader__themeSwitch}>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default MainHeader;
