import { ReactComponent as Arrow } from 'assets/icons/cross.svg';

import cn from 'classnames';
import React from 'react';

import s from './HeaderComponent.module.scss';
import { NavFooterComponent } from './NavFooterComponent/NavFooterComponent';
import { NavLinkComponent } from './NavLinkComponent/NavLinkComponent';

import { IHeaderComponentProps } from '../../types/HeaderComponentProps/IHeaderComponentProps';

export const HeaderComponent: React.FC<IHeaderComponentProps> = ({ courseId, value, max }) => {
  return (
    <header className={s.container}>
      <h1>PromptPro</h1>
      <nav>
        <ul> { /* TODO: весь текст вынести в constants */}
          <li>
            <NavLinkComponent icon={Arrow} text={'Главная'} isActive={true} />
          </li>
          <li />
          {
            // <NavProgressBarComponent courseId={courseId} value={value} max={max}/></li>
          }
          <li>
            <NavLinkComponent icon={Arrow} text={'Мои успехи'} isActive={true} />
          </li>
          <li>
            <NavLinkComponent icon={Arrow} text={'Избранное и заметки'} isActive={true} />
          </li>
          <li>
            <NavLinkComponent icon={Arrow} text={'Изученные темы'} isActive={true} />
          </li>
          <li>
            {/* заглушка для отступа */}
            <br />
          </li>
          {
            // <li><NavBannerComponent /></li>
          }
          <li>
            <NavLinkComponent icon={Arrow} text={'Поддержка'} isActive={true} />
          </li>
        </ul>
      </nav>
      <NavFooterComponent />
    </header>
  );
};
