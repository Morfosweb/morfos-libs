// ----------- import Packs
import React from 'react';
import { View, Text } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';

export default ({ info }) => {
  return (
    <View style={stlBodyView}>
      <Text style={stlTitleTxt}>{info.content.title}</Text>

      <Text style={stlSubTitleTxt}>{info.content.subTitle}</Text>

      <View style={stlDescView}>
        <Text style={stlDescTxt}>{info.content.description}</Text>
      </View>
    </View>
  );
};

// #region :: STYLEs *********

const stlBodyView = [
  useStl.flex1,
  useStl.pad20,
  useStl.bgSc,
  useStl.flexTopCenter,
];
const stlTitleTxt = [useStl.txtTitleScreen];
const stlSubTitleTxt = [useStl.txtSubTitleCard];
const stlDescView = [{ width: 200 }];
const stlDescTxt = [useStl.txtBase, useStl.txtCenter];

// #endregion *********
