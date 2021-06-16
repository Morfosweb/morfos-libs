// ---------- import Packs
// import { setScreen } from '@morfos/screens';

// ---------- import Internals
import { setScreen } from '../../../../lib/screens';

// ----------- set Function Component
const Screen = () => {
  return <div>Hello A2</div>;
};

// ----------- set Info Screen
setScreen({
  key: 'A2',

  component: Screen,
  path: 'exampleA2',
  groupSc: 'pub',
  condBigSc: true,

  scCode: 'A2',
});

// ----------- set Export Default
export default Screen;
