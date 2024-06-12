import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home__container}>
      <div>
        <img className={styles.home__main__img} src="\src\assets\main.jpg" alt="#" />
        <p className={styles.home__tagline}>
          <br /> Откройте для себя пользу регулярных массажей для вашего здоровья.
        </p>
      </div>
      <div className={styles.home__img__container}>
        <div>
          <p className={styles.second__img__tagline}>
            Расслабьтесь и избавьтесь от стресса.
          </p>
          <img
            className={styles.home__second__img}
            src="\src\assets\massage10.jpg"
            alt="#"
          />
        </div>
        <div>
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
