// ----------- import Packs
import React from 'react';

// ----------- import Internals
import ViewDF, { AddClientView, ItemView, NoItemView } from './Views';
import {
  useRouter,
  UseInitData,
  useData,
  UseList,
  UseCondLoader,
  UseCleanOut,
} from '../../../config/useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'clientsList',
  groupSc: 'priv',
  condBigSc: true,

  scCode: 'B2',
};

// ----------- set Default Component
export default () => {
  // ----------- set Return
  const listCBFn = (itemId: string, noItem: boolean) => {
    const noItemComp = <NoItemView />;
    const infoData = { itemsInfo: 'B1.clients.itemsInfo', itemId };
    const itemComp = <ItemComp key={itemId} infoData={infoData} />;
    return noItem ? noItemComp : itemComp;
  };

  return (
    <UseInitData reducer={'B2_InitData'}>
      <UseCondLoader data={'B2.condList'}>
        <UseCleanOut data={'B2.condList'} />

        <ViewDF>
          <AddClientComp />
          <UseList data={'B1.clients.itemsList'} callBackFn={listCBFn} />
        </ViewDF>
      </UseCondLoader>
    </UseInitData>
  );
};

// ----------- set Component
const AddClientComp = () => {
  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Btns
  const btn = {
    addClient: () => callRouter('addClient'),
  };

  // ----------- set Return
  return <AddClientView info={{ btn }} />;
};

// ----------- set Component
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
