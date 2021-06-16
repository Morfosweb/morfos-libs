// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../../config/useMorfos';

// #region :: STYLEs *********

const stlTitleTxt = [useStl.txtTitleScreen];

// ----------- set Counter
const stlCounterView = [useStl.flexCenter, useStl.flexColumn, { margin: 20 }];
const stlCounterBase = [
  useStl.flexCenter,
  { margin: 10, width: 40, heigth: 20, borderRadius: 4 },
];
const stlBtnDecView = [...stlCounterBase, useStl.bgTertiary];
const stlBtnIncView = [...stlCounterBase, useStl.bgPrimary];
const stlCountSymbolText = [
  { fontSize: 16, color: 'white', alignText: 'center' },
];

// #endregion *********

export default () => {
  const [sttCount, setCount] = React.useState(0);

  // ----------- set Btns
  const btnIncrement = () => setCount(sttCount + 1);
  const btnDecrement = () => sttCount > 0 && setCount(sttCount - 1);

  return (
    <View style={stlCounterView}>
      <Text style={stlTitleTxt}>{`TOTAL: ${sttCount}`}</Text>
      <View style={useStl.flexRow}>
        <TouchableOpacity style={stlBtnDecView} onPress={btnDecrement}>
          <Text style={stlCountSymbolText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stlBtnIncView} onPress={btnIncrement}>
          <Text style={stlCountSymbolText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
