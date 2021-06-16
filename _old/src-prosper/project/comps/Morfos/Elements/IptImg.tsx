// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Image, TouchableOpacity, Text } from 'react-native';

// ----------- import Internals
import defaultImg from '../../../images/default.jpg';
import { useData, useStl } from '../../../../config/useMorfos';

// ----------- set Default
export default ({ infoData }) => {
  // ---------- set Selectors
  const imgInfo = useData(infoData);
  const imgData = useData(imgInfo.imgData);
  const isEditable = imgInfo.isEditable;

  // ---------- set Hooks
  const dispatch = useDispatch();

  // ---------- set Input Change
  const iptChange = val =>
    dispatch({
      type: imgInfo.iptChange,
      value: val.target.files[0],
      field: imgInfo.field,
    });

  // ---------- set condDefault
  // eslint-disable-next-line no-undef
  const urlImg = () => URL.createObjectURL(imgData);
  const condEditImg = isEditable ? imgInfo.editData : defaultImg;
  const condPreview = imgData ? urlImg() : condEditImg;

  // ---------- set Return
  return (
    <View style={stlBODY1d}>
      <Image source={condPreview} style={stlTHUMBNAIL} />
      <TouchableOpacity style={stlBODY3b}>
        <Text style={stlBODY3c}>Carregar Imagem</Text>
        <input style={stlBODY3e} type="file" onChange={iptChange} />
      </TouchableOpacity>
    </View>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

const stlBODY1d = [
  useStl.mgB20,
  {
    borderWidth: 2,
    borderColor: '#eee',
    minHeight: 100,
    borderRadius: 16,
    padding: 10,
    paddingBottom: 4,
    alignItems: 'center',
  },
];

const stlTHUMBNAIL = { width: '100%', height: 130, borderRadius: 10 };

const stlBODY3b = [
  useStl.btn,
  useStl.btnXSmall,
  { width: 100, height: 20, margin: 10 },
];

const stlBODY3c = [
  {
    fontSize: 11,
    color: '#999',
    position: 'absolute',
    top: 3,
    zIndex: 2,
  },
];

const stlBODY3e = {
  opacity: 0,
  position: 'absolute',
  zIndex: 10,
  width: 100,
  height: 20,
};

// ---------------
// #endregion
// ***************************************
