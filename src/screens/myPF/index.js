import { goTo, setScreen } from '../../../lib/screens';

// ----------- set Function Component
const Screen = () => {
  const toA1 = () => goTo('A1');
  const toA2 = () => goTo('A2');

  return (
    <div>
      <Top />
      <h1>my PF</h1>
      Carlos Alberto
      <br />
      <button onClick={toA1}>Ir para A1</button>
      <br />
      <button onClick={toA2}>Ir para A2</button>
      <Down />
    </div>
  );
};
const Top = () => {
  return <div>Navbar</div>;
};
const Down = () => {
  return <div>Bottom Bar</div>;
};

// ----------- set Info Screen
setScreen({
  key: 'myPF',
  component: Screen,

  // path: 'exampleA2',
});
