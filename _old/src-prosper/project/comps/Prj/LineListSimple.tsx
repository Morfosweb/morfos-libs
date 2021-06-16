// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

// ----------- import Internal
import { UseIcoMoon, useStl } from '../../../config/useMorfos';

type Props = {
  info: {
    itemId: string;
    icon: string;
    line: {
      title: string;
      desc1: string;
      desc2: string;
      desc3: string;
    };
  };
};

export default (props: Props) => {
  // ----------- set Params
  const { icon, line, itemId } = props.info;

  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- set Router
  const btnGoToItem = () =>
    dispatch({ type: 'C1_GoToActProfile', value: { clientId: itemId } });
  return (
    <TouchableOpacity onPress={btnGoToItem}>
      <View style={stl01}>
        <UseIcoMoon name={icon} size={30} color={'#2A576B'} />
        <View style={stl02}>
          <Text style={stl03}>{line.title}</Text>
          <Text style={stl04}>{line.desc1}</Text>
          <Text style={stl04}>{line.desc2}</Text>
          <Text style={stl04}>{line.desc3}</Text>
        </View>
        <View style={stl05}>
          <UseIcoMoon name="chevron-right" size={28} color={'#2A576B'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// #region :: STYLEs *********

const stl01 = [useStl.card, useStl.flexRow, useStl.flexBetween];
const stl02 = [useStl.flex2, { paddingLeft: 20 }];
const stl03 = [useStl.txTitleCard];
const stl04 = [useStl.txSubTitleCard];
const stl05 = [{ marginRight: -10 }];

// #endregion *********
