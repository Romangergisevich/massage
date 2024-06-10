import React from 'react';
import { RootState } from '../../store/store';
import { useAppSelector, useAppDispatch } from '../../custom_hooks/hooks';
import { closeNav, openNav } from '../../store/slices/MobileNav';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const testValue = useAppSelector((state: RootState) => state.MobileNav.value);

  return (
    <div>
      Расслабьтесь и избавьтесь от стресса. Откройте для себя пользу регулярных массажей
      для вашего здоровья.
      <button onClick={() => dispatch(openNav())}>test open</button>
      <button onClick={() => dispatch(closeNav())}>test close</button>
      <button onClick={() => console.log(testValue)}>test log</button>
    </div>
  );
};

export default Home;
