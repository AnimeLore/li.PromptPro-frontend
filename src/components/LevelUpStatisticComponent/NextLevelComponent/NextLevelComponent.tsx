import React from 'react';

import s from './NextLevelComponent.module.scss';

import { INextLevelComponentProps } from '../../../types/NextLevelComponentProps/INextLevelComponentProps';

export const NextLevelComponent: React.FC<INextLevelComponentProps> = ({ nextLevel }) => {
  return (
    <div className={s.container}>
      <span>{nextLevel} уровень</span>
    </div>
  );
};
