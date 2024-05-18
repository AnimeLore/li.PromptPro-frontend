import React from "react";
import s from "./ImgAndTextComponent.module.scss"
import { IImgAndTextComponentProps } from "../../types/ImgAndTextComponentProps/IImgAndTextComponentProps";
import cross_img from "../../assets/icons/cross.svg"
import check_img from "../../assets/icons/checkmark.svg"

export const ImgAndTextComponent: React.FC<IImgAndTextComponentProps> = ({isDone, text}) => {
  const img = isDone ? check_img: cross_img

  return (
    <div className={s.container}>
      <img src={img} alt="status" />
      <span>{text}</span>
    </div>
  );
};