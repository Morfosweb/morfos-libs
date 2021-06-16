// ---------- import Packs
// import { InitData } from '@morfos/renders';
import { InitData, InitFunction } from '../../../lib/renders';

// import { setScreen } from '@morfos/screens';
import { goTo, setScreen } from '../../../lib/screens';

// ---------- import Internals
import { prodsList } from './helpers';

// ----------- set Function Component
const Screen = () => {
  const toA2 = () => goTo('A2');
  const toMyPF = () => goTo('myPF');

  return (
    <InitFunction setFunction={prodsList}>
      <InitData setData={{ A1: { test: 'test' } }}>
        <div>
          <h1>Hello A1</h1>

          <br />
          <button onClick={toA2}>Ir para A2</button>
          <br />
          <button onClick={toMyPF}>Ir para myPF</button>
        </div>
      </InitData>
    </InitFunction>
  );
};

// ----------- set Info Screen
setScreen({
  key: 'A1',
  component: Screen,

  // path: 'signinA1',
});
