// ----------- import Packs
import React from 'react';
import { TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { useData, useStl } from '../../../config/useMorfos';

export default ({ infoData, style }) => {
  // ----------- set Selectors
  const item = useData(infoData);

  const { iptChange, itemId, lines, editData, label } = item;

  // ---------- set Effects
  const fxValue = () => {
    const condEdit = editData ?? '';

    setDefault(condEdit);
  };

  // ---------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxValue, [editData]);

  const [sttDefault, setDefault] = React.useState('');

  const condLines = lines > 1;

  const changeValue = txt =>
    dispatch({
      type: iptChange,
      value: txt,
      field: itemId,
      key: item.key,
    });

  return (
    <TextInput
      style={[stlIpt, style]}
      onChangeText={changeValue}
      // value={condEdit}
      defaultValue={sttDefault}
      placeholder={label}
      // onfocus={""}
      multiline={condLines}
      numberOfLines={lines}
    />
  );
};

// #region :: info + STYLEs *********
const stlIpt = [useStl.input, { marginBottom: 20 }];

// #endregion *********
