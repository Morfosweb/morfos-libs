// ----------- import Packs
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

// ----------- import Internals
import { UseIcoMoon, useStl } from '../../../config/useMorfos';
import { LineListSimple } from '../../comps';

export const B11_NoItemView = () => {
  // ----------- set Return
  return <Text style={{ fontSize: 18 }}>Não tem nenhum item</Text>;
};

export const B11_ItemView = ({ info }) => {
  // ----------- set Params
  const { item } = info;

  // ----------- set Return
  return (
    <LineListSimple
      info={{
        itemId: item.docId,
        icon: 'user',
        line: {
          title: item.nomeDaEmpresa,
          desc1: item.nomeFantasia,
          desc2: '',
          desc3: '',
        },
      }}
    />
  );
};

export default ({ children }) => {
  return (
    <View style={stlSearchView}>
      <View style={stlPadContent}>{children}</View>
    </View>
  );
};

export function FilterView({ info }) {
  const { iptGetSearch, iptValue, btnClear } = info;
  // ----------- set Return
  return (
    <View style={stlSearch03}>
      <UseIcoMoon name="chevron-left" size={25} color="#2A576B" />
      <TextInput
        style={stlSearchComplete}
        placeholder={'Buscar'}
        onChangeText={iptGetSearch}
        value={iptValue || ''}
      />
      <View style={stlSearch06}>
        <TouchableOpacity onPress={btnClear}>
          <UseIcoMoon name="x-square" size={25} color="#2A576B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// #region :: STYLEs *********

// ----------- set Search
const stlSearchView = [useStl.flex1];
const stlPadContent = [useStl.pad(30, 100)];
const stlSearchComplete = [{ marginLeft: 5, fontSize: 20, width: '85%' }];
const stlSearch03 = [
  useStl.flexRow,
  useStl.flexBetween,
  useStl.cardMask,
  { height: 50, margin: 20, top: 5, width: '100%' },
];
const stlSearch06 = { marginRight: 10 };

// #endregion *********
