// ---------- import Packs
// import { setData as setCtData } from '@morfos/central-data';
import { useData } from '../central-data';

// ---------- import Internals
import { PropsUseDataT } from './types';

export default ({ children, dataPath }: PropsUseDataT) => {
  // ----------- set Data
  const release = useData(dataPath);

  // ----------- set Return
  return <>{release && children}</>;
};
