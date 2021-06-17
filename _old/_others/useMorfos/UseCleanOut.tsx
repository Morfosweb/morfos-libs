// ---------- import Packs
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default ({ data }: { data: string }) => {
  // ----------- set effects
  const fxLeaveCleanData = () => () => {
    dispatch({ type: 'base_CLEAN_OUT', value: data });
  };

  // ----------- set Hooks
  const dispatch = useDispatch();
  useEffect(fxLeaveCleanData, []);

  // ----------- set Return
  return <></>;
};
