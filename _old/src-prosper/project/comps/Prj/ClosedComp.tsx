// ----------- import Packs
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

// ----------- import Internals
import { UseIcoMoon, useStl } from '../../../config/useMorfos';

// ----------- set Default
export default ({ info, icon = false }) => {
  // ----------- set Props
  const { toggle = false, title } = info;

  // ----------- set Conditional Component
  const CondComp: any = toggle ? TouchableOpacity : View;

  // ----------- set Return
  return (
    <CondComp style={stlBtnClose} onPress={toggle}>
      <View style={stlViewClosed}>
        <Text style={stlTxtTitle}>{title}</Text>
        {icon && <UseIcoMoon name="plus-square" size={22} color={'#999'} />}
      </View>
    </CondComp>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

// Toggle Item
const stlBtnClose = [useStl.card];
const stlViewClosed = [useStl.flexRow, useStl.flexBetween];
const stlTxtTitle = [useStl.txTitleCard, useStl.txCenter, useStl.flex2];

// ---------------
// #endregion
// ***************************************
