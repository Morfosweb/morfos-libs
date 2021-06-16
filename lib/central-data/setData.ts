// ---------- import Internals
import { initCentralData } from './initCentralData';
import { SetDataParamT } from './types';
import { mergeData } from './mergeData';

// ---------- default Function
export default (cbfn: SetDataParamT) => {
  // ----------- set Props
  const ctData = initCentralData?.getState();
  const clean = { cleanOtherProps: true };
  const mergedData = mergeData(ctData, cbfn);

  // ----------- set Condition
  const condNewData =
    typeof cbfn === 'function' ? cbfn({ ctData, clean }) : mergedData;

  // ----------- set Return
  return initCentralData?.dispatch({
    type: 'CHANGE',
    value: condNewData,
    currData: ctData,
  });
};
