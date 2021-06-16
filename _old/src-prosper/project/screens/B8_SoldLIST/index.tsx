// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';
// ----------- import Internals
import ViewDF from './Views';
import {
  UseInitData,
  UseCondLoader,
  UseList,
  useData,
  useRouter,
  UseCleanOut,
} from '../../../config/useMorfos';
import { ItemView, NoItemView } from './Views';

// ----------- set Info Screen
export const infoSc = {
  path: 'soldList',
  groupSc: 'priv',
  condBigSc: true,

  scCode: 'B8',
};

// ----------- set Default Component
export default () => {
  const dispatch = useDispatch();

  // ----------- set Btns
  const btn = {
    total: () => dispatch({ type: 'B8_TotalOportunities' }),
  };

  // ----------- set Return
  const listCBFn = (itemId: string, noItem: boolean) => {
    const noItemComp = <NoItemView />;
    const infoData = { itemsInfo: 'B8.itemsInfo', itemId };
    const itemComp = <ItemComp key={itemId} infoData={infoData} />;
    return noItem ? noItemComp : itemComp;
  };

  return (
    <UseInitData reducer={'B8_InitData'}>
      <ViewDF info={{ btn }}>
        <UseCondLoader data={'B8.condList'}>
          <UseCleanOut data={'B8.condList'} />

          <UseList data={'B8.itemsList'} callBackFn={listCBFn} />
        </UseCondLoader>
      </ViewDF>
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
