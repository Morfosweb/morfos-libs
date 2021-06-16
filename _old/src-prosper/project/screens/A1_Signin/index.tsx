// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { UseInitData, useData } from '../../../config/useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'signin',
  groupSc: 'pub',
  condBigSc: true,
  scCode: 'A1',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('A1.scContent');

  // ----------- set Hooks
  const dispatch = useDispatch();

  const iptPwd = info => dispatch({ type: 'A1_IptPwd', value: info });

  // ----------- set Routes
  const btn = {
    goHome: () => dispatch({ type: 'A1_Enter' }),
  };

  // ----------- set Return
  const infoView = { content, btn, iptPwd };

  return (
    <UseInitData reducer={'A1_InitData'}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};
