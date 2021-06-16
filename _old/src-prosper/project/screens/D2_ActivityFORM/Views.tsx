// ----------- import Packs
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';
import { IptPicker, IptTxt } from '../../comps';
import { UseDatePicker } from '../../comps';

export const MsgErrorView = () => {
  return (
    <Text style={{ color: 'red' }}>Preencha todos os campos obrigatórios!</Text>
  );
};

export default ({ info, children }) => {
  const { btns } = info;
  return (
    <View style={stlFormView}>
      <Text style={stlFormTitle}>Adicionar Atividade</Text>

      <UseDatePicker infoData={'D2.forms.iptsInfo.dateActivity'} />

      <IptPicker infoData={'D2.forms.iptsInfo.options_contato'} />
      <IptTxt infoData={'D2.forms.iptsInfo.obs_activity'} />

      <View style={stlCenter}>
        {children}
        <TouchableOpacity style={stlBtnPrimary} onPress={btns.save}>
          <Text style={stltxtInverse}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stlBtn} onPress={btns.cancel}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// #region :: STYLEs *********

// ----------- set Form
const stlFormView = [useStl.card];
const stlFormTitle = [useStl.txTitleCard, useStl.txCenter, useStl.flex2];

// ----------- set Btns
const stlCenter = [useStl.flexCenter, { marginVertical: 40 }];
const stlBtn = [useStl.btn, useStl.btnMedium, { width: 110, marginBottom: 5 }];
const stlBtnPrimary = [stlBtn, useStl.btnPrimary];
const stltxtInverse = [useStl.txtPrimaryInverse];

// #endregion *********
