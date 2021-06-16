// ----------- import Packs
import { View, Text, TouchableOpacity } from 'react-native';

// ----------- import Internals
import { UseIcoMoon, useStl } from '../../../config/useMorfos';

// ----------- set Default View
export default ({ info }) => {
  // ----------- set Props Params
  const { content, btnGoto } = info;

  // ----------- set Return View
  return (
    <View style={{ flex: 1 }}>
      {false && (
        <>
          <View style={stlNAV1}>
            <View style={stlNAV1a}>
              <TouchableOpacity style={stlNAV1b} onPress={btnGoto}>
                <UseIcoMoon name={'left'} size={22} color={'#fff'} />
              </TouchableOpacity>
              <View style={stlNAV1c}>
                <Text style={stlNAV2}>{content.title}</Text>
              </View>

              <View style={stlNAV1d} />
            </View>
          </View>
          <View style={stlNAV1e} />
        </>
      )}

      <View style={stlBODY1}>
        <View style={stlCARD}>
          {/* <UseIcoMoon name={'error'} size={120} color={'#b4790e'} /> */}
          <Text style={stlTXT}>{content.errorMsg}</Text>
        </View>

        <View style={stlBtnView}>
          <TouchableOpacity style={stlBtn} onPress={btnGoto}>
            <Text style={stlBODY2c}>{content.txtBtn}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

const stlBODY1 = [useStl.pad20, useStl.flex1];
// const stlBODY1e = [useStl.flexCenter];

const stlBtnView = [useStl.flexCenter];
const stlBtn: any = [useStl.btn, useStl.bgPrimary, useStl.btnMedium];

const stlBODY2c = [useStl.txtPrimaryInverse];
// const stlBODY3 = [useStl.btn, useStl.btnLarge, useStl.btnPrimary];
const stlTXT = [{ fontSize: 22, color: '#b4790e', marginTop: 20 }];

const stlNAV1 = [useStl.shortBar];
const stlNAV1a: any = [useStl.navbarView];
const stlNAV1b = [useStl.leftBox];
const stlNAV1c = [useStl.centerBox];
const stlNAV1d = [useStl.rightBox];
const stlNAV1e: any = [useStl.longBar];
const stlNAV2: any = [useStl.titlePageLeft];
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
