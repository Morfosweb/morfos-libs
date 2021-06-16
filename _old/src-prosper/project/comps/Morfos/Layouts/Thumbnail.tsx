// ----------- import Packs
import React from 'react';
import { View, Image } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../../config/useMorfos';
import imgDefault from '../../../images/default.jpg';
// import { Card } from '../../';

// #region :: STYLEs *********

const stlImgContainer = [useStl.thumbnail];
const stlImg = [useStl.imgFull];

// #endregion *********

export default info => {
  const condSource = info.src ?? imgDefault;

  return (
    <View style={stlImgContainer}>
      <Image source={{ uri: condSource }} style={stlImg} />
    </View>
  );
};
