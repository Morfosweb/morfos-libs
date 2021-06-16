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
} from '../../../config/useMorfos';
import { X0_ItemView } from './Views';
import { NoItemView } from '../comps';

// ----------- set Info Screen
export const infoSc = {
  path: 'name',
  groupSc: 'pub',
  condBigSc: true,

  scCode: 'X0',
};

// ----------- set Default Component
export default () => {
  // ----------- set Return

  const listCBFn = (itemId: string, noItem: boolean) => {
    const noItemComp = <NoItemView />;
    const infoData = { itemsInfo: 'X0.itemsInfo', itemId };
    const itemComp = <ItemComp key={itemId} infoData={infoData} />;
    return noItem ? noItemComp : itemComp;
  };

  return (
    <UseInitData reducer={'X0_InitData'}>
      <ViewDF>
        <UseCondLoader data={'X0.condList'}>
          <UseList data={'X0.itemsList'} callBackFn={listCBFn} />
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
  return <X0_ItemView info={infoView} />;
};
