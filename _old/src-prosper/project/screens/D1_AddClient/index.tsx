// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import {
  useRouter,
  UseInitData,
  useData,
  UseCleanOut,
} from '../../../config/useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'addClient',
  groupSc: 'priv',
  condBigSc: true,
  scCode: 'D1',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('D1.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();
  const dispatch = useDispatch();

  // ----------- set Btns
  const btns = {
    save: () => dispatch({ type: 'D1_ADD_Client' }),
    cancel: () => callRouter('clientsList'),
  };

  // ----------- set Return
  const infoView = { content, btns };

  return (
    <UseInitData reducer={'D1_InitData'}>
      <UseCleanOut data={'D1_InitForm'} />
      <ViewDF info={infoView} />
    </UseInitData>
  );
};
