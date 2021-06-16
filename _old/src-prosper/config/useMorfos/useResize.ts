// ----------- import Packs
import { useSelector } from 'react-redux';
import useData from './useData';

export default stl => {
  // ----------- set Selectors
  const condDesk = useData('baseRoute.condDeskSize');

  // ----------- set Return
  const condStl = condDesk ? stl?.desk : stl?.mob;
  const condReturn = stl === undefined ? condDesk : condStl;
  return condReturn;
};
