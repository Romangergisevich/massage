import React from 'react';
import styles from './Home.module.css';
import BlockLink from '../ui/buttons/BlockLink';

const Home: React.FC = () => {
  return (
    <div className={styles.home__container}>
      <div className={styles.main__img__contaner}>
        <img className={styles.home__main__img} src="\src\assets\main.jpg" alt="#" />
        <p className={styles.home__tagline}>
          <br /> Откройте для себя пользу регулярных массажей для вашего здоровья
        </p>
        <div className={styles.main__linkContainer}>
          <BlockLink linkTo="/booking">Записаться</BlockLink>
        </div>
      </div>
      <div className={styles.home__img__container}>
        <div className={styles.img__container}>
          <p className={styles.second__img__tagline}>
            Расслабьтесь и избавьтесь от стресса
          </p>
          <div className={styles.main__linkContainer}>
            <BlockLink linkTo="/">Виды массажа</BlockLink>
          </div>
          <img
            className={styles.home__second__img}
            src="\src\assets\massage10.jpg"
            alt="#"
          />
        </div>
        <div className={styles.img__container}>
          <p className={styles.second__img__tagline}>Успокойте тело и разум</p>
          <div className={styles.main__linkContainer}>
            <BlockLink linkTo="/Requirements">Требования к клиенту</BlockLink>
          </div>
          <img
            className={styles.home__third__img}
            src="\src\assets\massage11.jpg"
            alt="#"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
