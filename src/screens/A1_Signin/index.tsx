// ---------- import Packs
// import { InitData } from '@morfos/renders';
import { InitData } from '../../../lib/renders';

// import { setScreen } from '@morfos/screens';
import { setScreen } from '../../../lib/screens';

// ---------- import Internals
import { prodsList } from './helpers';

// ----------- set Function Component
const Screen = () => {
  return (
    <InitData setData={{ prj: { A1: { welcome: 'welcome' } } }}>
      <InitData
        setData={ctData => ({
          ...ctData.prj,
          prj: { A1: { ...ctData.A1, test: 'test' } },
        })}
      >
        <div>Hello A1</div>
      </InitData>
    </InitData>
  );
};

// ----------- set Info Screen
setScreen({
  key: 'A1',
  path: 'signinA1',

  component: Screen,
  groupSc: 'pub',
  condBigSc: true,

  scCode: 'A1',
});

// ----------- set Export Default
// export default Screen;
