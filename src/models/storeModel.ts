import type { TrainingStoreModel } from 'src/store/trainingStore';
import type { StatisticsStore } from './statisticsStorage';
import type { ManagerStoreState } from './managerStorage';
import { GlobalStore } from './globalStorage';

interface AppStoreModel {
  isDebug: boolean;
}

type CompleteStoreModel = AppStoreModel &
  GlobalStore &
  TrainingStoreModel &
  StatisticsStore &
  ManagerStoreState;

export type { CompleteStoreModel };
