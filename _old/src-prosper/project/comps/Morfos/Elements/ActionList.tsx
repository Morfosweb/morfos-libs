// ----------- import Packs
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// ----------- import Internals
import { useStl, UseIcoMoon } from '../../../../config/useMorfos';
import { primaryColor } from '../../../../config/styles';

// #region :: STYLEs *********

const stlBtn = [useStl.flexRow, { marginRight: 10 }];
const stlTxt = [{ color: primaryColor, marginBottom: 3 }];

// #endregion *********

export default ({ info, action }) => {
  return (
    <TouchableOpacity style={stlBtn} onPress={action}>
      <Text style={stlTxt}>{info}</Text>
      <UseIcoMoon name={'rd-right'} size={14} color={primaryColor} />
    </TouchableOpacity>
  );
};
