// @ts-check
// ----------- import Packs
import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// ----------- import Packs
import { useData, setData } from '../../central-data';
// import { useData } from '@morfos/central-data';

// ----------- import Internals
// import { useData } from '../useMorfos';

type Ref = any;

export default () => {
  // ----------- set Data
  // const dispatch = useDispatch();

  const selectedScreen = useData('dev.screens.selected');
  // const currRoute = useData('baseRoute.path');
  const currRoute = useData('dev.screens.scInfo.' + selectedScreen + '.path');

  const condNoPush = useData('dev.screens.condNoPush');

  // ----------- set Ref History
  const ref: Ref = {
    cleanPath: () => ref.currLocation().pathname.split('/')[1],

    fxPush: () => {
      const condReload = currRoute !== ref.cleanPath();
      const condPush = !condNoPush && condReload;
      if (condPush) {
        ref.push(`/${currRoute}`);
      } else {
        // dispatch({ type: 'base_condPushTrue' });
        setData({ dev: { screns: { condNoPush: false } } });
      }
    },

    /****************************
     * Link de onde foi retirado a ideia do código abaixo:
     * https://gist.github.com/lenkan/357b006dd31a8c78f659430467369ea7
     */

    currLocation() {
      return {
        pathname: window.location.pathname,
        search: window.location.search,
      };
    },

    listeners: [],

    // ----------- set Effects
    fxListeners: () => {
      ref.listeners.push(ref.handleChange);
      return () =>
        ref.listeners.splice(ref.listeners.indexOf(ref.handleChange), 1);
    },

    fxHistory: () => {
      const callRouter = () => {
        // dispatch({ type: 'base_History', value: ref.cleanPath() });
        setData({ dev: { screns: { condNoPush: true } } });
        ref.cleanPath();

        ref.handleChange();
      };
      window.addEventListener('popstate', callRouter);
      return () => window.removeEventListener('popstate', callRouter);
    },

    // ----------- set Functions
    handleChange() {
      setLocation(ref.currLocation());
    },

    notify() {
      ref.listeners.forEach(listener => listener());
    },

    // ----------- set Change Urls

    push(url) {
      window.history.pushState(null, '', url);
      ref.notify();
    },

    replace(url) {
      window.history.replaceState(null, '', url);
      ref.notify();
    },
  };

  // ----------- set Hooks
  const [{ pathname, search }, setLocation] = useState(ref.currLocation());
  useEffect(ref.fxHistory, []);
  useEffect(ref.fxPush, [currRoute]);
  useEffect(ref.fxListeners, []);
};
