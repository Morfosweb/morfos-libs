// ---------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

export default ({ children, reducer }) => {
  // ----------- set Hooks
  const [sttCondShow, setCondInit] = React.useState(false);

  // ----------- set Effects
  const fxInitData = () => {
    dispatch({ type: reducer });
    setCondInit(true);
  };

  // ----------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxInitData, []);

  // ----------- set Return
  return sttCondShow && children;
};
