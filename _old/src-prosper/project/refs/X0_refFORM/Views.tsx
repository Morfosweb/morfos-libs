// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';
import { IptImg, IptPicker, IptTxt } from '../../comps';

export default ({ info }) => {
  return (
    <View style={stlBodyView}>
      {/* */}

      <Form />

      {/* ----------- set BTNs SAVE & CANCEL */}
      <View style={stlCenter}>
        <TouchableOpacity style={stlBtnPrimary} onPress={info.btns.save}>
          <Text style={stltxtInverse}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stlBtn} onPress={info.btns.cancel}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Form = () => {
  return (
    <>
      <IptImg infoData={'X0.forms.iptsInfo.image'} />
      <IptTxt infoData={'X0.forms.iptsInfo.name'} />
      <View style={stlMgB20}>
        <IptTxt infoData={'X0.forms.iptsInfo.weight'} />
      </View>
      <IptPicker infoData={'X0.forms.iptsInfo.categ'} />
      <IptPicker infoData={'X0.forms.iptsInfo.subCateg'} />
      <View style={stlRow}>
        <View style={stlSpaceCol}>
          <IptPicker infoData={'X0.forms.iptsInfo.typeVar'} />
        </View>
        <View style={stlFlex1}>
          <IptTxt infoData={'X0.forms.iptsInfo.valueVar'} />
        </View>
      </View>
    </>
  );
};

// #region :: STYLEs *********

const stlBodyView = [useStl.flex1, { padding: 10 }];
const stlRow = [{ flexDirection: 'row' as const }];
const stlMgB20 = [useStl.mgB20];
const stlSpaceCol = [{ flex: 1, marginRight: 10 }];
const stlFlex1 = [{ flex: 1 }];

// BTNs
const stlCenter = [useStl.flexCenter, { marginVertical: 40 }];
const stlBtn = [useStl.btn, useStl.btnMedium, { width: 110, marginBottom: 5 }];
const stlBtnPrimary = [stlBtn, useStl.btnPrimary];
const stltxtInverse = [useStl.txtPrimaryInverse];

// #endregion *********
