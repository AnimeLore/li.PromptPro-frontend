import React from 'react';

import { CloseButtonComponent } from './CloseButtonComponent/CloseButtonComponent';
import s from './NavBannerComponent.module.scss';

export const NavBannerComponent: React.FC = () => {
  return (
    <aside className={s.container}>
      {/* TODO: ссылка на весь баннер */}
      <div className={s.wrapper}>
        <p>Получите +1 уровень</p>
        <CloseButtonComponent />
      </div>
      <p>Напишите Телеграм-боту PromptPro и подключите уведомления, чтобы быстрее учиться новому</p>
    </aside>
  );
};
