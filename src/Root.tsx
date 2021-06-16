// ----------- import Packs
// import { Connect } from '@morfos/central-data';
import { Connect } from '../lib/central-data';
// import { Router } from '@morfos/screens';
import { Router } from '../lib/screens';

// ---------- set Default Component
export default () => (
  <Connect>
    <Router folder={'/src/screens'} setHome={'A1'} />
  </Connect>
);
