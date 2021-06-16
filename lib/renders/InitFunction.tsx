// ---------- import Packs
import { useState, useEffect } from 'react';

// ---------- import Internals
import { PropsFunctionT } from './types';

export default ({ children, setFunction }: PropsFunctionT) => {
  // ----------- set Hooks
  const [sttCondShow, setCondChildren] = useState(false);

  // ----------- set Effects
  const fxInitData = () => {
    setFunction();
    setCondChildren(true);
  };
  useEffect(fxInitData);

  // ----------- set Return
  return <>{sttCondShow && children}</>;
};
