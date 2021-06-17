// ----------- import Packs
import { useData } from '../../central-data';
// import { useData } from '@morfos/central-data';

// ----------- set Default
export default () => {
  // ----------- set Data
  const path = useData('baseRoute.path');
  const currScTitle = useData('baseRoute.routesInfo.' + path + '.title');

  // ----------- set Title
  document.title = currScTitle ?? 'Project Morfos';
};
