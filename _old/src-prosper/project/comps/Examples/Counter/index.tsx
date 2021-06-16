// ---------- import Packs
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { utils } from '/src/useMorfos';

// ---------- import Internals
import ViewDF from './Views';
// import { ExampleRedux as ViewDF } from '/src/screens/comps';
import { useRouter, UseInitData } from '../../../../config/useMorfos';

// ---------- set infoSc
export const infoSc = {
  // ----------
  path: 'signin',
  groupSc: 'priv1',
  scCode: 'A1',
};

export default () => {
  // ---------- set Vars
  const { scCode } = infoSc;

  // ---------- set Hooks
  const { callRouter } = useRouter();

  // ---------- set Router
  const btnGoto = () => callRouter('terms');

  // ---------- set Return
  const infoReturn = { scCode, btnGoto };
  return (
    <UseInitData reducer={'initDataA1'}>
      <ViewDF info={infoReturn} />
    </UseInitData>
  );
};
