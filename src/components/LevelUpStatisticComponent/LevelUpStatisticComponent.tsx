import React from "react";
import s from "./LevelUpStatisticComponent.module.scss"
import { ILevelUpStatisticComponentProps } from "../../types/LevelUpStatisticComponentProps/ILevelUpStatisticComponentProps";
import { ImgAndTextComponent } from "../ImgAndTextComponent/ImgAndTextComponent";
import { NextLevelComponent } from "./NextLevelComponent/NextLevelComponent";
import arrow_img from "../../assets/icons/arrow.svg"
import { DateBlockComponent } from "../DateBlockComponent/DateBlockComponent";

export const LevelUpStatisticComponent: React.FC<ILevelUpStatisticComponentProps> = ({level, completedTasks}) => {
  const remaning_tests = (Math.floor( level / 10) + 1) * 5

  // if (completedTasks < 3) {
  //
  // }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h3>
          {remaning_tests} тестов для нового уровня
        </h3>
        <div className={s.img_and_text}>
          <ImgAndTextComponent isDone={true} text={"Случайные тесты"} />
          <ImgAndTextComponent isDone={false} text={"Бимбим-бамбам"} />
          <ImgAndTextComponent isDone={false} text={"Бимбим-бамбам"} />
        </div>
      </div>
      <div className={s.RowToLevelUp}>
        <div className={s.kubiks}>
          {/*TOOD: ЕСЛИ меньше 3 сдлелано и если другой крайний случай!*/}
          <DateBlockComponent isActive={true} number={1} />
          <DateBlockComponent isActive={true} number={2} />
          <DateBlockComponent isActive={true} number={3} />
          <DateBlockComponent isActive={false} number={4} />
          <DateBlockComponent isActive={false} number={5} />
        </div>
        <img src={arrow_img} alt="arrow" />
        <NextLevelComponent nextLevel={level + 1} />
      </div>
    </div>
  );
};
