// ----------- import Packs
import React from 'react';

// ----------- import Internals
import ViewDF from './Views';
import {
  useRouter,
  UseInitData,
  useData,
  UseCondLoader,
  UseCleanOut,
} from '../../../config/useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'starsChart',
  groupSc: 'priv',
  condBigSc: true,

  scCode: 'B5',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('B5.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoto = () => callRouter('signin');
  const btnFilter = () => callRouter('home');

  // ----------- set Return
  const infoView = { content, btnGoto, btnFilter };

  return (
    <UseInitData reducer={'B5_InitData'}>
      <UseCondLoader data={'B5.chartData'}>
        <UseCleanOut data={'B5.chartData'} />

        <ViewDF info={infoView} />
      </UseCondLoader>
    </UseInitData>
  );
};
