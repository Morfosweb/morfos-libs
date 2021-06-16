// ---------- import Packs
import { Provider } from 'react-redux';

// ---------- import Internals
import { initCentralData } from './initCentralData';
import { PropsT } from './types';

// ---------- export Default Function
export default (props: PropsT) => {
  // ---------- set Properties
  const { children } = props;

  // ---------- set Return
  return <Provider store={initCentralData}> {children}</Provider>;
};
