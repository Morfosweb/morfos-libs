// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Cp02 } from '..';

// ----------- import Internals
import { UseIcoMoon, useData } from '../../../config/useMorfos';
import useStl from '../../../config/stylesOld';
import { hasData } from '../../../config/useMorfos/utils';

export default props => {
  // ----------- set Data
  const rdAuthUser = useData('rdAuthUser');
  const domainsArr = useData('baseDomains.domains');

  // ----------- set Hooks
  const [sttMenu, setMenu] = React.useState(false);
  const callRouter = param => {};

  const toggleMenu = () => setMenu(!sttMenu);
  const condMenu = sttMenu;

  const condGoTo = () => (!props.back ? toggleMenu() : callRouter(props.back));

  const condFab = rdAuthUser && rdAuthUser.typeAccount === 'adm' && props.fab;

  const goTo = () => callRouter(props.fab);

  // ----------- set if no Domain
  const condDomain = hasData(domainsArr);

  // ----------- set Info Return
  const info = {
    toggleMenu,
    condGoTo,
    condFab,
    children: props.children,
    condMenu,
    longBar: true,
    title: 'Meu Perfil',
    icon: 'menu',
    goTo,
  };

  // ----------- set Return
  return (
    <>
      <View style={stlNAV1}>
        <View style={stlNAV1a}>
          {condDomain && (
            <TouchableOpacity style={stlNAV1b} onPress={info.condGoTo}>
              <UseIcoMoon name={info.icon} size={22} color={'#fff'} />
            </TouchableOpacity>
          )}

          <View style={stlNAV1c}>
            <Text style={stlNAV2}>{info.title}</Text>
          </View>

          <View style={stlNAV1d} />
        </View>
      </View>

      <ScrollView
        style={[!info.longBar && stlBODY1, { backgroundColor: '#f0f0f0' }]}
      >
        {info.longBar && <View style={stlBODY1e} />}
        {info.children}
      </ScrollView>

      {info.condFab && info.condFab ? (
        <TouchableOpacity style={stlBODY4} onPress={info.goTo}>
          <Text style={stlBODY4a}>+</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      {info.condMenu && (
        <View style={stlBODY4b}>
          <Cp02 toggleMenu={info.toggleMenu} />
        </View>
      )}
    </>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

const stlBODY1 = [useStl.pad20, useStl.flex1];

const stlNAV1 = [useStl.shortBar];
const stlNAV1a = [useStl.navbarView];
const stlNAV1b = [useStl.leftBox];
const stlNAV1c = [useStl.centerBox];
const stlNAV1d = [useStl.rightBox];
const stlNAV2 = [useStl.titlePageLeft];
const stlBODY1e = [useStl.longBar];
const stlBODY4 = [useStl.btnFab];
const stlBODY4a = [useStl.txtFab];
const stlBODY4b: any = [
  {
    position: 'absolute',
    elevation: 15,
    zIndex: 100,
    width: '100%',
    height: '100%',
  },
];
// const stlBODY3 = []

// ---------------
// #endregion
// ***************************************
