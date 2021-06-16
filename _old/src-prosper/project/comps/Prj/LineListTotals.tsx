// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { widthPercentageToDP } from '../../../config/styles';

// ----------- import Internal
import { UseIcoMoon, useStl } from '../../../config/useMorfos';

interface Info {
  itemsInfo: {
    title: string;
    desc: string;
  };
}

export default ({ itemsInfo }: Info) => {
  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- set Btn
  const btn = () => dispatch({ type: 'comps_setFilterList', value: 'stars' });

  return (
    <TouchableOpacity style={stlView04} onPress={btn}>
      <UseIcoMoon name="align-left" size={30} color={'#2A576B'} />
      <View style={stl02SOLDS}>
        <Text style={stl03SOLDS}>{itemsInfo.title}</Text>
      </View>
      <Text style={stlText01}>{itemsInfo.desc}</Text>
    </TouchableOpacity>
  );
};

// #region :: STYLEs *********

const stlView04 = [
  useStl.card,
  useStl.flexCenter,
  { width: widthPercentageToDP('40%'), height: 150 },
];

const stl02SOLDS = [useStl.flex2];
const stl03SOLDS = [useStl.txTitleCard, useStl.txCenter];

const stlText01 = [useStl.txSubTitleCard, useStl.txCenter, { marginTop: 10 }];

// #endregion *********
