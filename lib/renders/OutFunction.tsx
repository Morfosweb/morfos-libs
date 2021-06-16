// ---------- import Packs
import { useEffect } from 'react';

// ---------- import Internals
import { PropsFunctionT } from './types';

// ----------- set Default Function
export default ({ children, setFunction }: PropsFunctionT) => {
  // ----------- set Effects
  const fxInitData = () => () => setFunction();
  useEffect(fxInitData);

  // ----------- set Return
  return <>{children}</>;
};
