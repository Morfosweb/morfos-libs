// ----------- import Packs
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useData } from '../../../../config/useMorfos';
import { useDispatch } from 'react-redux';
import { primaryColor } from '../../../../config/styles';

// ---------- set Types
type Props = {
  infoData: string;
  styleParam?: {};
};

// ---------- set Default Component
export default ({ infoData, styleParam }: Props) => {
  // ----------- set Data
  const iptData = useData(infoData);
  const {
    iptChange,
    itemId,
    label,
    pHolder,
    lines,
    editData,
    key,
    dataPath,
    condNumber,
  } = iptData;
  const emptyPath = dataPath.split('.')[0] + '.forms.iptsError.' + itemId;
  const condError = useData(emptyPath);

  // ---------- set Selected Data
  const itemEditData = editData?.[itemId];
  const condEditData = itemEditData ?? '';
  const itemDataPath = dataPath + `.` + itemId;
  const selData = useData(itemDataPath);
  const condValue = selData ?? condEditData;

  // ---------- set Hooks
  const dispatch = useDispatch();
  const stls = useStls({ condError, primaryColor, lines, condValue });

  // ---------- set Props
  const {
    setLabelUp,
    setFocus,
    stlContainer,
    stlLabel,
    condLabelUp,
    stlIpt,
    sttLabelUp,
    placeholderTextColor,
    condLines,
  } = stls;

  // ---------- TS ERROR 1
  const stlLabelView: any = stls.stlLabelView;

  // ---------- set Changes
  const changeValue = txt => {
    const numberMatch = txt.match(/^$|^[0-9]/);
    if (condNumber && !numberMatch) {
      return;
    }

    dispatch({
      type: iptChange,
      value: txt,
      field: itemId,
      dataPath,
      key,
    });
  };

  const changeBlur = () => {
    setLabelUp(false);
    setFocus(false);
  };

  const changeFocus = () => {
    setLabelUp(true);
    setFocus(true);
  };

  // ---------- set CondProps
  const condKeyNumber = condNumber && { keyboardType: 'number-pad' };
  const condProps = { ...condKeyNumber };

  return (
    <View style={[stlContainer, styleParam]}>
      <View style={stlLabelView}>
        <Text style={stlLabel}>{condLabelUp && label}</Text>
      </View>
      <TextInput
        style={{ ...stlIpt }}
        onChangeText={changeValue}
        onBlur={changeBlur}
        onFocus={changeFocus}
        value={condValue}
        // defaultValue={sttDefault}
        placeholderTextColor={
          !sttLabelUp ? stlLabel.color : placeholderTextColor
        }
        placeholder={sttLabelUp ? pHolder : label}
        // onfocus={""}
        multiline={condLines}
        numberOfLines={lines}
        {...condProps}
      />
    </View>
  );
};

// #region :: STYLEs *********
// ------------------------------

type PropsInfo = {
  condError: any;
  primaryColor: any;
  lines: any;
  condValue: any;
};

const useStls = (info: PropsInfo) => {
  // ---------- set Props
  const { condError, primaryColor, lines, condValue } = info;

  // ---------- set Hooks
  const [sttLabelUp, setLabelUp] = useState(false);
  const [sttFocus, setFocus] = useState(false);

  // ---------- set Values
  const condLines = lines > 1;
  const condLabelUp = sttLabelUp || condValue;
  const setLabelSize = num => (!condLabelUp ? num : num * 0.8);
  const myStlLabel = infoStl().stlLabel || { fontSize: 14 };
  const labelFontSize = setLabelSize(myStlLabel.fontSize);

  const iptLabelUp = !condLabelUp && labelFontSize;
  const iptLabelDown = infoStl().stlLabel ? infoStl().stlLabel.fontSize : 15;
  const iptFontSize = iptLabelUp || iptLabelDown;

  const valueColor = condValue ? 'gray' : 'lightgray';
  const focusColor = sttFocus ? primaryColor : valueColor;

  function infoStl() {
    const condFtStl = sttLabelUp && !condValue ? { fontStyle: 'italic' } : {};
    const condFontSize = val => (val ? { fontSize: val } : {});
    const iptFtSize = condFontSize(iptFontSize);
    const lblFtSize = condFontSize(labelFontSize);
    return {
      placeholderTextColor: 'gray',

      stlContainer: {
        width: '100%',
        marginBottom: 5,
      },
      stlLabelView: {
        height: 22,
        justifyContent: 'flex-end',
      },

      stlLabel: {
        color: condError ? 'red' : primaryColor,
        ...lblFtSize,
      },
      stlIpt: {
        paddingLeft: 0,
        height: !condLines && 30,
        borderBottomWidth: 2,
        borderColor: condError ? 'red' : focusColor,
        outline: 'none',

        backgroundColor: '#fff',
        color: 'black',
        ...condFtStl,
        ...iptFtSize,
      },
    };
  }

  // ---------- set Return
  const objReturn = {
    setLabelUp,
    setFocus,
    stlContainer: infoStl().stlContainer,
    stlLabelView: infoStl().stlLabelView,
    stlLabel: infoStl().stlLabel,
    condLabelUp,
    stlIpt: infoStl().stlIpt,
    sttLabelUp,
    placeholderTextColor: infoStl().placeholderTextColor,
    condLines,
  };

  return objReturn;
};

// ------------------------------
// #endregion *********
