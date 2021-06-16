// ---------- import Internals
import { initCentralData } from './initCentralData';
import { SetDataParamT } from './types';

// ---------- export Default Function
export default (cbfn: SetDataParamT) => {
  // ----------- set Data
  const ctData = initCentralData?.getState();

  // ----------- set Condition
  const condNewData = typeof cbfn === 'function' ? cbfn(ctData) : cbfn;

  // ----------- set Return
  return initCentralData?.dispatch({
    type: 'CHANGE',
    value: condNewData,
    currData: ctData,
  });
};
