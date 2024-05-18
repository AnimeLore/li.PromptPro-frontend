import React from 'react';

import s from './UserPanelPage.module.scss';

import { DateBlockComponent } from '../../components/DateBlockComponent/DateBlockComponent';
import { LevelUpStatisticComponent } from '../../components/LevelUpStatisticComponent/LevelUpStatisticComponent';

export const UserPanelPage = () => {
  return (
    <div className={s.container}>
      {/* <DateBlockComponent isActive={true} number={2} /> */}
      <LevelUpStatisticComponent level={4} completedTasks={4} />
    </div>
  );
};
