// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import { Card, Thumbnail, ActionList } from '../../';
import { useData, UseIcoMoon, useStl } from '../../../../config/useMorfos';
import src1 from '../../../images/div.png';

// #region :: STYLEs *********

const stlLabel = [useStl.flex1, { fontWeight: '600', paddingRight: 10 }];
const stlItem = [useStl.cardItemList, useStl.flexRow];
const stlDetail = [useStl.flex4];
const stlDiv = [{ width: 1, height: 14, marginHorizontal: 10 }];

const stlRow = [useStl.flexRow, { marginRight: 10 }];
const stlMsg1 = [{ color: '#ff0036' }];
const stlMsg2 = [{ color: '#666' }];

// #endregion *********

export default ({ infoData }) => {
  // ----------- set infoData
  const {
    content,
    currList,
    itemId,
    actionEdit,
    actionName1,
    actionName2,
  } = infoData;

  // ----------- set Data
  const item = currList[itemId];

  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- stBtns
  const goToEdit = () => dispatch({ type: actionEdit, itemId });
  const btnAct1 = () => dispatch({ type: actionName1, itemId });
  const btnAct2 = () => dispatch({ type: actionName2, itemId });

  return (
    <TouchableOpacity onPress={goToEdit}>
      <Card style={stlItem}>
        <Thumbnail src={item.imgUrl} />
        <CondDivider>
          <Text style={stlLabel}>{item.name}</Text>

          <Image source={src1} style={stlDiv} />

          <Text style={stlDetail}>{item.details}</Text>

          <Image source={src1} style={stlDiv} />
          {actionName1 && <ActionList info={content.act1} action={btnAct1} />}

          <Image source={src1} style={stlDiv} />

          {actionName2 && <ActionList info={content.act2} action={btnAct2} />}
          <CompMsg contain={item.contain} />
        </CondDivider>
      </Card>
    </TouchableOpacity>
  );
};

const CompMsg = ({ contain }) => {
  const path = useData('baseRoute.path');
  const condShow = path === 'shopProdsList';
  const condMsg = !contain ? (
    <View style={stlRow}>
      <Text style={stlMsg1}>Adicionar</Text>
      <UseIcoMoon name={'rd-right'} size={14} color={'#ff0036'} />
    </View>
  ) : (
    <View style={stlRow}>
      <Text style={stlMsg2}>Adicionado</Text>
      <UseIcoMoon name={'rd-right'} size={14} color={'#666'} />
    </View>
  );
  const returnDiv = condShow ? condMsg : null;

  return returnDiv;
};

const CondDivider = ({ children }) => {
  const condInsertDiv = children.length > 1;
  const withDiv = '';

  const withoutDiv = children;
  const returnDiv = condInsertDiv ? withoutDiv : withDiv;

  return returnDiv;
};
