// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// ----------- import Internal
import { useStl } from '../../../config/useMorfos';

export default () => {
  // ----------- set Return
  return (
    <View style={stlCenter}>
      <TouchableOpacity
        style={stlBtnPrimary}
        // onPress={info.btns.save}
      >
        <Text style={stltxtInverse}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={stlBtn}
        // onPress={info.btns.cancel}
      >
        <Text>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

// #region :: STYLEs *********

// BTNs
const stlCenter = [useStl.flexCenter, { marginVertical: 40 }];
const stlBtn = [useStl.btn, useStl.btnMedium, { width: 110, marginBottom: 5 }];
const stlBtnPrimary = [stlBtn, useStl.btnPrimary];
const stltxtInverse = [useStl.txtPrimaryInverse];

// #endregion *********
