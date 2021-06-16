// ----------- import Packs
import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';
import { IptPicker, IptTxt } from '../../comps';

export default ({ info }) => {
  return (
    <ScrollView style={stlFormView01}>
      <Form info={info} />
    </ScrollView>
  );
};

const Form = ({ info }) => {
  const { btns } = info;
  return (
    <View style={stlFormViewCard}>
      <IptTxt infoData={'D1.forms.iptsInfo.nomeDaEmpresa'} />
      <IptTxt infoData={'D1.forms.iptsInfo.nomeFantasia'} />
      <IptTxt infoData={'D1.forms.iptsInfo.CNPJ'} />

      <IptPicker infoData={'D1.forms.iptsInfo.estado'} />
      <IptPicker infoData={'D1.forms.iptsInfo.cidade'} />

      <IptTxt infoData={'D1.forms.iptsInfo.rua'} />
      <IptTxt infoData={'D1.forms.iptsInfo.bairro'} />
      <IptTxt infoData={'D1.forms.iptsInfo.complemento'} />
      <IptTxt infoData={'D1.forms.iptsInfo.CEP'} />

      <IptTxt infoData={'D1.forms.iptsInfo.foneDeContato'} />
      <IptTxt infoData={'D1.forms.iptsInfo.observacoes'} />

      <View style={stlCenter}>
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
const stlFormView01 = [useStl.flexMaster, useStl.pad20];
const stlFormViewCard = [useStl.card];

// ----------- set Btns
const stlCenter = [useStl.flexCenter, { marginVertical: 40 }];
const stlBtn = [useStl.btn, useStl.btnMedium, { width: 110, marginBottom: 5 }];
const stlBtnPrimary = [stlBtn, useStl.btnPrimary];
const stltxtInverse = [useStl.txtPrimaryInverse];

// #endregion *********
