// ----------- import Packs
import React from 'react';
import { Image, View, Text, TouchableOpacity, Platform } from 'react-native';

// ----------- import Internals
import { useStl, UseIcoMoon, useRouter } from '../../../config/useMorfos';

const Cp01 = 'logo';
// const Cp01 = 'search'

export default ({ info }) => {
  const compProps = {};

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btns = {
    // back: () => (Platform.OS === 'web' ? history.back() : callRouter('home')),
    back: () =>
      Platform.OS === 'web' ? callRouter('home') : callRouter('home'),
    exit: () => callRouter('signin'),
  };

  return (
    <View style={condition01}>
      <View style={stl01}>
        <TouchableOpacity style={stl02} onPress={btns.back}>
          <UseIcoMoon name="chevron-left" size={26} color={condition02} />
        </TouchableOpacity>
      </View>

      <View style={stl03}>
        {Cp01 && Cp01 === 'logo' ? (
          <Image style={stl04} source={require('../../images/logo.png')} />
        ) : (
          <Text style={stl05}>{Cp01 === 'search' ? '' : Cp01}</Text>
        )}
      </View>

      <View style={stl06}>
        <TouchableOpacity onPress={btns.exit}>
          <UseIcoMoon name="logout" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// #region :: STYLEs *********

const condition01 =
  Cp01 && Cp01 === 'search' ? useStl.searchBar : useStl.navbarView;

const stl01 = [useStl.leftBox];
const stl02 = [useStl.flexCenter, { flex: 1, width: 50 }];
const condition02 = Cp01 && Cp01 === 'search' ? '#2A576B' : '#EEE';

const stl03 = [useStl.centerBox];
const stl04 = [useStl.logoBar];
const stl05 = [useStl.txTitleScreen];
const stl06 = [useStl.rightBox];

// #endregion *********
