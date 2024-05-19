import { IStreak } from './IStreak';

export interface ICommonStatisticsComponentProps {
  level: number;
  presentBoost: number;
  streaks: IStreak[];
  currentDate: Date;
}
