import { ReactComponent as CrossIcon } from 'assets/icons/close.svg';
import React from 'react';

import s from './CloseButtonComponent.module.scss';
export const CloseButtonComponent: React.FC = () => {
  return (
    <div className={s.container}>
      <CrossIcon />
    </div>
  );
};
