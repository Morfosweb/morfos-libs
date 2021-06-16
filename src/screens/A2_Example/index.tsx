// ---------- import Packs
// import { goTo, setScreen } from '@morfos/screens';
import { goTo, setScreen } from '../../../lib/screens';

// ---------- import Internals

// ----------- set Function Component
const Screen = () => {
  const toA1 = () => goTo('A1');
  const toMyPF = () => goTo('myPF');

  return (
    <div>
      <h1>Hello A2</h1>

      <br />
      <button onClick={toA1}>Ir para A1</button>
      <br />
      <button onClick={toMyPF}>Ir para myPF</button>
    </div>
  );
};

// ----------- set Info Screen
setScreen({
  key: 'A2',
  component: Screen,
  // path: 'exampleA2',
});

// ----------- set Export Default
export default Screen;
