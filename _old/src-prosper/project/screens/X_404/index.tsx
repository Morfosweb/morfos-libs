// import packages
import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

// import internals
import { useStl, UseIcoMoon, useRouter } from '../../../config/useMorfos';

// ----------- set infoSc
export const infoSc = {
  path: '404',
  groupSc: 'pub1',

  //
  title: 'Página nãoo Encontrada',
};

// ***************************************
// #region :: STYLEs
// ---------------

const stlBODY1 = [useStl.pad20, useStl.flex1];
// const stlBODY1e = [useStl.flexCenter];

const stlBtnView = [useStl.flexCenter];
const stlBtn = [useStl.btn, useStl.bgPrimary, useStl.btnMedium];

const stlBODY2c = [useStl.txtPrimaryInverse];
// const stlBODY3 = [useStl.btn, useStl.btnLarge, useStl.btnPrimary];
const stlTXT = [{ fontSize: 22, color: '#b4790e', marginTop: 20 }];

const stlNAV1 = [useStl.shortBar];
const stlNAV1a = [useStl.navbarView];
const stlNAV1b = [useStl.leftBox];
const stlNAV1c = [useStl.centerBox];
const stlNAV1d = [useStl.rightBox];
const stlNAV1e = [useStl.longBar];
const stlNAV2 = [useStl.titlePageLeft];
const stlCARD = [
  useStl.card,
  useStl.flex1,
  useStl.flexCenter,
  useStl.cardLongBar,
  { height: 400 },
];

// ---------------
// #endregion
// ***************************************

export default () => {
  // ------ Hooks + Vars
  const { callRouter } = useRouter();
  const scContent = useSelector(state => {
    // const teste = state.sttContent[1].sc404;
    return {
      title: 'Página não encontrada',
      errorMsg: 'Mensagem Erro',
      btn: 'IR PRA HOME',
    };
  });
  const goTo = () => callRouter('signin');

  return (
    <View style={{ flex: 1 }}>
      {false && (
        <>
          <View style={stlNAV1}>
            <View style={stlNAV1a}>
              <TouchableOpacity style={stlNAV1b} onPress={goTo}>
                <UseIcoMoon name={'left'} size={22} color={'#fff'} />
              </TouchableOpacity>
              <View style={stlNAV1c}>
                <Text style={stlNAV2}>{scContent.title}</Text>
              </View>

              <View style={stlNAV1d} />
            </View>
          </View>
          <View style={stlNAV1e} />
        </>
      )}

      <View style={stlBODY1}>
        <View style={stlCARD}>
          <UseIcoMoon name={'error'} size={120} color={'#b4790e'} />
          <Text style={stlTXT}>{scContent.errorMsg}</Text>
        </View>

        <View style={stlBtnView}>
          <TouchableOpacity style={stlBtn} onPress={goTo}>
            <Text style={stlBODY2c}>{scContent.btn}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
