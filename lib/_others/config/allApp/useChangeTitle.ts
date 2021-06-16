// ---------- import Internals
import { useData } from '../useMorfos';

// ----------- set Default
export default () => {
  // ----------- set Data
  const path = useData('baseRoute.path');
  const currScTitle = useData('baseRoute.routesInfo.' + path + '.title');

  // ----------- set Title
  document.title = currScTitle ?? 'Project Morfos';
};
