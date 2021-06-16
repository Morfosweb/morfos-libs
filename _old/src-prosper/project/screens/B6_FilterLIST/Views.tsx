// ----------- import Packs
import React from 'react';
import { Text, View, _ScrollView } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';

export const ItemView = ({ info }) => {
  const { item } = info;
  return (
    <View style={stlItemView}>
      <Text style={stlItemText}>{item.name}</Text>
    </View>
  );
};

export const NoItemView = () => {
  return <Text>No Item</Text>;
};

export default ({ children }) => {
  return (
    <View style={stlFilterView}>
      <View style={stlPadContent}>
        <View style={stlView01Style}>
          <View style={stlView02Style}></View>
        </View>

        {children}
      </View>
    </View>
  );
};

// #region :: STYLEs *********

// ----------- set Filter
const stlFilterView = [useStl.flex1, useStl.flexCenter];
const stlPadContent = [{ width: '90%' }];

// ----------- set Item
const stlItemView = [useStl.flex1];
const stlItemText = [useStl.text];

// ----------- set Style
const stlView01Style = [useStl.flexMaster, useStl.whitePage];
const stlView02Style = [useStl.pad20];

// #endregion *********
