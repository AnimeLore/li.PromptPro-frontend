import React from 'react';

import s from './CommonStatisticsComponent.module.scss';

import { DatesAndStreak } from './DatesAndStreakComponent/DatesAndStreak';

import { ICommonStatisticsComponentProps } from '../../types/CommonStatisticsComponentProps/ICommonStatisticsComponentProps';
import { IStreak } from '../../types/CommonStatisticsComponentProps/IStreak';

export const CommonStatisticsComponent: React.FC<ICommonStatisticsComponentProps> = ({
  level,
  streaks,
  presentBoost,
  currentDate,
}) => {
  const strk: IStreak = {
    streakStart: new Date(),
    streakEnd: new Date(),
  };

  return (
    <div className={s.container}>
      <DatesAndStreak currentDate={new Date()} streaks={[strk]} />
    </div>
  );
};
