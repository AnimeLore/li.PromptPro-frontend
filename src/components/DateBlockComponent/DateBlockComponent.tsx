import cn from 'classnames';
import React from 'react';

import s from './DateBlockComponent.module.scss';

import { IDateBlockProps } from '../../types/DateBlockProps/IDateBlockProps';

export const DateBlockComponent: React.FC<IDateBlockProps> = ({ isActive, number }) => {
  const st = isActive ? s.block_active : s.block_inactive;

  return (
    <div className={cn(s.block_container, st)}>
      <span>{number}</span>
    </div>
  );
};
