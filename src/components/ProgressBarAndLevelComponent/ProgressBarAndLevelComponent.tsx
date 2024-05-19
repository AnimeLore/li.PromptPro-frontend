import React from 'react';

import s from './ProgressBarAndLevelComponent.module.scss';

import { IProgressBarAndLevelComponentProps } from '../../types/ProgressBarAndLevelComponentProps/IProgressBarAndLevelComponentProps';

export const ProgressBarAndLevelComponent: React.FC<IProgressBarAndLevelComponentProps> = ({
  level,
  value,
  maxValue,
}) => {
  return (
    <div className={s.container}>
      <h2>{level} уровень</h2>
      <p>до повышения еще {maxValue - value} тестов</p>
    </div>
  );
};
