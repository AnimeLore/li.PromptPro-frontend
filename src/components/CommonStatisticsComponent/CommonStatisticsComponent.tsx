import React from 'react';

import s from './CommonStatisticsComponent.module.scss';

import { DatesAndStreak } from './DatesAndStreakComponent/DatesAndStreak';

import { PercentAndAllStatistics } from './PercentAndAllStatistics/PercentAndAllStatistics';

import { ICommonStatisticsComponentProps } from '../../types/CommonStatisticsComponentProps/ICommonStatisticsComponentProps';
import { IStreak } from '../../types/CommonStatisticsComponentProps/IStreak';
import { ProgressBarAndLevelComponent } from '../ProgressBarAndLevelComponent/ProgressBarAndLevelComponent';

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
      <ProgressBarAndLevelComponent level={8} value={3} maxValue={6} />
      <PercentAndAllStatistics plusPercents={325} month={'февраль'} />
    </div>
  );
};
