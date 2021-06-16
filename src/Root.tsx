// ----------- import Packs
// import { Connect } from '@morfos/central-data';
import { Connect } from '../lib/central-data';
// import { Router } from '@morfos/screens';
import { Router } from '../lib/screens';

// ----------- import Internals
// import { scDirectories } from './screens';
// console.log({ scDirectories });

// ---------- set Default Component
export default () => (
  <Connect>
    <Router path={'/src/screens'} home={'A1'} />
  </Connect>
);
