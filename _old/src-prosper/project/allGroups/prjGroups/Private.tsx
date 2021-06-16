// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';
import { LogBox, Platform } from 'react-native';

// ----------- import Internals
import {
  UseCondChildren,
  UseInitData,
  useSnapDb,
} from '../../../config/useMorfos';

export default ({ children }) => {
  // ----------- set Effects
  const fxLists = () => {
    const arrLists = [snapClients, snapActivities, snapOpportunities, snapKpi];
    const mapLists = item => dispatch({ type: 'B1_GET_FirstList', info: item });

    arrLists.map(mapLists);
  };

  // ----------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxLists, []);

  const condWeb = Platform.OS === 'web';
  !condWeb && LogBox.ignoreAllLogs();

  return (
    <UseInitData reducer={''}>
      <CompSnap />
      {children}
    </UseInitData>
  );
};

function CompSnap() {
  return (
    <>
      <UseCondChildren data={'B1.snapLists.condSnap1'}>
        <CallSnap
          info={{
            obj: snapClients,
            condSnap: 'allgps_B1_CondSnap',
            condSuffix: '2',
          }}
        />
      </UseCondChildren>
      <UseCondChildren data={'B1.snapLists.condSnap2'}>
        <CallSnap
          info={{
            obj: snapActivities,
            condSnap: 'allgps_B1_CondSnap',
            condSuffix: '3',
          }}
        />
      </UseCondChildren>
      <UseCondChildren data={'B1.snapLists.condSnap3'}>
        <CallSnap
          info={{
            obj: snapOpportunities,
            condSnap: 'allgps_B1_CondSnap',
            condSuffix: '4',
          }}
        />
      </UseCondChildren>
      <UseCondChildren data={'B1.snapLists.condSnap4'}>
        <CallSnap
          info={{
            obj: snapKpi,
            condSnap: 'allgps_B1_CondSnap',
            condSuffix: 'All',
          }}
        />
      </UseCondChildren>
    </>
  );
}

function CallSnap({ info }) {
  // ----------- set Snap Hooks
  useSnapDb(info.obj, info.condSnap);

  return <></>;
}

// ----------- set Snap DB
const snapClients = {
  collectionName: 'clients',
  orderField: 'createdAt',
  orderType: 'desc',
  reducerSuccess: 'B1_GET_FirstList_SUCCESS',
};

const snapActivities = {
  collectionName: 'activities',
  orderField: 'createdAt',
  orderType: 'desc',
  reducerSuccess: 'B1_GET_FirstList_SUCCESS',
};

const snapOpportunities = {
  collectionName: 'opportunities',
  orderField: 'createdAt',
  orderType: 'desc',
  reducerSuccess: 'B1_GET_FirstList_SUCCESS',
};

const snapKpi = {
  collectionName: 'kpi',
  orderField: 'createdAt',
  orderType: 'desc',
  reducerSuccess: 'B1_GET_FirstList_SUCCESS',
};
