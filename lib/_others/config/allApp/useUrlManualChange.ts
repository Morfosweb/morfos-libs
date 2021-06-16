// ----------- import Packs
import { useEffect } from 'react';

// ---------- import Internals
import { useRouter, useData } from '../useMorfos';

// ----------- set Default
export default () => {
  // ----------- set Data
  const selectedRoute = useData('baseRoute.path');

  // ----------- set Conds
  const condPathName = window.location.pathname.split('/')[1];
  const condBlank = condPathName === '' ? selectedRoute : condPathName;
  const condManual = condBlank !== selectedRoute;

  // ----------- set Effects
  const fxInitRoute = () => {
    condManual && callRouter(condPathName);
  };

  // ----------- set Hooks
  const { callRouter } = useRouter();
  useEffect(fxInitRoute, []);
};
