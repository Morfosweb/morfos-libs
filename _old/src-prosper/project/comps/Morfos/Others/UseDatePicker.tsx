import * as React from 'react';

import { Platform, TouchableOpacity, View } from 'react-native';
import { UseModal } from '../../';
import { useData, UseIcoMoon, useStl } from '../../../../config/useMorfos';

import Calendar from '../../../../config/calendar';
import { useDispatch } from 'react-redux';
import { IptTxt } from '../..';

export default ({ infoData }) => {
  // ----------- set Data
  const iptData = useData(infoData);
  const { iptChange, itemId, key, datePath } = iptData;

  const itemDataPath = datePath + `.` + itemId;
  const selData = useData(itemDataPath);
  const condDate = selData ?? new Date();

  // ----------- set Hooks
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();

  // ----------- set Change
  const setDate = currDate =>
    dispatch({
      type: iptChange,
      value: currDate,
      field: itemId,
      key: key,
    });

  const condWeb = Platform.OS === 'web';

  const onChangeNative = (event, selectedDate) => {
    const currDate = selectedDate || condDate;
    setShow(false);
    setDate(currDate);
  };
  const onChangeWeb = selectedDate => {
    const currDate = selectedDate || condDate;
    setDate(currDate);
    toggle();
  };
  const onChange = condWeb ? onChangeWeb : onChangeNative;
  const toggle = () => setShow(!show);

  const CondWebComp = ({ children }) => {
    const WebComp = (
      <UseModal visible={show} transparent>
        <View style={stlModal}>{children}</View>;
      </UseModal>
    );

    const condComp = condWeb ? WebComp : children;

    const condShow = show ? condComp : null;
    return condShow;
  };

  return (
    <View style={{ width: 50, flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggle}>
        <IptTxt infoData={infoData} />
      </TouchableOpacity>

      <View style={{ justifyContent: 'center', margin: 10 }}>
        <TouchableOpacity onPress={toggle}>
          <UseIcoMoon name="calendar" size={22} color={'#333'} />
        </TouchableOpacity>

        <CondWebComp>
          <Calendar value={condDate} onChange={onChange} />
        </CondWebComp>
      </View>
    </View>
  );
};
const stlInput = [
  useStl.input,
  { zIndex: 1, marginRight: 5, width: 100, textAlign: 'center' },
];

const stlModal = {
  flex: 1,
  justifyContent: 'center',
  height: '100%',
  backgroundColor: '#000a',
  alignItems: 'center',
};
