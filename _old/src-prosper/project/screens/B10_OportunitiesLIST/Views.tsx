// ----------- import Packs
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// ----------- import Internals
import { UseIcoMoon, useStl } from '../../../config/useMorfos';

export const ItemView = ({ info }) => {
  const { item } = info;
  return (
    <View style={stlItemView}>
      <Text style={stlItemText}>{item.name}</Text>
    </View>
  );
};

export const NoItemView = () => {
  return <Text>No Item</Text>;
};

export default ({ children }) => {
  return (
    <View style={stlBodyView}>
      <View style={stlPadContent}>
        <View style={stlView01STYLE}>
          <ScrollView style={stlScroll01STYLE}></ScrollView>
        </View>

        <TouchableOpacity style={stlView08STYLE}>
          <Text style={stlTxt01STYLE}>TESTE1</Text>
          <Text style={stlTxt02STYLE}>TESTE2</Text>
          <Text style={stlTxt02STYLE}>TESTE3</Text>
          <Text style={stlTxt03STYLE}>TESTE4</Text>
        </TouchableOpacity>

        <View style={{ marginRight: -10 }}>
          <UseIcoMoon name="chevron-right" size={28} color={'#2A576B'} />
        </View>
      </View>
      <View style={stlView09STYLE}>
        <TouchableOpacity
          style={useStl.pad === true ? stlView05STAR : stlView06STAR}
          onPress={() => onPress(item)}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

// #region :: STYLEs *********

// ----------- Set Oportunities
const stlBodyView = [useStl.flex1];
const stlPadContent = [useStl.pad(30, 100)];

// ----------- Set Item
const stlItemView = [useStl.flex1];
const stlItemText = [useStl.text];

// ----------- Set Style
const stlView01STYLE = [useStl.flexMaster, useStl.whitePage];
const stlScroll01STYLE = [useStl.scrollView];
const stlView08STYLE = [useStl.flex2, { paddingLeft: 20 }];
const stlView09STYLE = {
  shadowColor: '#000',
  shadowOpacity: 0.3,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 1 },
  backgroundColor: '#fff',
  zIndex: -1,
  height: 55,
  width: '100%',
  position: 'relative',
  bottom: 20,
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
  flexDirection: 'row',
};
const stlTxt01STYLE = [useStl.txTitleCard];
const stlTxt02STYLE = [useStl.txSubTitleCard, { marginTop: -3 }];
const stlTxt03STYLE = [useStl.txSubTitleCard, { fontSize: 11.4 }];

// ----------- Set Star
const stlView05STAR = [
  {
    alignItems: 'center',

    justifyContent: 'flex-end',
    paddingBottom: 26,
    backgroundColor: '#2a576b',
    width: 30,
    height: 84,
    position: 'absolute',
    top: -6,
    right: 40,
  },
];
const stlView06STAR = [
  {
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'flex-end',
    paddingBottom: 26,
    width: 30,
    height: 84,
    position: 'absolute',
    top: -6,
    right: 40,
  },
];

// #endregion *********
