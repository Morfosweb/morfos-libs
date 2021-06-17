// ----------- import Packs
import { useEffect } from 'react';

// ----------- import Packs
import { useData } from '../../central-data';
// import { useData } from '@morfos/central-data';

// ---------- import Internals
import goTo from '../goTo';
// import { useRouter, useData } from '../useMorfos';

// ----------- set Default
export default () => {
  // ----------- set Data
  const selectedScreen = useData('dev.screens.selected');
  const selectedRoute = useData(
    'dev.screens.scInfo.' + selectedScreen + '.path',
  );

  // ----------- set Conds
  const condPathName = window.location.pathname.split('/')[1];
  const condBlank = condPathName === '' ? selectedRoute : condPathName;
  const condManual = condBlank !== selectedRoute;

  // ----------- set Effects
  const fxInitRoute = () => {
    if (condManual) {
      goTo(condPathName);
    }
  };

  // ----------- set Hooks
  useEffect(fxInitRoute, []);
};
