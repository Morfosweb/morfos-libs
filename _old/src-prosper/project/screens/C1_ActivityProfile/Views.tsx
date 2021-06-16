// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// ----------- import Internals
import { UseIcoMoon, useStl } from '../../../config/useMorfos';

export const ClientView = ({ info }) => {
  const { nomeDaEmpresa, nomeFantasia, cidade, foneDeContato } = info;
  return (
    <View style={[stlView03CLIENT]}>
      <View style={stlView04CLIENT}>
        <Text style={stlTxt01CLIENT}>Cliente</Text>
      </View>

      <View style={stlView05CLIENT}>
        <UseIcoMoon name="user" size={42} color={'#333'} />
        <View style={stlView06CLIENT}>
          <View style={stlView07CLIENT}>
            <Text style={stlTxt02CLIENT}>{nomeDaEmpresa}</Text>
            <Text style={stlTxt03CLIENT}>{nomeFantasia}</Text>
            <Text style={stlTxt04CLIENT}>{cidade}</Text>
            <Text style={stlTxt04CLIENT}>{foneDeContato}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <UseIcoMoon name="edit" size={22} color={'#999'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const OpportunityCardView = ({ children, info }) => {
  const { toggle } = info;
  return (
    <View style={[stlView03CLIENT]}>
      <TouchableOpacity style={stlView04CLIENT} onPress={toggle}>
        <Text style={stlTxt01CLIENT}>Oportunidades</Text>
        <UseIcoMoon name="minus-square" size={22} color={'#999'} />
      </TouchableOpacity>
      {children}
    </View>
  );
};

export const OpportunityItemView = () => {
  return (
    <View style={stlView04bCLIENT}>
      <View style={[stlView05CLIENT]}>
        <View style={stlView06CLIENT}>
          <View style={stlView07CLIENT}>
            <Text style={stlTxt02CLIENT}></Text>
            <Text style={stlTxt03CLIENT}>12/01/2020</Text>
            <Text style={stlTxt04CLIENT}>
              Probabilidade de venda: baixa/ Produto: Trator 6X2/ Valor Total R$
              250.000,00
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <UseIcoMoon name="edit" size={22} color={'#999'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <UseIcoMoon name="trash" size={22} color={'#999'} />
        </TouchableOpacity>
      </View>
      <View style={stlView04CLIENT}>
        <Text style={stlTxt01CLIENT2}>Oportunidade</Text>
        <UseIcoMoon name="hands" size={25} color={'#13be69'} />
      </View>
    </View>
  );
};

export const ActivityCardView = ({ children, info }) => {
  const { toggle } = info;
  return (
    <View style={[stlView03CLIENT]}>
      <TouchableOpacity style={stlView04CLIENT} onPress={toggle}>
        <Text style={stlTxt01CLIENT}>Atividades</Text>
        <UseIcoMoon name="minus-square" size={22} color={'#999'} />
      </TouchableOpacity>
      {children}
    </View>
  );
};

export const ActivityItemView = () => {
  return (
    <View style={stlView04bCLIENT}>
      <View style={stlView05CLIENT}>
        <View style={stlView06CLIENT}>
          <View style={stlView07CLIENT}>
            <Text style={stlTxt02CLIENT}></Text>
            <Text style={stlTxt03CLIENT}>12/01/2020</Text>
            <Text style={stlTxt04CLIENT}>
              Probabilidade de venda: baixa/ Produto: Trator 6X2/ Valor Total R$
              250.000,00
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <UseIcoMoon name="edit" size={22} color={'#999'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <UseIcoMoon name="trash" size={22} color={'#999'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ({ children }) => {
  return <View style={stlProfileView}>{children}</View>;
};

// #region :: STYLEs *********

// ----------- Set Profile
const stlProfileView = [useStl.flex1, { marginHorizontal: 20 }];

// ----------- Set Client
const stlView03CLIENT = [useStl.cardMask];
const stlView04CLIENT = [
  useStl.itemAccordion,
  useStl.flexBetween,
  useStl.flexRow,
  { paddingHorizontal: 20 },
];
const stlView06CLIENT = [useStl.flexRow, useStl.flex2];
const stlView07CLIENT = { paddingHorizontal: 20, flex: 1 };
const stlView04bCLIENT = [useStl.cardMask, { margin: 10 }];
const stlView05CLIENT = [
  useStl.flexCard,
  useStl.flexRow,
  {
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'flex-start',
  },
];
const stlTxt01CLIENT = [useStl.txTitleCard, useStl.txCenter, useStl.flex2];
const stlTxt01CLIENT2 = [
  useStl.txTitleCard,
  useStl.FlexRow,
  useStl.flexWrap,
  { fontSize: 13, color: '#13be69' },
];
const stlTxt02CLIENT = [useStl.txTitleProfile];
const stlTxt03CLIENT = [useStl.flex1];
const stlTxt04CLIENT = [stlTxt03CLIENT, { color: '#999' }];

// #endregion *********
