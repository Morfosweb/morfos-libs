import { setScreen } from '../../../lib/screens';

// ----------- set Function Component
const Screen = () => {
  return (
    <div>
      <Top />
      Carlos Alberto
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
  key: 'myPf',
  component: Screen,
});
