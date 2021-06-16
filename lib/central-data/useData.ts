// ----------- import Packs
import { useSelector } from 'react-redux';

// ----------- import Internals
import { UseDataT, DataSelectionT } from './types';

/**
 * // ----------- Comment TS function
 * Select a property using a string path and returns false if undefined
 * @param path - Ex: "C1.forms.condShow"
 */

// ----------- set Default Function
const useData: UseDataT = path => {
  // ----------- set Selector
  const ctDataSel: DataSelectionT = ctData => {
    const pathArr = path.split('.');
    const reduceCb = (p, c) => p && p[c];
    const ctDataSel = pathArr.reduce(reduceCb, ctData && ctData);
    return ctDataSel;
  };
  const dataSelected = useSelector(ctDataSel);

  // ----------- set Return
  return dataSelected;
};

// ----------- export Default Function
export default useData;
