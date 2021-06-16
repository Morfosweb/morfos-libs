// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// ----------- import Internals
import { useStl, UseIcoMoon } from '../../../../config/useMorfos';
import { FloatOptions } from '../..';

// #region :: STYLEs *********
const navHeight = { height: 50 };
const stlSideMenu = [useStl.rightBar, useStl.shadowRgtBar];

// --- NavBar
const stlNav = [
  useStl.flexRow,
  useStl.border(0, 0, 2, 0, '#eee'),
  navHeight,
  { zIndex: 10 },
];
const stlLeftBox = [useStl.flex1, useStl.flexCenter];
const stlCenterBox = [useStl.flex6, { paddingLeft: 10 }];
const stlRightBox = [useStl.flex1, useStl.flexCenter];

// --- Content
const stlChildren = [useStl.pad20];
const stlSmallTitle = [{ fontSize: 10, color: '#999' }];
const stlTitle = [{ fontSize: 11, color: '#333', fontWeight: 'bold' }];

// #endregion *********

export default ({ children }) => {
  const showRight = true;

  const condShow = showRight === true;

  return (
    condShow && (
      <View style={stlSideMenu}>
        <MenuNav />
        <ScrollView style={stlChildren}>{children}</ScrollView>
      </View>
    )
  );
};

const MenuNav = () => {
  return (
    <View style={stlNav}>
      <TouchableOpacity style={stlLeftBox}>
        <UseIcoMoon name={'left'} size={18} color={'#333'} />
      </TouchableOpacity>
      <View style={stlCenterBox}>
        <Text style={stlSmallTitle}>Formulário de</Text>
        <Text style={stlTitle}>CADASTRO DE SUPERMERCADO</Text>
      </View>
      <View style={stlRightBox}>
        <FloatOptions />
      </View>
    </View>
  );
};
