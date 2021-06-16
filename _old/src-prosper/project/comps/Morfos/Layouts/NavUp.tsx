// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// ----------- import Internals
import src1 from '../../../images/logo.png';
import {
  useStl,
  UseIcoMoon,
  useData,
  useRouter,
} from '../../../../config/useMorfos';

// #region :: STYLEs *********

const stlNAV1 = [{ zIndex: 2 }];
const stlNAV1a = [useStl.navbarView, { backgroundColor: '#fff' }];
const stlNAV1c = [useStl.centerBox];
const stlNAV2 = [useStl.titlePageLeft];
const stlLogo = [{ width: 80, height: 24, marginLeft: 20, marginBottom: -3 }];

const stlUserTag = [useStl.flexRow];
const stlAvatar = [useStl.avatar, { marginRight: 2 }];
const stlNameUser = [
  {
    fontWeight: '600',
    width: 120,
    height: 20,
    overflow: 'hidden',
    paddingHorizontal: 5,
  },
];
// #endregion *********

export default () => {
  // ----------- set UseData
  const { imgUrl, name } = useData('baseAuthUser');

  // ----------- set Router
  const { callRouter } = useRouter();

  const goToProfile = () => {
    callRouter('myPf');
  };

  // ----------- set Return
  return (
    <View style={stlNAV1}>
      <View style={[stlNAV1a]}>
        <TouchableOpacity onPress={'info.condGoTo'}>
          <UseIcoMoon name={'icon'} size={20} color={'#fff'} />
        </TouchableOpacity>
        <View style={stlNAV1c}>
          <Text style={stlNAV2}>
            <Image source={src1} style={stlLogo} />
          </Text>
        </View>

        <TouchableOpacity onPress={goToProfile}>
          <View style={stlUserTag}>
            <Image source={imgUrl} style={stlAvatar} />
            <Text style={stlNameUser}>{name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
