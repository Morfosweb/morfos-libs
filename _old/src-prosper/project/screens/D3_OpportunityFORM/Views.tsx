// ----------- import Packs
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';
import { IptPicker, IptTxt } from '../../comps';
import { UseDatePicker } from '../../comps';

export const OpportunityLineView = ({ info }) => {
  const { openOppForm } = info;
  return (
    <TouchableOpacity onPress={openOppForm}>
      <Text>Criar uma nova Oportunidade</Text>
    </TouchableOpacity>
  );
};

export const MsgErrorView = () => {
  return (
    <Text style={{ color: 'red' }}>Preencha todos os campos obrigatórios!</Text>
  );
};

export default ({ info, children }) => {
  const { btns } = info;
  return (
    <View style={stlFormView}>
      <Text style={stlFormTitle}>Oportunidade</Text>
      <UseDatePicker infoData={'D3.forms.iptsInfo.dateOpportunity'} />

      <IptPicker infoData={'D3.forms.iptsInfo.options_probabilidadeVenda'} />
      <IptPicker
        infoData={'D3.forms.iptsInfo.options_probabilidadeVenda_starred'}
      />

      <IptPicker infoData={'D3.forms.iptsInfo.opportunity_products_category'} />
      <IptTxt infoData={'D3.forms.iptsInfo.opportunity_products'} />

      <IptTxt infoData={'D3.forms.iptsInfo.unit_value_opportunity'} />
      <IptTxt infoData={'D3.forms.iptsInfo.amount_opportunity'} />
      <IptTxt infoData={'D3.forms.iptsInfo.total_amount_opportunity'} />

      {/* <IptPicker infoData={'D3.forms.iptsInfo.status'} /> */}
      <IptTxt infoData={'D3.forms.iptsInfo.observation'} />

      <UseDatePicker infoData={'D3.forms.iptsInfo.dateEndOpportunity'} />

      {/* <IptPicker infoData={'D3.forms.iptsInfo.options_actions_opportunity'} /> */}

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
