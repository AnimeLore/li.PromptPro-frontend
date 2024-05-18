import React from 'react';

import s from './UserPanelPage.module.scss';

import { DateBlockComponent } from '../../components/DateBlockComponent/DateBlockComponent';
import { LevelUpStatisticComponent } from '../../components/LevelUpStatisticComponent/LevelUpStatisticComponent';
import {HeaderComponent} from "../../components/HeaderComponent/HeaderComponent";

export const UserPanelPage = () => {
  return (
    <div className={s.container}>
      <HeaderComponent courseId={1} value={1} max={1} />
      {/* <DateBlockComponent isActive={true} number={2} /> */}
      <LevelUpStatisticComponent level={4} completedTasks={4} />
    </div>
  );
};