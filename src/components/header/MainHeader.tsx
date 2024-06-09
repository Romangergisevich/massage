import HeadLink from '../ui/buttons/HeadLink';
import Socials from '../ui/social/Socials';
import ThemeSwitch from '../ui/switchers/ThemeSwitch';
import styles from './MainHeader.module.css';

const MainHeader: React.FC = () => {
  return (
    <div className={`header ${styles.mainHeader}`}>
      <Socials />
      <div className={styles.mainHeader__navBar}>
        <div>
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
