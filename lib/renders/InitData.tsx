// ---------- import Packs
// import { setData as setCtData } from '@morfos/central-data';
import { setData as setCtData } from '../central-data';

// ---------- import Internals
import { PropsSetDataT } from './types';
import InitFunction from './InitFunction';

// ---------- default Function
export default ({ children, setData }: PropsSetDataT) => {
  const dataFunction = () => setCtData(setData);
  return <InitFunction setFunction={dataFunction}>{children}</InitFunction>;
};
