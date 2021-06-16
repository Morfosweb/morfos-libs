// ----------- import Packs
import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import * as Font from 'expo-font';

// ----------- import Internals
import icomoon from '../../icoMoon/icomoon.ttf';

export default ({ children }) => {
  const condIcon = ExpoIcoMoon(children);
  const condChildren =
    Platform.OS === 'web' ? condIcon : <CondMobile pass={condIcon} />;

  return condChildren;
};

const ExpoIcoMoon = children => {
  // ----------- set Effects
  const fxLoadFont = () => {
    Font.loadAsync({ icomoon }).then(() => setShow(true));
  };

  // ----------- set Hooks
  const [sttShow, setShow] = React.useState(false);
  React.useEffect(fxLoadFont, []);

  return sttShow ? children : null;
};

const CondMobile = ({ pass }) => {
  const condPaddin = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

  return (
    <SafeAreaView style={{ paddingTop: condPaddin, flex: 1 }}>
      {pass}
    </SafeAreaView>
  );
};
