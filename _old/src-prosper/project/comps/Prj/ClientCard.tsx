// ----------- import Packs
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import {
  UseCleanOut,
  useData,
  UseIcoMoon,
  useStl,
} from '../../../config/useMorfos';

// ----------- set Type
type TpProps = {
  itemId: string;
  btnClose?: boolean;
};
// ----------- set Default
export default ({ itemId, btnClose }: TpProps) => {
  // ---------- set Data
  const item = useData('B1.clients.itemsInfo.' + itemId);

  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- set Btns
  const btns = {
    edit: () => dispatch({ type: 'D1_GoToEditClient', value: item.docId }),
    close: () => dispatch({ type: 'D4_CloseClient' }),
  };

  // ---------- set Return
  return (
    <View style={stlView03}>
      <UseCleanOut data={'C1.selecteds'} />
      <View style={stlView04}>
        <Text style={stlTxt01}>{'Cliente'}</Text>

        {btnClose && (
          <TouchableOpacity onPress={btns.close}>
            <UseIcoMoon name="x-square" size={22} color={'#999'} />
          </TouchableOpacity>
        )}
      </View>

      <View style={stlView05}>
        <UseIcoMoon name="user" size={42} color={'#333'} />
        <View style={stlView06}>
          <View style={{ paddingHorizontal: 20, flex: 1 }}>
            <Text style={stlTxt02}>{item.nomeDaEmpresa}</Text>
            <Text style={stlTxt03}>{item.foneDeContato}</Text>
            <Text style={stlTxt04}>{item.observacoes}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={btns.edit}>
          <UseIcoMoon name="edit" size={22} color={'#999'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

const stlView03 = [useStl.cardMask];
const stlView04 = [
  useStl.itemAccordion,
  useStl.flexBetween,
  useStl.flexRow,
  { paddingHorizontal: 20 },
];
const stlView05 = [
  useStl.flexRow,
  {
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'flex-start',
  },
];
const stlView06 = [useStl.flexRow, useStl.flex2];

const stlTxt01 = [useStl.txTitleCard, useStl.txCenter, useStl.flex2];
const stlTxt02 = [useStl.txTitleProfile];
const stlTxt03 = [useStl.flex1];
const stlTxt04 = [stlTxt03, { color: '#999' }];

// ---------------
// #endregion
// ***************************************
