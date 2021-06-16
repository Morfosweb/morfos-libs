// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../../config/useMorfos';

export default ({ onPress, children }) => {
  const stlView = [useStl.flexCenter];
  const stlBtn = [useStl.btn, useStl.bgPrimary, useStl.btnMedium];
  const stlBtnTxt = [useStl.txtPrimaryInverse];

  return (
    <View style={stlView}>
      <TouchableOpacity style={stlBtn} onPress={onPress}>
        <Text style={stlBtnTxt}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};
