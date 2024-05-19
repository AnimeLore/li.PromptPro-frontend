import React from 'react';

import s from './DatesAndStreak.module.scss';

import { ReactComponent as ArrowSvg } from '../../../assets/icons/arrow-right.svg';
import { IDatesAndStreakProps } from '../../../types/CommonStatisticsComponentProps/DatesAndStreakProps/IDatesAndStreakProps';
import { DateBlockComponent } from '../../DateBlockComponent/DateBlockComponent';
import { BlockDateAndMonth } from '../BlockDateAndMonth/BlockDateAndMonth';

export const DatesAndStreak: React.FC<IDatesAndStreakProps> = ({ currentDate, streaks }) => {
  const steakDays: number =
    streaks[streaks.length - 1].streakEnd.getTime() - streaks[streaks.length - 1].streakStart.getTime();

  return (
    <div className={s.container}>
      <BlockDateAndMonth currentDate={currentDate} />
      <div className={s.daysAndBar}>
        <div className={s.top_container}>
          <h2>
            {steakDays} <span>дня занятий</span>
          </h2>
        </div>
        <div className={s.blocks_row}>
          <DateBlockComponent isActive={true} number={28} />
          <DateBlockComponent isActive={true} number={27} />
          <DateBlockComponent isActive={true} number={26} />
          <DateBlockComponent isActive={true} number={25} />
          <DateBlockComponent isActive={false} number={24} />
          <button className={s.btn}>
            <ArrowSvg />
          </button>
        </div>
      </div>
    </div>
  );
};
