// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, UseInitData, useData } from '../../../config/useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'prodADD',
  groupSc: 'pub',
  condBigSc: true,

  scCode: 'X0',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('X0.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();
  const dispatch = useDispatch();

  // ----------- set Routes
  // const btnGoto = () => callRouter('signin');

  // ----------- set Btns
  const btns = {
    save: () => dispatch({ type: 'X0_ADD_Name' }),
    cancel: () => callRouter('shopsList'),
  };

  // ----------- set Return
  const infoView = { content, btns };

  return (
    <UseInitData reducer={'X0_InitData'}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};
