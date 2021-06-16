// ---------- import Internals
import { initCentralData } from './initCentralData';
import { Obj_or_Function } from './types';
import { mergeData } from './mergeData';

// ---------- default Function
export default async (data: Obj_or_Function) => {
  // ----------- set Props
  const ctData = initCentralData?.getState();
  // const clean = { cleanOtherProps: true };
  // ----------- set Condition
  // const condFn =
  // typeof data === 'function' ? data({ ctData, clean }) : data;

  const newData = mergeData(ctData, data);

  // ----------- set Return
  initCentralData?.dispatch({
    type: 'CHANGE',
    value: data,
    newData: newData,
    currData: ctData,
  });

  // return data;
};
