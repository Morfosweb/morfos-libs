// ----------- import Packs
import React from 'react';

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
  path: 'oportunitiesList',
  groupSc: 'priv',
  condBigSc: true,

  scCode: 'B10',
};

// ----------- set Default Component
export default () => {
  // ----------- set Return

  const listCBFn = (itemId: string, noItem: boolean) => {
    const noItemComp = <NoItemView />;
    const infoData = { itemsInfo: 'B10.itemsInfo', itemId };
    const itemComp = <ItemComp key={itemId} infoData={infoData} />;
    return noItem ? noItemComp : itemComp;
  };

  return (
    <UseInitData reducer={'B10_InitData'}>
      <ViewDF>
        <UseCondLoader data={'B10.condList'}>
          <UseCleanOut data={'B10.condList'} />
          <UseList data={'B10.itemsList'} callBackFn={listCBFn} />
        </UseCondLoader>
      </ViewDF>
    </UseInitData>
  );
};

const ItemComp = ({ infoData }) => {
  // ----------- set Params
  const { itemId, itemsInfo } = infoData;

  // ----------- set Data
  const item = useData(itemsInfo, itemId);

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoto = () => callRouter('signin');

  // ----------- set Return
  const infoView = { item, btnGoto, content };
  return <ItemView info={infoView} />;
};
