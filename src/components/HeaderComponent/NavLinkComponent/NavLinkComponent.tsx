import React from 'react';
import {INavLinkComponentProps} from "../../../types/HeaderComponentProps/NavLinkComponentProps/INavLinkComponentProps";
import s from "./NavLinkComponent.module.scss";
import cn from "classnames";

export const NavLinkComponent: React.FC<INavLinkComponentProps> = ({icon, text, isActive}) => {
  const LinkIcon: React.FC = icon;
  return (
    <div className={cn(s.container, {[s.active]: isActive})}>
      <LinkIcon/>
      <span>{text}</span>
    </div>
  );
};