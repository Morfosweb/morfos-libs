// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import { useStl, UseIcoMoon } from '../../../../config/useMorfos';

// #region :: STYLEs *********

const stlDialogBox = [
  useStl.dialogueBox,
  {
    minWidth: 110,
    padding: 5,
    borderRadius: 5,
    zIndex: 5,

    // -- Align Position
    position: 'absolute',
    top: 22,
    right: 5,
  },
];

const stlBtList = [
  {
    width: '100%',
    padding: 4,
  },
];

// #endregion *********

export default () => {
  // ---------- set Show, Hide Box
  const [sttCondShow, setCondShow] = React.useState(false);
  const toggleBox = () => {
    setCondShow(!sttCondShow);
  };

  return (
    <>
      <TouchableOpacity onPress={toggleBox}>
        <UseIcoMoon name={'options'} size={18} color={'#333'} />
      </TouchableOpacity>

      {/* SHOW or HIDE */}
      <ListOptions condShow={sttCondShow} />
    </>
  );
};

const ListOptions = ({ condShow }) => {
  // ---------- set Selectors
  // const idToDel = useData('C1.idToEdit');

  // ---------- set Hooks
  const dispatch = useDispatch();

  const deleteItem = () => dispatch({ type: 'comps_DeleteItem' });

  return (
    condShow && (
      <View style={stlDialogBox}>
        <TouchableOpacity style={stlBtList} onPress={deleteItem}>
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    )
  );
};
