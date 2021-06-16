// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { UseInitData, useRouter } from '../../../config/useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'reportsList',
  groupSc: 'priv',
  condBigSc: true,

  scCode: 'B3',
};

// ----------- set Default Component
export default () => {
  // ----------- set Return

  const { callRouter } = useRouter();

  const dispatch = useDispatch();

  // ----------- set Btns
  const btn = {
    total: () => dispatch({ type: 'B3_Total' }),
    estrelas: () => dispatch({ type: 'B3_Estrelas' }),
    oportunidade: () => dispatch({ type: 'B3_Oportunidade' }),
    negocio: () => dispatch({ type: 'B3_EmNegocio' }),
    fechado: () => dispatch({ type: 'B3_Fechado' }),
    concluidos: () => dispatch({ type: 'B3_Concluidos' }),
    perdida: () => dispatch({ type: 'B3_VendPerdida' }),
  };

  const routes = {
    filterOpp: () => callRouter('filterOpp'),
  };

  return (
    <UseInitData reducer={'B3_InitData'}>
      <ViewDF info={{ routes, btn }} />
    </UseInitData>
  );
};
