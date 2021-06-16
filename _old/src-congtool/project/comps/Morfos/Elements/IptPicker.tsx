// ----------- import Packs
import { useDispatch } from 'react-redux';
// import { Picker } from '@react-native-picker/picker';
import { View, Text, Picker } from 'react-native';

// ----------- import Internals
import { useData } from '../../../../config/useMorfos';
import { primaryColor } from '../../../../config/styles';

// ----------- set Default Component
export default ({ infoData, styleProp = {} }) => {
  // ----------- set Data
  const iptData = useData(infoData);
  const {
    pickerList,
    label: title,
    pHolder,
    itemId,
    dataPath,
    editData,
    key,
    iptChange,
  } = iptData;
  const emptyPath = dataPath.split('.')[0] + '.forms.iptsError.' + itemId;
  const condError = useData(emptyPath);

  // ----------- set Hooks
  const dispatch = useDispatch();

  // ---------- set Selected Data
  const itemEditData = editData?.[itemId];
  const condEditData = itemEditData ?? 'pHolder';
  const itemDataPath = dataPath + `.` + itemId;
  const selData = useData(itemDataPath);
  const selectedValue = selData ?? condEditData;
  const labelList = [{ label: pHolder, id: 'pHolder' }, ...pickerList];

  // ---------- set inputChange
  const changeValue = val => {
    const condPHolder = val === 'pHolder';
    if (condPHolder) {
      return;
    }
    const found = labelList.find(item2 => item2.id === val);
    return (
      found &&
      dispatch({
        key: key,
        type: iptChange,
        dataPath,
        value: val,
        itemId: itemId,
        label: found.label,
      })
    );
  };

  // ---------- set condDefault
  const condEnabled = true;

  // ---------- set condStls
  const condStlSel = selectedValue !== 'pHolder' && condEnabled;
  const condStlPkComp = [
    stlPicker,
    condStlSel ? stlPickerSel : {},
    !condEnabled && stlDisable,
    styleProp,
  ];
  const condStlPkView = [
    stlPickerView,
    !condEnabled ? stlDisable : {},
    condError && stlErrorView,
  ];
  const condStlValidTxt = [stlTXT01, condError ? stlErrorTxt : {}];

  // ---------- set PickerItem
  const pickerMap = itemPck => {
    const { id, label } = itemPck;
    return <Picker.Item key={id} label={label} value={id} />;
  };
  const pickerItems = labelList.map(pickerMap);

  // ---------- set Return
  return (
    <View style={condStlPkView}>
      <Text style={condStlValidTxt}>{title}</Text>

      <Picker
        style={condStlPkComp}
        enabled={condEnabled}
        selectedValue={selectedValue}
        onValueChange={changeValue}
      >
        {pickerItems}
      </Picker>
    </View>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

const stlTXT01 = [
  {
    fontSize: 12,
    color: primaryColor,
  },
];
const stlPickerView = [
  {
    borderBottomWidth: 2,
    borderColor: 'lightgray',
    marginTop: 20,
  },
];
const stlDisable = [{ backgroundColor: '#efefef' }];

const stlErrorView = { borderColor: 'red' };
const stlErrorTxt = { color: 'red' };

const stlPicker = {
  borderWidth: 0,
  height: 40,
  fontSize: 14,
  color: '#888',
};

const stlPickerSel = [
  {
    ...stlPicker,
    color: '#222',
  },
];

// ---------------
// #endregion
// ***************************************
