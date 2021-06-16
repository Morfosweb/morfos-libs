// ----------- import Packs
import React from 'react';
import { Text, View } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';

export const X0_ItemView = ({ info }) => {
  return (
    <View style={stlItemView}>
      <Text style={stlItemText}>{info.item.name}</Text>
    </View>
  );
};

export default ({ children }) => {
  return (
    <View style={stlBodyView}>
      <View style={stlPadContent}>
        {/* */}

        {children}

        {/* */}
      </View>
    </View>
  );
};

// #region :: STYLEs *********

const stlBodyView = [useStl.flex1];
const stlPadContent = [useStl.pad(30, 100)];

const stlItemView = [useStl.flex1];
const stlItemText = [useStl.text];
// #endregion *********
