// ----------- import Packs
import { useData } from '../central-data';
// import { useData } from '@morfos/central-data';
import { CondChildren, InitData, InitFunction } from '../renders';
// import { InitData } from '@morfos/renders';

// ----------- import Internals
import dynMods from './dynMods';

// ----------- set Types
type RouterT = { setHome: string; folder: string };
type ChangeFolderT = (folder: string) => any;

// ----------- import Internals
const setPath: ChangeFolderT = folder => ({
  dev: { screens: { selected: folder } },
});

export default ({ setHome, folder }: RouterT) => {
  const selected = useData(`dev.screens.selected`);
  const CurrScreen = useData(`dev.screens.scInfo.${selected}.component`);
  const Router = () => (CurrScreen ? <CurrScreen /> : <></>);
  const readFolders = () => dynMods(folder);

  return (
    <InitFunction setFunction={readFolders}>
      <CondChildren dataPath="dev.screens.readAll">
        <InitData setData={setPath(setHome)}>
          <Router />
        </InitData>
      </CondChildren>
    </InitFunction>
  );
};
