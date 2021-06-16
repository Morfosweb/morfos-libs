// ----------- import Internals
import React from 'react';
import ViewDF from './Views';

import {
  UseInitData,
  useData,
  UseCondLoader,
  UseList,
} from '../../../config/useMorfos';
import { ezLog, rangeArr } from '../../../config/useMorfos/utils';
import { NoItemView } from '../../comps';

// ----------- set Info Screen
export const infoSc = {
  path: 'registers',
  groupSc: 'priv3',
  condBigSc: true,

  scCode: 'D2',
};

// ----------- set Default Component
export default () => {
  // ----------- set Info Return
  const listCBFn = (itemId: string, noItem: boolean) => {
    const noItemComp = <NoItemView />;
    const infoData = { itemsInfo: 'D2.itemsInfo', itemId };
    const itemComp = <ItemComp key={itemId} infoData={infoData} />;
    return noItem ? noItemComp : itemComp;
  };
  // ----------- set Return
  // return <div>oi mundo</div>;
  return (
    <UseInitData reducer={'D2_InitData'}>
      <UseCondLoader data={'D2.condList'}>
        <TotalsComp />

        <UseList
          data={'D2.itemsList'}
          callBackFn={listCBFn}
          virtualized={false}
        />
      </UseCondLoader>

      {/* <MockList /> */}
    </UseInitData>
  );
};

const TotalsComp = () => {
  const itemsTotals = useData('D2.itemsTotals');

  ezLog({ itemsTotals });
  return <ViewDF info={itemsTotals} />;
};

const ItemComp = ({ infoData }) => {
  // ----------- set Props Parameter
  const { itemId, itemsInfo } = infoData;

  // ----------- set Data
  const item = useData(itemsInfo, itemId);

  // ----------- set Info Return
  const infoView = { ...item };

  // ----------- set Return
  return <ViewDF info={infoView} />;
};

const MockList = () => {
  // ----------- set Info Return
  const infoView = {
    infoPerson: {
      personRef: {
        personName: 'Juan Teste',
        personId: '',
        personalData: {
          birth: '1/1/1991',
          baptism: '1/1/1991',
          genre: 'm',
          hope: 'earth',
          elder: true,
          ministerialSv: false,
          regularPion: true,
        },
      },
    },

    year1: {
      reportsRef: {
        '2019_09': { observations: '2019_09' },
        '2019_10': { observations: '2019_10' },
        '2019_11': {
          hours: 4,
          observations: '2019_11',
        },
        '2019_12': {
          hours: 0,
          observations: '2019_12',
        },
        '2020_01': { observations: '2020_01' },
        '2020_02': {
          privilegeType: 'pr',
          publications: 1,
          videos: 0,
          hours: 8,
          returnVisits: 4,
          studies: 5,
          observations: 0,
        },
        '2020_03': { observations: '2020_03' },
        '2020_04': { observations: '2020_04' },
        '2020_05': { observations: '2020_05' },
        '2020_06': { observations: '2020_06' },
        '2020_07': { observations: '2020_07' },
        '2020_08': { observations: '2020_08' },
      },
    },

    year2: {
      reportsRef: {
        '2020_09': { observations: '2020_09' },
        '2020_10': { observations: '2020_10' },
        '2020_11': {
          privilegeType: 'pr',
          publications: 1,
          videos: 2,
          hours: 3,
          returnVisits: 4,
          studies: 5,
          observations: '2020_11',
        },
        '2020_12': { observations: '2020_12' },
      },
    },
  };
  const newArr = rangeArr(1, 20);

  // ----------- set Info Return
  const callBackItems = item => <ViewDF key={item} info={infoView} />;
  const itemsList = newArr.map(callBackItems);

  return itemsList;
};
