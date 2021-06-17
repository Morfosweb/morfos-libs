// ---------- import Internals
import { useData } from '../useMorfos';
import routeGroups from '../../project/allGroups/routeGroups';

// ----------- set Default
export default () => {
  // ----------- set Data
  const routesInfo = useData('baseRoute.routesInfo');
  const path = useData('baseRoute.path');

  // ----------- set Current Group
  const currPath = routesInfo[path];
  const condPath = currPath ?? routesInfo['404'];
  const currInfo = condPath.groupSc;
  const arrCurrGroup = routeGroups[currInfo];

  // ----------- set Return
  return arrCurrGroup;
};
