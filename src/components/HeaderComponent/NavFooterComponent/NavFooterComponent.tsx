import React from 'react';

import s from './NavFooterComponent.module.scss';

export const NavFooterComponent: React.FC = () => {
  return (
    <div className={s.container}>
      <p>(C) 2024\nВсе права защищены</p>
    </div>
  );
};
