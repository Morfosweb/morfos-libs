// ----------- import Packs
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';
import { Counter1, Btn1 } from '../../comps';

// #region :: STYLEs *********
const stlBodyView = [
  useStl.flex1,
  useStl.pad20,
  useStl.bgSc,
  useStl.flexTopCenter,
];
const stlTitleTxt = [useStl.txtTitleScreen];
const stlSubTitleTxt = [useStl.txtSubTitleCard];
const stlDescView = [{ width: 200 }];
const stlDescTxt = [useStl.txtBase, useStl.txtCenter];

// #endregion *********

export default ({ info }) => {
  // const content = useSelector(state => state.sttScs[info.scCode].content);
  const content = {
    title: 'title',
    subTitle: 'subTitle',
    description: 'description',
    txtBtn: 'txtBtn',
  };

  return (
    <View style={stlBodyView}>
      {/* ----------- PARTs */}
      <Text style={stlTitleTxt}>{content.title}</Text>

      <Text style={stlSubTitleTxt}>{content.subTitle}</Text>

      <View style={stlDescView}>
        <Text style={stlDescTxt}>{content.description}</Text>
      </View>

      {/* ----------- Elements */}
      <Counter1 />
      <Btn1
      // onPress={info.btnGoto}
      >
        {content.txtBtn}
      </Btn1>
    </View>
  );
};
