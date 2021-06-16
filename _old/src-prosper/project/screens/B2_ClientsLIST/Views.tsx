// ----------- import Packs
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

// ----------- import Internals
import { UseIcoMoon, useStl } from '../../../config/useMorfos';
import { LineListSimple } from '../../comps';

export const NoItemView = () => {
  return <Text>Sem Itens</Text>;
};

export const ItemView = ({ info: { item } }) => {
  const {
    activities,
    opportunities,
    nomeDaEmpresa,
    nomeFantasia,
    cidade,
    estado,
  } = item;
  // ----------- set Conds
  const condAct = activities ? activities : '0';
  const condOpp = opportunities ? opportunities : '0';

  // ----------- set Return
  const line = {
    title: nomeDaEmpresa,
    desc1: nomeFantasia,
    desc2: `${cidade} - ${estado}`,
    desc3: `${condAct} Atividades / ${condOpp} Oportunidade`,
  };
  return <LineListSimple info={{ icon: 'user', line, itemId: item.docId }} />;
};

export const AddClientView = ({ info }) => {
  const { btn } = info;
  // ----------- set Return
  return (
    <TouchableOpacity style={stlAddClient01} onPress={btn.addClient}>
      <UseIcoMoon name="plus-circle" size={24} color={'#2A576B'} />
      <Text style={[stlAddClient03, { marginLeft: 10 }]}>Add. Cliente</Text>
    </TouchableOpacity>
  );
};

export default ({ children }) => {
  // ----------- set Return
  return (
    <ScrollView style={stlViewClient02}>
      <View style={stlViewClient01}>
        <View style={stlViewClient03}>
          {/*  */}

          {children}

          {/*  */}
        </View>
      </View>
    </ScrollView>
  );
};

// #region :: STYLEs *********

// ----------- set Clients

const stlViewClient01 = [useStl.flexMaster, useStl.whitePage, useStl.flex1];
const stlViewClient02 = [useStl.scrollView];
const stlViewClient03 = [useStl.pad20];

const stlAddClient01 = [[useStl.card, useStl.flexRow, { marginBottom: 20 }]];
const stlAddClient03 = [useStl.txTitleCard];

// #endregion *********
