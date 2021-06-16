// ----------- import Packs
import { View, Text, TouchableOpacity } from 'react-native';

// ----------- import Internals
import { UseIcoMoon, useStl } from '../../../config/useMorfos';

// ----------- set Default
export default ({ info }) => {
  // ----------- set Props Params
  const { content } = info;

  // ----------- set Return
  return (
    <View style={stl01}>
      <View style={stl01a}>
        <View style={stl03}>
          <Text style={stl04}>CONGTOOL</Text>
          <UseIcoMoon name="edit" size={70} color={'#fff'} />

          <Text style={stl04a}>Ferramentas para</Text>
          <Text style={stl04b}>Congregações e Grupos</Text>
        </View>
      </View>

      {/* ---------- set BTNs */}
      <View style={stl01b}>
        <View style={stl01c}>
          <Text style={stl04c}>Entre usando sua conta Google</Text>
          <TouchableOpacity style={stl02} onPress={info.btnEnter}>
            <Text style={stl02a}>{content.txtBtn}</Text>
          </TouchableOpacity>

          {false && <Text style={stl04c}>{content.warn}</Text>}
        </View>
      </View>
    </View>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

const stl01: any = [useStl.flex1, useStl.bgPrimary];
const stl01a: any = [useStl.flexCenter, useStl.flex3];
const stl01b: any = [useStl.flexBetween, useStl.flex1, { paddingVertical: 20 }];
const stl01c: any = [useStl.flexCenter];
const stl02: any = [useStl.btn, useStl.btnLarge, useStl.bgSecondary];
const stl02a: any = [useStl.txtPrimaryInverse];
const stl03: any = [useStl.flexCenter, { marginBottom: 50 }];
const stl04: any = [{ fontSize: 24, color: '#fff', marginBottom: 40 }];
const stl04a: any = [{ fontSize: 24, color: '#fff', marginTop: 40 }];
const stl04b: any = [{ fontSize: 24, color: '#fff', marginTop: 5 }];
const stl04c: any = [
  useStl.txtBase,
  { color: '#aaa', marginBottom: 10, textAlign: 'center' },
];

// ---------------
// #endregion
// ***************************************
