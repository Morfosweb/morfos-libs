// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF, { MsgErrorView } from './Views';
import {
  useRouter,
  UseInitData,
  useData,
  UseCleanOut,
} from '../../../config/useMorfos';
import { ClosedComp } from '../../comps';

// ----------- set Info Screen
export const infoSc = {
  path: 'editActivity',
  groupSc: 'priv',
  condBigSc: true,

  scCode: 'D2',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('D2.scContent');
  const showComp = useData('D2.forms.showActivity');

  // ----------- set Hooks
  const { callRouter } = useRouter();
  const dispatch = useDispatch();

  // ----------- set Btns
  const btns = {
    save: () => dispatch({ type: 'D2_CheckRequireds' }),
    cancel: () => callRouter('home'),
  };

  // ---------- set info Return
  const infoClosed = {
    title: 'Atividades',
  };

  const infoView = { content, btns };

  // ----------- set Return
  return (
    <UseInitData reducer={'D2_InitData'}>
      <UseCleanOut data={'D2'} />

      {!showComp && <ClosedComp info={infoClosed} />}

      {showComp && (
        <ViewDF info={infoView}>
          <MsgErrorComp />
        </ViewDF>
      )}
    </UseInitData>
  );
};

export const MsgErrorComp = () => {
  // ----------- set Data
  const msgError = useData('D2.forms.msgRequireds');

  // ----------- set Return
  return msgError ? <MsgErrorView /> : null;
};
