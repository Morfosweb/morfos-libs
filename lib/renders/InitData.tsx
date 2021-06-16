// ---------- import Packs
// import { setData as setCtData } from '@morfos/central-data';
import { setData as setCtData } from '../central-data';

// ---------- import Internals
import { PropsDataT } from './types';
import InitFunction from './InitFunction';

export default ({ children, setData }: PropsDataT) => {
  const dataFunction = () => setCtData(setData);
  return <InitFunction setFunction={dataFunction}>{children}</InitFunction>;
};
