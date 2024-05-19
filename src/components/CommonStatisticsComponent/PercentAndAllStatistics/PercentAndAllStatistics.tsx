import React from 'react';

import s from './PercentAndAllStatistics.module.scss';

import { ReactComponent as ArrowSvg } from '../../../assets/icons/arrow-right.svg';

import { ReactComponent as ExportSvg } from '../../../assets/icons/export.svg';

import { IPercentAndAllStatisticsProps } from '../../../types/PercentAndAllStatisticsProps/IPercentAndAllStatisticsProps';

export const PercentAndAllStatistics: React.FC<IPercentAndAllStatisticsProps> = ({ month, plusPercents }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.percents}>
          <p>
            +{plusPercents}% <a>к навыкам</a> за {month}
          </p>
          <ExportSvg width={'24px'} height={'24px'} />
        </div>
        <div className={s.statistics}>
          <a className={s.statistics_btn}>
            <p>Вся статистика</p>
            <ArrowSvg />
          </a>
        </div>
      </div>
    </div>
  );
};
