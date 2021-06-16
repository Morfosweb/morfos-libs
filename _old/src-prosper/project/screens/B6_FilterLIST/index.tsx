// ----------- import Packs
import React from 'react';

// ----------- import Internals
import ViewDF from './Views';
import {
  UseInitData,
  UseCondLoader,
  UseList,
  useData,
  UseCleanOut,
} from '../../../config/useMorfos';
import { NoItemView } from './Views';
import { LineListIcons } from '../../comps';

// ----------- set Info Screen
export const infoSc = {
  path: 'filterList',
  groupSc: 'priv',
  condBigSc: true,
  scCode: 'B6',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const itemsInfo = useData('B6.filteredList.itemsFrom');

  // ----------- set Return
  const listCBFn = (itemId: string, noItem: boolean) => {
    const noItemComp = <NoItemView />;
    const infoData = { itemsInfo, itemId };
    const itemComp = <LineListIcons key={itemId} infoData={infoData} />;
    return noItem ? noItemComp : itemComp;
  };

  return (
    <UseInitData reducer={'B6_InitData'}>
      <ViewDF>
        <UseCondLoader data={'B6.condList'}>
          <UseCleanOut data={'B6.condList'} />

          <UseInitData reducer={'B6_InitFilter'}>
            <UseList
              data={'B1.opportunities.itemsList'}
              callBackFn={listCBFn}
            />
          </UseInitData>
        </UseCondLoader>
      </ViewDF>
    </UseInitData>
  );
};
