// ----------- import Packs
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';
import { LineListTotals } from '../../comps';

export const ItemView = ({ info }) => {
  const { item } = info;
  return (
    <View style={stlItemView}>
      <Text style={stlItemText}>{item.name}</Text>
    </View>
  );
};

export const NoItemView = () => {
  return <Text>Sem Item</Text>;
};

export default ({ children, info }) => {
  const textBase =
    'Total Oportunidades: 32 / Valor Total: R$9,650,689.00 / Total Clientes: 27';
  const arrItems = [
    { title: 'Total', desc: textBase },
    { title: 'Linha VM', desc: textBase },
    { title: 'Linha F', desc: textBase },
    { title: 'Consórcio', desc: textBase },
    { title: 'Seguros', desc: textBase },
    { title: 'Semi Novos', desc: textBase },
  ];

  const mapItems = arrItems.map((item, idx) => (
    <LineListTotals itemsInfo={{ title: item.title, desc: item.desc }} />
  ));

  return (
    <View style={stlSold01}>
      <ScrollView style={stlScroll01}>
        <View style={stlSold02}>
          <View style={stlSold03}>{mapItems}</View>
        </View>
      </ScrollView>
    </View>
  );
};

// #region :: STYLEs *********

// ----------- set Sold
const stlSold01 = [useStl.flexMaster];
const stlScroll01 = [useStl.scrollView];
const stlSold02 = [useStl.pad20];
const stlSold03 = [useStl.colView];

// ----------- set Item
const stlItemView = [useStl.flex1];
const stlItemText = [useStl.text];

// #endregion *********
