// ----------- import Packs
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

// ----------- import Internals
import useStl from './useStl';
import { primaryColor } from '../styles';
import { TpRElement, useData } from '.';

type Props = {
  data: string;
  children: TpRElement;
};

// ----------- set Default
export default (props: Props): any => {
  const { data, children } = props;

  // ----------- set Data
  const showValidation = useData(data);

  // ----------- set Return
  return showValidation ? children : <CompLoader {...props} />;
};

// ----------- set Loader Component
const CompLoader = props => {
  const { size = 25, color = primaryColor } = props;
  return (
    <View style={stlCenter}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

// ----------- set Styles
const stlCenter = [useStl.flexCenter, useStl.flex1];

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*

<UseInitData reducer={'C4_InitData'}>
  <UseCondLoader data={'C4.condList'}>
  
    <UseList data={'C4.productList'}>
      {(itemId, noItem) =>
        noItem ? <NoItemView /> : <ProdItem itemId={itemId} />
      }
    </UseList>
    
    <UseList data={'C4.forms.iptsArr'}>
      {itemId => <IptItem itemId={itemId} />}
    </UseList>

  </UseCondLoader>
</UseInitData>
  
*/

// ---------------
// #endregion
// ***************************************
