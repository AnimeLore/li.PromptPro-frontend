import React from 'react';

import s from './UserPanelPage.module.scss';

import { DateBlockComponent } from '../../components/DateBlockComponent/DateBlockComponent';
import { LevelUpStatisticComponent } from '../../components/LevelUpStatisticComponent/LevelUpStatisticComponent';

import s from './UserPanelPage.module.scss';

import { CommonStatisticsComponent } from '../../components/CommonStatisticsComponent/CommonStatisticsComponent';
// import { DateBlockComponent } from '../../components/DateBlockComponent/DateBlockComponent';
// import { LevelUpStatisticComponent } from '../../components/LevelUpStatisticComponent/LevelUpStatisticComponent';
import { IStreak } from '../../types/CommonStatisticsComponentProps/IStreak';

const streakMock: IStreak[] = [
  {
    streakStart: new Date(),
    streakEnd: new Date(),
  },
  {
    streakStart: new Date(),
    streakEnd: new Date(),
  },
];

export const UserPanelPage: React.FC = () => {
  return (
    <div className={s.container}>
      <CommonStatisticsComponent level={8} streaks={streakMock} currentDate={new Date()} presentBoost={327} />
    </div>
  );
};
