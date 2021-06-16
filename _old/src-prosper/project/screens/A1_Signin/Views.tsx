// ----------- import Packs
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';

// ----------- import Images
import srcBgImage from '../../images/splash.png';
import srcImgLogo from '../../images/logo.png';

// ----------- set Default
export default ({ info }) => {
  // ----------- set Props
  const { content, iptPwd, btn } = info;

  // ----------- set Return
  return (
    <ImageBackground style={stlBgImg} source={srcBgImage}>
      <View style={stlView02}>
        <View style={stlViewImgLogo}>
          <Image source={srcImgLogo} resizeMode={'cover'} style={stlImgLogo} />
        </View>

        <View style={stlViewLogin}>
          <TextInput
            secureTextEntry={true}
            style={stlIptEnter}
            placeholder={content.pwdPH}
            onChangeText={txt => iptPwd(txt)}
          />
          {content.msgError && <Text style={stlMsg}>Senha Incorreta!</Text>}
          <TouchableOpacity style={stlBtnEnter} onPress={btn.goHome}>
            <Text style={stlTxtEnter}>{content.enter}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

// #region :: STYLEs *********

// ----------- set Image
const stlBgImg = [useStl.flex1];
const stlView02 = [useStl.pad20, useStl.flex1];
const stlMsg = [{ color: 'white' }];

// ----------- set Brand
const stlViewImgLogo = [useStl.flex1, useStl.brandBox];
const stlImgLogo = [useStl.logo];
const stlViewLogin = [useStl.flex1, useStl.flexCenter];
const stlTxt01 = [useStl.txBase, { color: '#ebebeb', margin: 10 }];

// ----------- set Buttons
const stlBtnEnter = [useStl.btnPrimary, useStl.btnLarge];
const stlTxtEnter = [useStl.txInverseColor];

// ----------- set Inputs
const stlIptEnter = [
  useStl.input,
  {
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,.8)',
    outline: 'none',
    width: 200,
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
];

// #endregion *********
