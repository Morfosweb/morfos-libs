// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF, { ItemView, NoItemView } from './Views';
import {
  UseInitData,
  useData,
  UseCondChildren,
  UseList,
} from '../../../config/useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'filterOpp',
  groupSc: 'priv',
  condBigSc: true,
  scCode: 'D6',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const passIptClientName = useData('D6.forms.iptChanges.client');
  const passIptProb = useData('D6.forms.iptChanges.prob');
  const passPickState = useData('D6.forms.iptChanges.state');
  const passPickCity = useData('D6.forms.iptChanges.city');
  const passPickProd = useData('D6.forms.iptChanges.prod');
  const passPickMod = useData('D6.forms.iptChanges.mod');

  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- set Inputs
  const inputs = {
    getIptClientName: txt => dispatch({ type: 'D6_IptClient', value: txt }),
    getIptProb: txt => dispatch({ type: 'D6_IptProb', value: txt }),

    getPickState: sel => dispatch({ type: 'D6_PickState', value: sel }),
    getPickCity: sel => dispatch({ type: 'D6_PickCity', value: sel }),
    getPickProd: sel => dispatch({ type: 'D6_PickProd', value: sel }),
    getPickMod: sel => dispatch({ type: 'D6_PickMod', value: sel }),

    btnClear: () => dispatch({ type: 'D6_BtnClear' }),
    btnFilter: () => dispatch({ type: 'D6_BtnFilter' }),
    condValClientName: passIptClientName ?? '',
    condValProb: passIptProb ?? '',
    condValState: passPickState ?? 'initial',
    condValCity: passPickCity ?? 'initial',
    condValProd: passPickProd ?? 'initial',
    condValMod: passPickMod ?? 'initial',
  };

  // ----------- set Return

  const listCBFn = (itemId: string, noItem: boolean) => {
    const noItemComp = <NoItemView />;
    const infoData = { itemsInfo: 'B1.opportunities.itemsInfo', itemId };
    const itemComp = <ItemComp key={itemId} infoData={infoData} />;
    return noItem ? noItemComp : itemComp;
  };

  return (
    <UseInitData reducer={'D6_InitData'}>
      <UseCondChildren data={'D6.condList'}>
        <ViewDF info={inputs}>
          <UseList data={'B1.opportunities.itemsList'} callBackFn={listCBFn} />
        </ViewDF>
      </UseCondChildren>
    </UseInitData>
  );
};

const ItemComp = ({ infoData }) => {
  // ----------- set Params
  const { itemId, itemsInfo } = infoData;

  // ----------- set Data
  const item = useData(itemsInfo, itemId);

  // ----------- set Return
  const infoView = { item, itemId };
  return <ItemView info={infoView} />;
};
