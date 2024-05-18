import React from 'react';

import s from './RoundedButtonContainer.module.scss';

import { RoundedButtonProps } from '../../types/RoundedButtonProps/RoundedButtonProps';

export const RoundedButtonContainer: React.FC<RoundedButtonProps> = ({ text }) => {
  return (
    <button className={s.btn_container}>
      <span>{text}</span>
    </button>
  );
};
