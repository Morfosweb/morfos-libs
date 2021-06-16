// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import {
  UseInitData,
  UseList,
  useData,
  useRouter,
  UseCondChildren,
} from '../../../config/useMorfos';
import { ItemView, NoItemView } from './Views';

// ----------- set Info Screen
export const infoSc = {
  path: 'activitiesList',
  groupSc: 'priv',
  condBigSc: true,
  scCode: 'B3',
};

// ----------- set Default Component
export default () => {
  const dispatch = useDispatch();

  // ----------- set Btns
  const btn = {
    total: () => dispatch({ type: 'B4_Total' }),
    estrelas: () => dispatch({ type: 'B4_Estrelas' }),
    oportunidade: () => dispatch({ type: 'B4_Oportunidade' }),
    negocio: () => dispatch({ type: 'B4_EmNegocio' }),
    fechado: () => dispatch({ type: 'B4_Fechado' }),
    concluidos: () => dispatch({ type: 'B4_Concluidos' }),
    perdida: () => dispatch({ type: 'B4_VendPerdida' }),
  };

  // ----------- set Return
  const listCBFn = (itemId: string, noItem: boolean) => {
    const noItemComp = <NoItemView />;
    const infoData = { itemsInfo: 'B1.activities.itemsInfo', itemId };
    const itemComp = <ItemComp key={itemId} infoData={infoData} />;
    return noItem ? noItemComp : itemComp;
  };

  return (
    <UseInitData reducer={'B4_InitData'}>
      <UseCondChildren data={'B4.condList'}>
        <ViewDF info={btn}>
          <UseList data={'B1.activities.itemsList'} callBackFn={listCBFn} />
        </ViewDF>
      </UseCondChildren>
    </UseInitData>
  );
};

const ItemComp = ({ infoData }) => {
  // ----------- set Params
  const { itemId, itemContent, itemsInfo } = infoData;

  // ----------- set Data
  const content = useData(itemContent);
  const item = useData(itemsInfo, itemId);

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoto = () => callRouter('signin');

  // ----------- set Return
  const infoView = { item, btnGoto, content };
  return <ItemView info={infoView} />;
};
