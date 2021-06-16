// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

export default () => {
  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- set callRouter
  const callRouter = path => {
    dispatch({
      type: 'base_setRoute',
      value: path,
    });
  };

  // ----------- set callRedirect
  const callRedirect = path => {
    callRouter(path);
    return <></>;
  };

  // ----------- set Return
  return { callRedirect, callRouter };
};

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*

  // ----------- set Hooks
  const {callRouter} = useRouter();
  
  // ----------- set Routes
  const btnGoto = () => callRouter("home");
  
  - - or - -
  
  // ----------- set Hooks
  const {callRedirect} = useRouter();
  
  // ----------- set Return
  // const condReturn = sttAuthUser ? children : callRedirect("signin");

*/

// ---------------
// #endregion
// ***************************************
