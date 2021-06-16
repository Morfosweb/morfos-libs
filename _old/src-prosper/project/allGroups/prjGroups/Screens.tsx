// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';
import { useData } from '../../../config/useMorfos';

// ----------- import Internals

export default ({ children }) => {
  // ----------- set Data
  const condFirstList = useData('B1.snapLists.condFirstList');

  // ----------- set Effects
  const fxSnap = () => {
    condFirstList && dispatch({ type: 'allgps_B1_CondSnap', value: '1' });
    !condFirstList && dispatch({ type: 'base_setRoute', value: 'home' });
  };

  // ----------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxSnap, []);

  // ----------- set Return
  return children;
};
