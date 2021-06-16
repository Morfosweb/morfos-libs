// ----------- import Packs
import React from 'react';

// ----------- import Internals
import ViewDF, { B11_ItemView, FilterView, B11_NoItemView } from './Views';
import {
  UseInitData,
  UseCondLoader,
  UseList,
  useData,
  useRouter,
  UseFilter,
  UseCondChildren,
  UseCleanOut,
} from '../../../config/useMorfos';
import { useDispatch } from 'react-redux';

// ----------- set Info Screen
export const infoSc = {
  path: 'searchList',
  groupSc: 'priv',
  condBigSc: true,

  scCode: 'B11',
};

// ----------- set Default Component
export default () => {
  // ----------- set Return

  const infoFilter = {
    arrData: 'B1.clients.arrFilterData',
    fieldName: 'term',
    iptData: 'B11.forms.iptsChanges.searchTerm',
    reducer: 'B11_FilterItems',
  };

  const listCBFn = (itemId: string, noItem: boolean) => {
    const noItemComp = <B11_NoItemView />;
    const infoData = { itemsInfo: 'B1.clients.itemsInfo', itemId };
    const itemComp = <ItemComp key={itemId} infoData={infoData} />;
    return noItem ? noItemComp : itemComp;
  };

  return (
    <UseInitData reducer={'B11_InitData'}>
      <ViewDF>
        <UseCondLoader data={'B11.condList'}>
          <UseCleanOut data={'B11.condList'} />

          <IptComp />
          <UseFilter info={infoFilter}>
            <UseCondChildren data={'B11.filteredArr'}>
              <UseList data={'B11.filteredArr'} callBackFn={listCBFn} />
            </UseCondChildren>
          </UseFilter>
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
  return <B11_ItemView info={infoView} />;
};

const IptComp = () => {
  // ----------- set Data
  const iptValue = useData('B11.forms.iptsChanges.searchTerm');

  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- set Inputs
  const iptGetSearch = txt => dispatch({ type: 'B11_IptGetValue', value: txt });
  const btnClear = () => dispatch({ type: 'B11_ClearIpt' });

  // ----------- set Return
  const infoReturn = {
    iptGetSearch,
    iptValue,
    btnClear,
  };

  return <FilterView info={infoReturn} />;
};
