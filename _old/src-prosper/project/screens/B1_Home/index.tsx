// ----------- import Packs
import React from 'react';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, UseInitData, useData } from '../../../config/useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'home',
  groupSc: 'home',
  condBigSc: true,
  title: 'Home :: Prosper ::',

  scCode: 'B1',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('B1.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const routes = {
    activityRegister: () => callRouter('activityRegister'),
    clientsList: () => callRouter('clientsList'),
    kpi: () => callRouter('analysisKpi'),
    chart: () => callRouter('starsChart'),
    reportsList: () => callRouter('reportsList'),
    activities: () => callRouter('activitiesList'),
  };

  // ----------- set Return
  const infoView = { content, routes };

  return (
    <UseInitData reducer={'B1_InitData'}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};
