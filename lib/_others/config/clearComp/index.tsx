// ----------- import Packs
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ----------- set Info Screen
export const infoSc = {
  path: 'clear',
  groupSc: 'pub',

  scCode: 'CLEAR',
};

// ----------- set Default Component
export default () => {
  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- set Effects
  const fxClear = () => {
    dispatch({ type: 'base_CLEAR' });
  };
  useEffect(fxClear, []);

  // ----------- set Return

  return null;
};
