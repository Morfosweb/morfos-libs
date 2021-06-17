// ---------- import Internals
import { initCentralData } from './initCentralData';
import { ObjPropsT, DataT } from './types';
import { mergeData } from './mergeData';

// ---------- default Function
export default async (
  dataObj: DataT | null,
  dataFn?: ({
    ctData,
    clearObj,
    clearArr,
  }: {
    ctData: ObjPropsT;
    clearObj: ObjPropsT;
    clearArr: string[];
  }) => ObjPropsT,
) => {
  // ----------- set Props
  const ctData = initCentralData?.getState();
  const clearObj = { clearOtherProps: true };
  const clearArr = ['clearOtherProps'];

  // ----------- set Condition
  const condFn = dataFn ? dataFn({ ctData, clearObj, clearArr }) : dataObj;

  const newData = condFn && mergeData(ctData, condFn);

  // ----------- set Return
  initCentralData?.dispatch({
    type: 'CHANGE',
    value: condFn,
    newData: newData,
    currData: ctData,
  });

  return condFn;
};
