// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF, { OpportunityLineView } from './Views';
import {
  useRouter,
  UseInitData,
  useData,
  UseCleanOut,
} from '../../../config/useMorfos';
import { MsgErrorView } from '../D2_ActivityFORM/Views';

// ----------- set Info Screen
export const infoSc = {
  path: 'formOpportunity',
  groupSc: 'priv',
  condBigSc: true,

  scCode: 'D3',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('D3.scContent');
  const showLine = useData('D3.forms.showOppLine');

  // ----------- set Hooks
  const { callRouter } = useRouter();
  const dispatch = useDispatch();
  const [sttShowComp, setShowComp] = React.useState(false);

  // ----------- set Btns
  const btns = {
    save: () => dispatch({ type: 'D3_CheckRequireds' }),
    cancel: () => callRouter('home'),
    openOppForm: () => setShowComp(true),
  };

  // ---------- set info Return
  const infoView = { content, btns };

  // ----------- set Return
  return (
    <UseInitData reducer={'D3_InitData'}>
      <UseCleanOut data={'D3'} />

      {showLine && !sttShowComp && (
        <OpportunityLineView info={{ openOppForm: btns.openOppForm }} />
      )}

      {sttShowComp && (
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
