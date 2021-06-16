// ----------- import Packs
import React from 'react';
import { View, Text } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../../config/useMorfos';

// #region :: STYLEs *********

const stlCard = [useStl.cardItemList, useStl.flexRow];

// #endregion *********

export default ({ children }) => {
  return (
    <View style={stlCard}>
      <Text>Nenhum item encontrado</Text>
    </View>
  );
};
