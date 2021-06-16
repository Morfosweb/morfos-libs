// ----------- import Packs
import React from 'react';
import { Text, View, Image, TextInput, StlInputView } from 'react-native';
import { Card } from '../';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';
import src1 from '../../images/m_daisy.png';

// #region :: STYLEs *********
const stlInputView = [];
const stlInput = [
  {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 40,
    height: 45,
    top: 200,
    right: -200,
  },
];
const stlImg1 = {
  width: 0,
  height: 30,
  top: 200,
  right: -100,
};

export default ({ style }) => {
  return (
    <View>
      <View style={style} />
      <View style={stlInputView} />

      <Card style={useStl.card}>
        <Image source={src1} style={stlImg1} />
        <TextInput
          placeholder="Torta Holandesa Miss Daisy 470g"
          style={stlInput}
        />
      </Card>
    </View>
  );
};
