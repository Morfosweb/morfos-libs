// ----------- import Packs
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ---------- import Internals
import { firestore } from '../firebase/fbConfig';
import { ezLog } from './utils';

type Info = {
  collectionName: string;
  orderField: string;
  orderType: any;
  reducerSuccess: string;
};

export default (info: Info, condSnap?: string, condSuffix?: string) => {
  const { collectionName, orderField, orderType, reducerSuccess } = info;

  // ----------- set Effects
  const fxCallSnap = () => {
    ezLog('SNAP IN!!!');

    let dbRef = firestore
      .collection(collectionName)
      .orderBy(orderField, orderType);
    // ---------- set Temp
    // .limit(200);

    const snapListen = dbRef.onSnapshot(
      snap => {
        ezLog('SNAP CHANGE!!!');

        dispatch({ type: reducerSuccess, value: snap, collectionName });
        condSnap && dispatch({ type: condSnap, value: condSuffix });
      },
      error => ezLog('ERROR: ', error.message),
    );

    const snapOut = () => {
      ezLog('SNAP OUT!!!');

      snapListen();
    };

    return snapOut;
  };

  // ----------- set Hooks
  const dispatch = useDispatch();
  useEffect(fxCallSnap, []);
};
