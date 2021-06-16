// ---------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

export default ({ data }: { data: string }) => {
  // ----------- set effects
  const fxLeaveCleanData = () => () => {
    dispatch({ type: 'base_CLEAN_OUT', value: data });
  };

  // ----------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxLeaveCleanData, []);

  // ----------- set Return
  return <></>;
};
