// ---------- import Packs
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ----------- set Default Function
export default ({ children, reducer }) => {
  // ----------- set Hooks
  const [sttCondShow, setCondInit] = useState(false);
  const dispatch = useDispatch();

  // ----------- set Effects
  const fxInitData = () => {
    dispatch({ type: reducer });
    setCondInit(true);
  };
  useEffect(fxInitData, []);

  // ----------- set Return
  return sttCondShow && children;
};
