// ----------- import Packs
import { Platform, SafeAreaView } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// ----------- import Packs
import { useData } from '../central-data';
// import { useData } from '@morfos/central-data';
import { CondChildren, InitData, InitFunction } from '../renders';
// import { InitData } from '@morfos/renders';

// ----------- import Internals
import dynMods from './dynMods';
import WebRoute from './WebRoute';

// ----------- set Types
type RouterT = { setHome: string; folder: string };
type ChangeFolderT = (folder: string) => any;

// ----------- import Internals
const setPath: ChangeFolderT = folder => ({
  dev: { screens: { selected: folder } },
});

// ----------- default Component
export default ({ setHome, folder }: RouterT) => {
  // ----------- set Data
  const selected = useData(`dev.screens.selected`);
  const CurrScreen = useData(`dev.screens.scInfo.${selected}.component`);

  // ----------- set PlatForm
  const condWeb = Platform.OS === 'web';
  const Component = condWeb ? WebRoute(CurrScreen) : CurrScreen;

  // ----------- set Component
  const Router = () => (CurrScreen ? <Component /> : <></>);
  const readFolders = () => dynMods(folder);

  // ----------- set Return
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
