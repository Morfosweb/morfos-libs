// ---------- import Packs
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ---------- import Internals
import { useData } from '../useMorfos';
import screens from '../../project/screens';

// ----------- set Default
export default () => {
  // ----------- set Data
  const routesInfo = useData('baseRoute.routesInfo');
  const path = useData('baseRoute.path');

  // ----------- set Current Screen Condition
  const currPath = routesInfo[path];
  const condCurrInfo = currPath ?? routesInfo['404'];

  // ----------- set Current Screen Info
  const dispatch = useDispatch();
  const fxScInfo = () => {
    dispatch({ type: 'base_CurrScInfo', value: condCurrInfo });
  };
  useEffect(fxScInfo, [path]);

  // ----------- set Current Screen Comp
  const currModule = condCurrInfo.scKey;
  const CurrScreen = screens[currModule].default;

  // ----------- set Return
  return CurrScreen;
};
