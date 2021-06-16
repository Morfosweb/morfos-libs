// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import ActivitityForm from '../D2_ActivityFORM';
import OpportunityForm from '../D3_OpportunityFORM';
import ViewDF, { IptView, ItemView, ListView, NoItemView } from './Views';
import {
  useRouter,
  UseInitData,
  useData,
  UseCondLoader,
  UseList,
  UseCondChildren,
  UseFilter,
  UseCleanOut,
} from '../../../config/useMorfos';
import { ClientCard } from '../../comps';

// ----------- set Info Screen
export const infoSc = {
  path: 'activityRegister',
  groupSc: 'priv',
  condBigSc: true,

  scCode: 'D4',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('D4.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();
  const dispatch = useDispatch();

  // ----------- set Btns
  const btns = {
    save: () => dispatch({ type: 'D4_ADD_activityRegister' }),
    cancel: () => callRouter('shopsList'),
  };

  // ----------- set Info Return
  const infoView = { content, btns };

  // ----------- set Return
  return (
    <UseInitData reducer={'D4_InitData'}>
      <UseCondLoader data={'D4.condList'}>
        <UseCleanOut data={'D4.condList'} />

        <ViewDF info={infoView}>
          <AutoCompleteComp />
          <UseCondChildren data={'D4.selectedClient'}>
            <ClientCardComp />
            <ActivitityForm />
            <OpportunityForm />
          </UseCondChildren>
        </ViewDF>
      </UseCondLoader>
    </UseInitData>
  );
};

const ClientCardComp = () => {
  // ----------- set Data
  const itemId = useData('D4.selectedClient');

  return <ClientCard itemId={itemId} btnClose />;
};

const AutoCompleteComp = () => {
  // ----------- set Data
  const placeholder = useData('D4.scContent.placeholder');
  const iptValue = useData('D4.forms.iptsChanges.autoComplete');

  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- set Inputs
  const iptAutoComplete = txt => dispatch({ type: 'D4_IptValues', value: txt });

  // ----------- set Return
  const infoReturn = {
    iptAutoComplete,
    placeholder,
    iptValue,
  };
  return (
    <>
      <IptView info={infoReturn} />
      <ListACComp />
    </>
  );
};

const ListACComp = () => {
  // ----------- set Hooks
  const { callRouter } = useRouter();
  const btn = {
    addClient: () => callRouter('addClient'),
  };

  // ----------- set Return
  const infoFilter = {
    arrData: 'B1.clients.arrFilterData',
    fieldName: 'term',
    iptData: 'D4.forms.iptsChanges.autoComplete',
    reducer: 'D4_FilterItems',
    maxLimit: 5,
  };

  const listCBFn = (itemId: string, noItem: boolean) => {
    const noItemComp = <NoItemView />;
    const infoData = { itemsInfo: 'B1.clients.itemsInfo', itemId };
    const itemComp = <ItemACComp key={itemId} infoData={infoData} />;
    return noItem ? noItemComp : itemComp;
  };

  return (
    <UseCondChildren data={'D4.forms.iptsChanges.condList'}>
      <ListView info={{ btn }}>
        <UseFilter info={infoFilter}>
          <UseCondChildren data={'D4.filteredArr'}>
            <UseList data={'D4.filteredArr'} callBackFn={listCBFn} />
          </UseCondChildren>
        </UseFilter>
      </ListView>
    </UseCondChildren>
  );
};

const ItemACComp = ({ infoData }) => {
  // ----------- set Params
  const { itemId, itemsInfo } = infoData;

  // ----------- set Data
  const item = useData(itemsInfo, itemId);

  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- set Routes
  const selClient = () => dispatch({ type: 'D4_SelectClient', value: itemId });

  // ----------- set Return
  const infoView = { item, selClient };
  return <ItemView info={infoView} />;
};
