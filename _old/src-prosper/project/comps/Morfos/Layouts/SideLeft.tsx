// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import {
  useStl,
  UseIcoMoon,
  useRouter,
  useData,
} from '../../../../config/useMorfos';

// #region :: STYLEs *********

const stlSideMenu = [
  useStl.leftBar,
  useStl.pad(20, 0),
  {
    backgroundColor: '#fff',
    height: '100%',
  },
];
const stlItem = [useStl.flexRow, useStl.pad(10, 20)];
const stlLabel = [{ paddingLeft: 6 }];

// #endregion *********

export default () => {
  // ---------- set Data
  const path = useData('baseRoute.path');
  const arrMenu = useData('comps.sideLeft.items');

  // ---------- set Hooks
  const { callRouter } = useRouter();
  const dispatch = useDispatch();

  // ---------- set Itens Menu
  const ItemsList = arrMenu.map(item => {
    const itemMenu = item.layout;
    const goTo = item.path;

    const logout = !goTo;
    const condGoTo = () => {
      if (logout) {
        dispatch({ type: 'comps_Logout' });
      } else {
        callRouter(goTo);
      }
    };

    const condActiveMenu = item.path === path;
    const condColor = condActiveMenu ? '#66cc66' : '#444';

    return (
      <TouchableOpacity style={stlItem} onPress={() => condGoTo()}>
        <UseIcoMoon name={itemMenu.icon} size={20} color={condColor} />
        <Text style={[stlLabel, { color: condColor }]}>{itemMenu.title}</Text>
      </TouchableOpacity>
    );
  });

  return <View style={stlSideMenu}>{ItemsList}</View>;
};
