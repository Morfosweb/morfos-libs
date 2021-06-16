// ----------- import Packs
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

// ----------- import Internals
import { useData, UseIcoMoon, useStl } from '../../../config/useMorfos';

export const NoItemView = () => {
  // ----------- set Return
  return <Text>Não tem nenhum item</Text>;
};

export const ListView = ({ children, info }) => {
  const { btn } = info;
  // ----------- set Return
  return (
    <View style={stlBtn2Register}>
      <View>{children}</View>
      <View>
        <TouchableOpacity style={stlBtnRegister} onPress={btn.addClient}>
          <UseIcoMoon name="user" size={22} color="#333" />
          <Text style={stlTxtBtn}>{'Adicionar Novo Cliente'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ItemView = ({ info }) => {
  // ----------- set Params
  const { item, selClient } = info;

  // ----------- set Return
  return (
    <TouchableOpacity style={stlView13Register} onPress={selClient}>
      <Text style={stlTxt09Register}>{item.nomeDaEmpresa}</Text>
      <Text style={stlTxt10Register}>{item.nomeFantasia}</Text>
    </TouchableOpacity>
  );
};

export const IptView = ({ info }) => {
  const { placeholder, iptAutoComplete, iptValue } = info;
  // ----------- set Return
  return (
    <View style={stlViewRegister}>
      <TextInput
        style={stlAutoRegister}
        placeholder={placeholder}
        onChangeText={iptAutoComplete}
        value={iptValue || ''}
      />
    </View>
  );
};

export default props => {
  // ----------- set Params
  const { children } = props;

  // ----------- set Data
  const dataClient = useData('D4.selectedClient');

  const CondView = props =>
    !dataClient ? <View {...props} /> : <ScrollView {...props} />;

  // ----------- set Return

  return <CondView style={stlRegister}>{children}</CondView>;
};

// #region :: STYLEs

// ----------- set Register
const stlAutoRegister = useStl.input;
const stlRegister = [useStl.flex1, { padding: 10 }];
const stlViewRegister = [useStl.card];
const stlView13Register = [useStl.itemAccordion, { paddingHorizontal: 20 }];
const stlTxt09Register = [useStl.txBase];
const stlTxt10Register = { color: '#999' };

// ----------- set Btns
const stlBtnRegister = [useStl.pad10, useStl.flexRow, useStl.flexCenter];
const stlTxtBtn = [useStl.mgL5];
const stlBtn2Register = [
  useStl.dialogueBox,
  {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    position: 'absolute',
    zIndex: 5,
    width: '80%',
    left: 40,
    top: 84,
  },
];

// #endregion
