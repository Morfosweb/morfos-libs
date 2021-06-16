// ----------- import Packs
import React from 'react';
import { View, Text } from 'react-native';

// ----------- import Internals
import { IptPicker, IptTxt } from '../..';
import { useData, useStl } from '../../../../config/useMorfos';

// #region :: STYLEs *********
const stlBottomSpace = [useStl.mgB20];
const stlVar = [
  {
    backgroundColor: '#f6f6f6',
    borderRadius: 4,
    marginTop: 20,
    padding: 10,
  },
];
const stlRowCtr = [useStl.flexRow];
const stlRow = [{ flexDirection: 'row' }];
const stlSpaceCol = [{ flex: 1, marginRight: 10 }];
const stlItem = [
  {
    flex: 1,
    height: 30,
  },
];
const stlFlex1 = [{ flex: 1 }];

// TXTs
const stlSmallTxt = [{ fontSize: 10 }];
// #endregion *********

export default ({ itemId }) => {
  // ---------- set Cond Return
  const typeAccount = useData('baseAuthUser.typeAccount');
  const isAdm = typeAccount === 'adm1';

  const condReturn = isAdm ? (
    <CompAdm itemId={itemId} />
  ) : (
    <CompShop itemId={itemId} />
  );

  return condReturn;
};

const CompAdm = ({ itemId }) => {
  return (
    <View style={stlRow}>
      <View style={stlSpaceCol}>
        <IptPicker
          infoData={`C2.forms.iptsInfo.variation.${itemId}.typeName`}
        />
      </View>
      <View style={stlFlex1}>
        <IptTxt infoData={`C2.forms.iptsInfo.variation.${itemId}.typeValue`} />
      </View>
    </View>
  );
};

const CompShop = ({ itemId }) => {
  // ---------- set Cond Data
  const currList = useData('C2.infoShopPF.infoVar');
  const item = currList[itemId];

  return (
    <View style={stlVar}>
      <View style={stlRowCtr}>
        <View style={stlItem}>
          <Text style={stlSmallTxt}>Tipo</Text>
          <View>
            <Text>{item.type}</Text>
          </View>
        </View>

        <View style={stlItem}>
          <Text style={stlSmallTxt}>Valor</Text>
          <View>
            <Text>{item.value}</Text>
          </View>
        </View>
      </View>
      <IptTxt infoData={`C2.forms.iptsInfo.prices.${itemId}`} />
    </View>
  );
};
