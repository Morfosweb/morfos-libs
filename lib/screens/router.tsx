// ----------- import Packs
import { useData, ObjPropsT } from '../central-data';
// import { useData, ObjPropsT } from '@morfos/central-data';
import { InitData, InitFunction } from '../renders';
// import { InitData } from '@morfos/renders';
// ----------- import Internals
import dynMods from './dynMods';

// ----------- set Types
type RouterT = { home: string; path: string };
type ChangePathT = (path: string) => (ctData: ObjPropsT) => any;

// ----------- import Internals
const setPath: ChangePathT = path => ctData => ({
  screens: {
    ...ctData.screens,

    selected: path,
  },
});

export default ({ home, path }: RouterT) => {
  const selected = useData(`screens.selected`);
  const CurrScreen = useData(`screens.scInfo.${selected}.component`);
  const Router = () => (CurrScreen ? <CurrScreen /> : <></>);

  return (
    <InitFunction setFunction={() => dynMods(path)}>
      <InitData setData={setPath(home)}>
        <Router />
      </InitData>
    </InitFunction>
  );
};
