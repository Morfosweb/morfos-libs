// ----------- import Packs
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// ----------- import Internals
import { UseIcoMoon, useStl } from '../../../config/useMorfos';
import { LineListSimple } from '../../comps';

export const ItemView = ({ info: { item } }) => {
  const { nomeDaEmpresa, obs_activity, DocId } = item;
  const line = {
    title: nomeDaEmpresa,
    desc1: obs_activity,
    desc2: ``,
    desc3: ``,
  };
  return <LineListSimple info={{ icon: 'briefcase', line, itemId: DocId }} />;
};

export const NoItemView = () => {
  return <Text>No Item</Text>;
};

export default ({ children, info }) => {
  return children;
  return (
    <View style={stlActivityView}>
      <View style={stlPadContent}>
        <>
          <View style={stlView01STYLE}></View>

          <TouchableOpacity>
            <View style={stlView03COMPONENT}>
              <View style={{ position: 'absolute', left: 25 }}>
                <UseIcoMoon name="briefcase" size={30} color={'#2A576B'} />
              </View>
              <View style={stlView04COMPONENT}>
                <Text style={stlTxt01COMPONENT}>teste1</Text>
                <Text style={stlTxt02COMPONENT}>teste2</Text>
                <Text style={stlTxt03COMPONENT}>teste3</Text>
              </View>
              <View style={{ marginRight: -10 }}>
                <UseIcoMoon name="chevron-right" size={28} color={'#2A576B'} />
              </View>
            </View>
          </TouchableOpacity>
        </>

        {children}
      </View>
    </View>
  );
};

// #region :: STYLEs *********

// ----------- Set Activity
const stlActivityView = [useStl.flex1];
const stlPadContent = [useStl.pad(30, 100)];

const _STYLE = props => {};

const callToDb = () => {
  callChangeRd({ reducerName: 'Cp01', value: 'Atividades' });
  callListRd(infoActivities);
};

// ----------- set Style
const stlView01STYLE = [useStl.flexMaster, useStl.whitePage];

// ----------- set Component

const stlView03COMPONENT = [
  useStl.card,
  useStl.flexRow,
  useStl.flexBetween,
  { paddingHorizontal: 20 },
];
const stlTxt01COMPONENT = [useStl.txTitleCard];
const stlTxt02COMPONENT = [useStl.txSubTitleCard, { marginTop: -3 }];
const stlTxt03COMPONENT = [useStl.txSubTitleCard, { fontSize: 11.4 }];
const stlView04COMPONENT = [useStl.flex2, { paddingLeft: 65 }];

// #endregion *********
