// ----------- import Packs
import { View, Text } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../../config/useMorfos';

// ----------- set Default
export default () => {
  // ----------- set Return
  return (
    <View style={stlCard}>
      <Text>Nenhum item encontrado</Text>
    </View>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

const stlCard: any = [useStl.cardItemList, useStl.flexRow];

// ---------------
// #endregion
// ***************************************
