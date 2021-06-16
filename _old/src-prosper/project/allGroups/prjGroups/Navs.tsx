// ----------- import Packs
import React from 'react';
import { Platform, ScrollView, StatusBar, View } from 'react-native';

// ----------- import Internals
import { primaryColor } from '../../../config/styles';
import { Cp01, Cp02 } from '../../comps';

export default ({ children }) => {
  const CompBar = () => {
    if (Platform.OS === 'web') {
      return (
        <>
          <View style={{ position: 'fixed', width: '100%', zIndex: 10 }}>
            <Cp01 />
          </View>

          <ScrollView style={{ marginVertical: 80 }}>{children}</ScrollView>

          <View
            style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 10 }}
          >
            <Cp02 />
          </View>
        </>
      );
    }

    return (
      <>
        <Cp01 />
        <StatusBar backgroundColor={primaryColor} barStyle={'light-content'} />

        <View style={{ flex: 1 }}>{children}</View>
        <Cp02 />
      </>
    );
  };

  return <CompBar />;
};
