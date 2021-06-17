// ----------- import Packs
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ---------- import Internals
import { condWidth } from '../condPacks/dimensions';

// ----------- set Default
export default () => {
  // ----------- set Effects
  const callResize = () =>
    dispatch({ type: 'base_ListenResize', value: condWidth() });

  const fxInitSize = () => {
    callResize();
  };

  const fxResize = () => {
    window.addEventListener('resize', callResize);
    return () => window.removeEventListener('resize', callResize);
  };

  // ----------- set Hooks
  const dispatch = useDispatch();
  useEffect(fxInitSize, []);
  useEffect(fxResize, []);
};
