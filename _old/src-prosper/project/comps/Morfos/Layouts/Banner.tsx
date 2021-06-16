// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// ----------- import Internals
import { useData, useStl } from '../../../../config/useMorfos';
import src1 from '../../../images/title_bar.png';
import src2 from '../../../images/grad.png';
import { useDispatch } from 'react-redux';

// #region :: STYLEs *********

const stlBodyView = [
  useStl.flexRow,
  useStl.flexBetween,
  useStl.pad(0, 80),
  {
    width: '100%',
    height: 130,
    overflow: 'hidden',
    backgroundColor: '#29450F',
  },
];
const stlImg = [
  {
    width: '100%',
    height: 175,
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
];
const stlRow = [useStl.flexRow];
const stlImgSmall = [
  { width: 24, height: 18, borderRadius: 3, marginRight: 5 },
];

const stlTitle1 = [useStl.txtPrimaryInverse, { fontSize: 18 }];
const stlTitle2 = [useStl.txtPrimaryInverse, { fontSize: 14, zIndex: 2 }];
const stlBtn = [
  useStl.btn,
  useStl.btnPrimary,
  useStl.btnMedium,
  { overflow: 'hidden' },
];

// #endregion *********

export default () => {
  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- set Data
  const btnLabel = useData('baseRoute.currScInfo.layout.btn');
  const actionADD = useData('baseRoute.currScInfo.layout.actionADD');

  // ----------- set Btns
  const btnAdd = () => dispatch({ type: actionADD });

  return (
    <View style={stlBodyView}>
      <Image source={src1} style={stlImg} />

      <CondTitles />

      {btnLabel && (
        <TouchableOpacity style={stlBtn} onPress={btnAdd}>
          <Text style={stlTitle2}>{btnLabel}</Text>
          <Image source={src2} style={stlImg} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const CondTitles = () => {
  const currShop = useData('baseRoute.currShop');
  const title = useData('baseRoute.currScInfo.layout.title');
  const desc = useData('baseRoute.currScInfo.layout.desc');
  return (
    <View>
      {currShop ? (
        <>
          <Text style={stlTitle1}>Lista de Produtos</Text>
          <View style={stlRow}>
            <Image
              source={{
                uri: currShop.imgUrl,
              }}
              style={stlImgSmall}
            />
            <Text style={stlTitle2}>{currShop.name}</Text>
          </View>
        </>
      ) : (
        <>
          <Text style={stlTitle1}>{title}</Text>
          <Text style={stlTitle2}>{desc}</Text>
        </>
      )}
    </View>
  );
};
