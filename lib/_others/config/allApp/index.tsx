// ----------- import Packs
import { Platform, SafeAreaView } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// ---------- import Internals
import { UseInitData } from '../useMorfos';
import useListenResize from './useListenResize';
import useCurrSc from './useCurrSc';
import useCurrGroup from './useCurrGroup';
import useGroupSc from './useGroupSc';
import useUrlHistory from './useUrlHistory';
import useChangeTitle from './useChangeTitle';
import useUrlManualChange from './useUrlManualChange';

// ----------- set All App Screen
export default () => {
  // ----------- set Return
  return (
    <UseInitData reducer={'base_InitRoutes'}>
      <SelectRoute />
    </UseInitData>
  );
};

function SelectRoute() {
  // ----------- set Group + Screen
  const CompScreen = useCurrSc();
  const arrGroups = useCurrGroup();
  const CompGroupSc = useGroupSc(arrGroups, CompScreen);

  // ----------- set Return
  const condWeb = Platform.OS === 'web';
  const condGroup = CompGroupSc ?? null;

  const webCall = <WebRoute Comp={CompGroupSc} />;
  const expoCall = (
    <>
      <SafeAreaView style={{ flex: 1 }}>{condGroup}</SafeAreaView>
      {/* <StatusBar style="auto" /> */}
    </>
  );

  const condReturn = condWeb ? webCall : expoCall;
  return condReturn;
}

function WebRoute({ Comp }) {
  // ----------- set Resize Screen
  useListenResize();

  // ----------- set Change Url
  useUrlManualChange();
  useUrlHistory();

  // ----------- set Change Title
  useChangeTitle();

  // ----------- set Return
  return Comp;
}
