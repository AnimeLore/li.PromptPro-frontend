import React from 'react';

import s from './BlockDateAndMonth.module.scss';

import { IBlockDateAndMonth } from '../../../types/CommonStatisticsComponentProps/BlockDateAndMonth/IBlockDateAndMonth';

export const BlockDateAndMonth: React.FC<IBlockDateAndMonth> = ({ currentDate }) => {
  const monthNames = [
    'янва.',
    'февр.',
    'март.',
    'апре.',
    'мая',
    'июня',
    'июля',
    'авгу.',
    'сент.',
    'октя.',
    'нояб.',
    'дека.',
  ];

  const numDate = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];

  return (
    <div className={s.container}>
      <div className={s.internal_text}>
        <div className={s.number}>{numDate}</div>
        <div className={s.day_of_month}>{month}</div>
      </div>
    </div>
  );
};
