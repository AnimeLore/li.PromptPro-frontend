import React from 'react';
import cn from 'classnames';
import {IHeaderComponentProps} from "../../types/HeaderComponentProps/IHeaderComponentProps";
import {NavLinkComponent} from "./NavLinkComponent/NavLinkComponent";
import {ReactComponent as Arrow} from "assets/icons/arrow.svg";

export const HeaderComponent: React.FC<IHeaderComponentProps> = ({courseId, value, max}) => {
  return (
    <header>
      <nav>
        <ul> { /*TODO: delete marker*/}
          <li><NavLinkComponent icon={Arrow} text={"Главная"} isActive={true}/></li>
          <li />
            {
           // <NavProgressBarComponent courseId={courseId} value={value} max={max}/></li>
            }
            <li><NavLinkComponent icon={Arrow} text={"Мои успехи"} isActive={true} /></li>
          <li><NavLinkComponent icon={Arrow} text={"Избранное и заметки"} isActive={true} /></li>
          <li><NavLinkComponent icon={Arrow} text={"Изученные темы"} isActive={true} /></li>
          {
           // <li><NavBannerComponent /></li>
          }
            <li><NavLinkComponent icon={Arrow} text={"Поддержка"} isActive={true}/></li>
        </ul>
      </nav>
      {//<NavFooterComponent />
      }
    </header>
  );
};

