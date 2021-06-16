// ----------- import Packs
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// ----------- import Internals
import { UseIcoMoon, useStl } from '../../../config/useMorfos';
import { LineListSimple, LineListTotals } from '../../comps';

export const ItemView = ({ info }) => {
  return (
    <View style={stlItemView}>
      <Text style={stlItemText}>{info.item.name}</Text>
    </View>
  );
};

export const NoItemView = () => {
  return <Text>No Item</Text>;
};

export default ({ info }) => {
  const { routes } = info;
  const arrItems1 = [
    { title: 'Total', desc: 'st' },
    { title: 'Estrelas', desc: 'st' },
    { title: 'Oportunidade', desc: 'st' },
    { title: 'Em Negociação', desc: 'st' },
    { title: 'Negócio Fechado', desc: 'st' },
    { title: 'Negócios Concluídos', desc: 'st' },
    { title: 'Venda Perdida', desc: 'st' },
  ];

  const mapItems1 = arrItems1.map((item, idx) => {
    const { title, desc } = item;
    const infoItem = {
      itemId: '',
      icon: 'align-left',
      line: {
        title: title,
        desc1: desc,
        desc2: '',
        desc3: '',
      },
    };
    return <LineListSimple key={idx} info={infoItem} />;
  });

  const arrItems2 = [
    { title: 'Total', desc: 'st' },
    { title: 'Estrelas', desc: 'st' },
    { title: 'Oportunidade', desc: 'st' },
    { title: 'Em Negociação', desc: 'st' },
    { title: 'Negócio Fechado', desc: 'st' },
    { title: 'Negócios Concluídos', desc: 'st' },
    { title: 'Venda Perdida', desc: 'st' },
  ];
  const mapItems2 = arrItems2.map((item, idx) => (
    <LineListTotals
      key={idx}
      itemsInfo={{ title: item.title, desc: item.desc }}
    />
  ));

  return (
    <View style={stlRepListView}>
      <TouchableOpacity style={stlRep01c} onPress={routes.filterOpp}>
        <UseIcoMoon name="filter" size={22} color="#666" />
        <Text style={stlRep03a}>Filtro Avançado de Oportunidades</Text>
      </TouchableOpacity>
      <View style={stlPadContent}>
        {mapItems1}

        <View style={stlColView}>{mapItems2}</View>
      </View>
    </View>
  );
};

// #region :: STYLEs *********

// ----------- set Buttons

const stlRep01c = [useStl.card, useStl.flexRow, { width: '90%' }];
const stlRep03a = [useStl.txTitleCard, { marginLeft: 10 }];

const stlRepListView = [useStl.flex1, useStl.flexCenter];
const stlPadContent = [useStl.flex1, { width: '90%' }];
const stlColView = [useStl.colView];

const stlItemView = [useStl.flex1];
const stlItemText = [useStl.text];

// #endregion *********
