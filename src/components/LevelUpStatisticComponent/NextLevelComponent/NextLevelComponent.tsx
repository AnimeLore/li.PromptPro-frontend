import React from "react";
import { INextLevelComponentProps } from "../../../types/NextLevelComponentProps/INextLevelComponentProps";
import s from "./NextLevelComponent.module.scss"

export const NextLevelComponent: React.FC<INextLevelComponentProps> = ({nextLevel}) => {
  return (
    <div className={s.container}>
      <span>{nextLevel} уровень</span>
    </div>
  );
};