// ----------- import Packs
// import React from 'react';

// ----------- import Internals
import { useRouter, useData } from '../../../config/useMorfos';

export default ({ children }) => {
  // ----------- set Data
  const authUser = useData(`basePersist.userId`);

  // ----------- set Hooks
  const { callRedirect } = useRouter();

  // ----------- set Return
  const condReturn = authUser ? callRedirect('shopsList') : children;
  return condReturn;
};
