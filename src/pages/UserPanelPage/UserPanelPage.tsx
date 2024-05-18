import React from "react";
import { DateBlockComponent } from "../../components/DateBlockComponent/DateBlockComponent";
import { LevelUpStatisticComponent } from "../../components/LevelUpStatisticComponent/LevelUpStatisticComponent";

export const UserPanelPage = () => {
  return (
    <div>
      {/*<DateBlockComponent isActive={true} number={2} />*/}
      <LevelUpStatisticComponent level={4} completedTasks={4}/>
    </div>
  );
};
